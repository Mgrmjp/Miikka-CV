import type { APIRoute } from "astro";

export const prerender = false;

const TURNSTILE_VERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

async function verifyTurnstile(token: string, secret: string): Promise<boolean> {
  try {
    const res = await fetch(TURNSTILE_VERIFY, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const body = await request.json();
    const { name, email, message, turnstileToken } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Nimi, sähköposti ja viesti vaaditaan." }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }

    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return new Response(
        JSON.stringify({ error: "Kenttien on oltava tekstiä." }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }

    if (email.length > 320 || name.length > 200 || message.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Jokin kentistä on liian pitkä." }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }

    // Verify Turnstile token
    const secret = locals.runtime.env.TURNSTILE_SECRET_KEY;
    if (!secret) {
      console.error("TURNSTILE_SECRET_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Palvelinvirhe. Yritä myöhemmin uudelleen." }),
        { status: 500, headers: { "content-type": "application/json" } }
      );
    }

    if (!turnstileToken || typeof turnstileToken !== "string") {
      return new Response(
        JSON.stringify({ error: "Turvatarkistus puuttuu. Päivitä sivu ja yritä uudelleen." }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }

    const valid = await verifyTurnstile(turnstileToken, secret);
    if (!valid) {
      return new Response(
        JSON.stringify({ error: "Turvatarkistus epäonnistui. Päivitä sivu ja yritä uudelleen." }),
        { status: 403, headers: { "content-type": "application/json" } }
      );
    }

    const db = locals.runtime.env.DB;
    await db
      .prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)")
      .bind(name.trim(), email.trim(), message.trim())
      .run();

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (err) {
    console.error("contact api error:", err);
    return new Response(
      JSON.stringify({ error: "Palvelinvirhe. Yritä myöhemmin uudelleen." }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
};
