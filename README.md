# Miikka Mäkelä — Portfolio & CV

Static [Astro](https://astro.build/) site: Finnish portfolio homepage plus a dedicated CV page and downloadable PDF. Content lives in one TypeScript data file; build output is plain HTML/CSS for any static host.

**Live:** [miikkamakela.fi](https://miikkamakela.fi) (configured in `astro.config.mjs`)

**Repo:** [github.com/Mgrmjp/Miikka-CV](https://github.com/Mgrmjp/Miikka-CV)

## What's on the site

| Route | Purpose |
|-------|---------|
| `/` | Portfolio — hero, work samples, personal projects, background, contact |
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

Optional for PDF regeneration: Python 3 (stdlib only — no extra packages)

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
  create_cv_pdf.py     # Regenerate public/miikka-makela-cv.pdf
  visual-qa.mjs        # Multi-viewport screenshots (dev only)
```

## Editing content

1. Change text in **`src/data/profile.ts`** (profile, `hero`, `stories`, `personalProjects`, CV blocks, etc.).
2. Run `npm run dev` and check `/` and `/cv`.
3. If CV PDF text changed, regenerate (see below) and commit `public/miikka-makela-cv.pdf`.

Profile image: replace `public/profile-circle.png` (also used for favicons if you regenerate those separately).

## Regenerate CV PDF

The PDF is maintained separately from Astro (hand-built PDF via stdlib, ASCII-safe fallbacks for ä/ö):

```sh
python3 scripts/create_cv_pdf.py
```

Output: `public/miikka-makela-cv.pdf`

Keep `scripts/create_cv_pdf.py` in sync with `profile.ts` when you update experience or clients.

## Visual QA (optional)

With dev server running:

```sh
npx playwright install chromium
QA_URL=http://127.0.0.1:4321/ node scripts/visual-qa.mjs
```

Screenshots go to `.qa-screenshots/` (gitignored).

## Deploy

Static site after `npm run build`. Upload `dist/` to your host or connect the repo to Netlify / Cloudflare Pages / GitHub Pages with:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 20+

Set production URL in `astro.config.mjs` (`site`) if the domain changes.

## License

Private portfolio — all rights reserved unless stated otherwise.
