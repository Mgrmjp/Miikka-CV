# Miikka Mäkelä | Portfolio & CV

Static [Astro](https://astro.build/) site: Finnish portfolio homepage plus a dedicated CV page and downloadable PDF. Content lives in one TypeScript data file; build output is plain HTML/CSS for any static host.

**Live:** [miikkamakela.fi](https://miikkamakela.fi) (configured in `astro.config.mjs`)

**Repo:** [github.com/Mgrmjp/Miikka-CV](https://github.com/Mgrmjp/Miikka-CV)

## What's on the site

| Route | Purpose |
|-------|---------|
| `/` | Portfolio: hero, work samples, personal projects, background, contact |
| `/cv` | Full CV (experience, clients, skills, case studies, education) |
| `/ansioluettelo` | Redirects to `/cv` |
| `/miikka-makela-cv.pdf` | PDF download (from `public/`) |

## Stack

- Astro 6 (static output)
- TypeScript (`src/data/profile.ts` as single source of truth)
- CSS only (no component framework)
- Google Fonts: Plus Jakarta Sans + DM Sans

## Requirements

- Node.js 20+ (LTS recommended)
- npm

Optional for PDF regeneration: Playwright Chromium (`npx playwright install chromium`)

Optional for screenshot QA: Playwright (`npx playwright install chromium`)

## Quick start

```sh
git clone git@github.com:Mgrmjp/Miikka-CV.git
cd Miikka-CV
npm install
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

```sh
npm run build    # output → dist/
npm run preview  # serve dist/ locally
```

## Project layout

```
src/
  data/profile.ts      # All copy: hero, CV, stories, projects, contact
  pages/
    index.astro        # Portfolio
    cv.astro           # CV page
  components/          # Hero, sections, cards, header, footer
  styles/global.css    # Layout, tokens, components
public/                # Favicon, profile image, PDF
scripts/
  generate-cv-pdf.mjs  # Render /cv-print → public/miikka-makela-cv.pdf
  visual-qa.mjs        # Multi-viewport screenshots (dev only)
```

## Editing content

1. Change text in **`src/data/profile.ts`** (profile, `hero`, `stories`, `personalProjects`, CV blocks, etc.).
2. Run `npm run dev` and check `/` and `/cv`.
3. If CV PDF text changed, regenerate (see below) and commit `public/miikka-makela-cv.pdf`.

Profile image: replace `public/profile-circle.png` (also used for favicons if you regenerate those separately).

## Regenerate CV PDF

The PDF is rendered from the same HTML/CSS as the site (`/cv-print`) via Playwright:

```sh
npx playwright install chromium   # once
npm run cv:pdf
```

Output: `public/miikka-makela-cv.pdf`

Preview the print layout at `/cv-print` or via **Esikatsele CV** on `/cv`.

Fast loop with dev server already running:

```sh
CV_PDF_URL=http://127.0.0.1:4321/cv-print CV_PDF_SKIP_BUILD=1 npm run cv:pdf
```

## Visual QA (optional)

With dev server running:

```sh
npx playwright install chromium
QA_URL=http://127.0.0.1:4321/ node scripts/visual-qa.mjs
```

Screenshots go to `.qa-screenshots/` (gitignored).

## Deploy

Cloudflare Workers project (@astrojs/cloudflare adapter). Pushing to `main`
triggers the GitHub Action (`.github/workflows/deploy.yml`), which builds and
runs `wrangler deploy`.

Manual deploy:

```sh
npm run deploy
```

`npm run deploy` runs `astro build` then
`wrangler deploy --config dist/server/wrangler.json` (the adapter-generated
config carries `main`, assets, routes and D1/KV/Images bindings).

The CI deploy needs a `CLOUDFLARE_API_TOKEN` repo secret (account
`4999371d4aa64b5dd7c09d2568f5115b`) with these scopes:

- Account · Workers Scripts · Edit
- Account · Workers KV Storage · Edit
- Account · D1 · Edit
- Account · Cloudflare Images · Edit
- Zone · Workers Routes · Edit (zone: `miikkama.work`)

Set production URL in `astro.config.mjs` (`site`) if the domain changes.


## License

Private portfolio. All rights reserved unless stated otherwise.
