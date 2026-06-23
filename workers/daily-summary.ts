/**
 * Daily summary worker — triggered by Cloudflare Cron Trigger.
 *
 * Queries yesterday's contacts from D1 and sends a summary email via Resend.
 *
 * Setup:
 *   1. wrangler d1 create miikkacv-contacts
 *   2. wrangler secret put RESEND_API_KEY
 *   3. Update wrangler.jsonc with database_id
 *   4. Deploy: wrangler deploy workers/daily-summary.ts
 */

interface Contact {
  name: string;
  email: string;
  message: string;
  created_at: string;
}

interface Env {
  DB: D1Database;
  RESEND_API_KEY: string;
  NOTIFY_EMAIL: string;
}

export default {
  async scheduled(_event: ScheduledEvent, env: Env, _ctx: ExecutionContext) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const start = yesterday.toISOString().slice(0, 10) + " 00:00:00";
    const end = yesterday.toISOString().slice(0, 10) + " 23:59:59";

    const { results } = await env.DB
      .prepare("SELECT name, email, message, created_at FROM contacts WHERE created_at >= ? AND created_at <= ? ORDER BY created_at ASC")
      .bind(start, end)
      .all<Contact>();

    if (results.length === 0) {
      console.log("no contacts yesterday — skipping summary");
      return;
    }

    const rows = results.map((c) => {
      const time = new Date(c.created_at + "Z").toLocaleString("fi-FI", {
        hour: "2-digit", minute: "2-digit",
        timeZone: "Europe/Helsinki",
      });
      return `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #e5e5e5;font-weight:600">${escapeHtml(c.name)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #e5e5e5"><a href="mailto:${escapeHtml(c.email)}" style="color:#8b2133">${escapeHtml(c.email)}</a></td>
          <td style="padding:8px 12px;border-bottom:1px solid #e5e5e5">${time}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #e5e5e5;color:#4a4a4a">${escapeHtml(truncate(c.message, 120))}</td>
        </tr>`;
    }).join("\n");

    const html = `
      <h2 style="color:#5c1723">Yhteydenotot ${yesterday.toLocaleDateString("fi-FI")}</h2>
      <p style="color:#4a4a4a">${results.length} uutta yhteydenottoa.</p>
      <table style="width:100%;border-collapse:collapse;font-family:sans-serif;font-size:14px">
        <thead>
          <tr style="background:#f5f5f5;text-align:left">
            <th style="padding:8px 12px;border-bottom:2px solid #ddd">Nimi</th>
            <th style="padding:8px 12px;border-bottom:2px solid #ddd">Sähköposti</th>
            <th style="padding:8px 12px;border-bottom:2px solid #ddd">Aika</th>
            <th style="padding:8px 12px;border-bottom:2px solid #ddd">Viesti</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <p style="margin-top:16px;color:#888;font-size:12px">Miikka CV — automaattinen päiväkooste</p>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Miikka CV <yhteydenotot@miikkamakela.fi>",
        to: [env.NOTIFY_EMAIL],
        subject: `Yhteydenotot ${yesterday.toLocaleDateString("fi-FI")} (${results.length} kpl)`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("resend error:", res.status, err);
    } else {
      console.log(`summary sent: ${results.length} contacts`);
    }
  },
};

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function truncate(s: string, max: number): string {
  if (s.length <= max) return s;
  return s.slice(0, max) + "…";
}
