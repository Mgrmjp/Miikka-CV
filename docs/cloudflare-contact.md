# Cloudflare Contact System

## Arkkitehtuuri

```
Astro (static)          Cloudflare Worker         D1 (SQLite)
  ┌───────┐              ┌──────────┐           ┌──────────┐
  │ index │  POST JSON   │  site    │  INSERT   │ contacts │
  │  +    │ ──────────►  │  worker  │ ────────► │   db     │
  │ form  │  /api/contact│+Turnstile│           └──────────┘
  └───────┘              └────┬─────┘
                              │ cron "0 8 * * *"
                              ▼
                       ┌──────────────┐
                       │ daily-summary│
                       │   worker     │
                       └──────┬───────┘
                              │ Resend API
                              ▼
                       ┌──────────────┐
                       │  email       │
                       │  summary     │
                       └──────────────┘
```

**Bot prevention:** Cloudflare Turnstile (invisible, ei cookieita, yksityisyysystävällinen).

**Tietojen säilytys:** Nimi, sähköposti ja viesti D1-tietokannassa. Poistuu automaattisesti 12 kk jälkeen. Ei jakoa kolmansille osapuolille. Vain yhteydenottoon vastaamiseen.

## Käyttöönotto

### 1. Asenna työkalut

```bash
npm install -g wrangler
wrangler login
```

### 2. Luo D1-tietokanta

```bash
wrangler d1 create miikkacv-contacts
```

Kopioi tulostettu `database_id` molempiin:
- `wrangler.jsonc` (pääworkerille)
- `workers/wrangler.toml` (cron-workerille)

### 3. Aja schema

```bash
wrangler d1 execute miikkacv-contacts --file=db/schema.sql
```

### 4. Cloudflare Turnstile

1. Mene [dash.cloudflare.com](https://dash.cloudflare.com) → Turnstile → Lisää sivusto
2. Domain: `miikkamakela.fi`
3. Widget mode: **Invisible**
4. Kopioi **Site Key** → aseta build-ympäristöön:
   ```bash
   export PUBLIC_TURNSTILE_SITE_KEY="0x4AAAA..."
   ```
   (tai käytä GitHub Actions secrets + build workflow)
5. Kopioi **Secret Key** → aseta pääworkerille:
   ```bash
   wrangler secret put TURNSTILE_SECRET_KEY
   ```

### 5. Aseta Resend API -avain (cron-workerille)

```bash
cd workers
wrangler secret put RESEND_API_KEY
wrangler secret put NOTIFY_EMAIL
```

- `RESEND_API_KEY`: api-avain [resend.com](https://resend.com)
- `NOTIFY_EMAIL`: sähköposti, johon päiväkoosteet lähetetään

Luo ensin Resendistä lähettäjäosoite (esim. `yhteydenotot@miikkamakela.fi`) ja vahvista domain.

### 6. Päivitä domainin DNS

Lisää Cloudflaressa `miikkamakela.fi`-domain. Vahvista ja vaihda nameserverit.

### 7. Deploy pääworker (sivusto + API)

```bash
PUBLIC_TURNSTILE_SITE_KEY="0x4AAAA..." astro build
wrangler deploy
```

### 8. Deploy cron-worker

```bash
cd workers
wrangler deploy --name miikkan-cv-summary
```

### 9. Testaa

Lähetä lomakkeella testiviesti. Tarkista D1:n sisältö:

```bash
wrangler d1 execute miikkacv-contacts --command="SELECT * FROM contacts ORDER BY created_at DESC LIMIT 5"
```

## Paikallinen kehitys

```bash
PUBLIC_TURNSTILE_SITE_KEY="1x00000000000000000000" astro dev
```

Käytä testiavainta `1x00000000000000000000` (hyväksyy aina) ja vastaavaa salaista avainta `1x0000000000000000000000000000000AA`.

API-reitti (`/api/contact`) vaatii D1-bindauksen, joten paikallisesti testaa `wrangler dev`-tilassa:

```bash
wrangler dev --d1 DB=miikkacv-contacts
```

## Tiedostot

| Tiedosto | Tehtävä |
|----------|---------|
| `src/pages/api/contact.ts` | POST /api/contact — validoi + Turnstile-verify + tallenna D1:een |
| `src/components/ContactForm.astro` | Lomake + Turnstile-widget + JS-fetch + tietosuojateksti |
| `workers/daily-summary.ts` | Cron: hakee eilisen contactit, lähettää Resendillä |
| `workers/wrangler.toml` | Cron-workerin konffi + cron trigger |
| `wrangler.jsonc` | Pääworkerin konffi + D1-binding |
| `db/schema.sql` | D1-taulun luontikomento |
| `src/env.d.ts` | TypeScript-tyypit (DB, TURNSTILE_SECRET_KEY) |

## Tietosuoja (GDPR)

Lomakkeen alapuolella näytettävä teksti:

> **Miten tietoja käsitellään:** Nimi ja sähköposti tallennetaan Cloudflare D1 -tietokantaan viestin kera. Tietoja käytetään ainoastaan yhteydenottoon vastaamiseen. Niitä ei luovuteta kolmansille osapuolille. Tiedot poistetaan automaattisesti 12 kuukauden jälkeen. Cloudflare Turnstile suojaa lomakkeen roskapostilta (tietosuojaseloste).
