# Mahmoud Shaker — Portfolio

Bilingual (English / العربية) portfolio for **Mahmoud Shaker**, Senior Flutter & Android Engineer in Cairo.
Static site built with **Astro 5 + Tailwind CSS 4**, deployed to GitHub Pages at
`https://anashaker.github.io/shaker_portfolio/`.

## Features

- Separate `/en/` and `/ar/` routes with full RTL, `hreflang` alternates and a persisted language choice
  (the root `/` redirects using the saved choice or the browser language).
- Dark and light themes: follows the system preference until the visitor picks one, then the choice is saved. No flash on load.
- 23 projects, each with its own page in both languages: banner, overview, role, challenge, highlights,
  signature feature, screen gallery with a keyboard and swipe lightbox, engineering notes, results, stack and links.
- Project cards with the app icon, country flag and Google Play / App Store / GitHub buttons, in a featured section
  and a filterable grid (Delivery & commerce, LegalTech, EdTech, Health, Finance & insurance, Open source, Own products),
  with the filter kept in the URL (`?filter=edtech`).
- App-like on phones and tablets: compact top bar, bottom tab bar, safe-area insets, 44px touch targets, swipeable
  rows and screenshot galleries, and a sticky "get the app" bar on project pages.
- Scroll reveals, a cursor spotlight on cards, and count-up stats. All of them turn off under `prefers-reduced-motion`.
- SEO: canonical URLs, Open Graph and Twitter cards (a 1200×630 image per page), JSON-LD `Person`, `sitemap.xml` and `robots.txt`.
- Self-hosted fonts: Bricolage Grotesque (display), Inter (body) and Tajawal (Arabic).

## Project structure

```
src/
  data/
    projects/*.json     one file per project, bilingual content (schema: data/types.ts)
    images.json         generated image manifest (sizes + WebP variants)
    site.ts             profile, links, stats, services, stack, process, categories
  i18n.ts               UI strings (en/ar) and the base-path helper
  components/           Hero, Services, Featured, AllProjects, TechStack, Process, Contact, Lightbox, ...
  layouts/Base.astro    <head>/SEO, theme + language persistence, global scripts
  pages/
    index.astro         language redirect
    [lang]/index.astro  home
    [lang]/projects/[slug].astro
public/img/             pre-optimised WebP images (committed)
scripts/build-images.mjs  project images + Open Graph images
scripts/build-logos.mjs   app icons for the project cards (public/img/logos)
```

## Content

All project facts come from the READMEs of the showcase repos (`github.com/ANaSHaker/<repo>`).
To edit a project, change its JSON file in `src/data/projects/`. Every text field has `en` and `ar` values.
Projects are sorted by `order`, and the ones with `"featured": true` appear in the Featured section.

## Images

The source images live in the showcase repos, outside this repo. `npm run images` converts them into WebP
(640 / 1024 / 1600 px variants), creates the Open Graph images and writes `src/data/images.json`:

```bash
REPOS_DIR=../repos npm run images   # REPOS_DIR defaults to ../repos
```

`npm run logos` builds the 192 px app icons shown on the cards from the store icons in `../_store` (and brand files
in `../_work` / `../repos`); each project points at its icon with `"logo": "img/logos/<slug>.webp"`.

Commit the output in `public/img/` and `src/data/images.json`. CI only runs `astro build`.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321/shaker_portfolio/
npm run build      # outputs to dist/
npm run preview
```

Add `?theme=light|dark` to a URL to force a theme without saving it. Add `?shot` to turn off motion,
which is useful for screenshots.

## Deploy

`.github/workflows/deploy.yml` builds the site and publishes `dist/` with GitHub Pages Actions on every push to `main`.
In the repo settings, set **Pages → Source** to **GitHub Actions**.

Note: `package.json` pins Vite 6 through `overrides`. Without it, `@tailwindcss/vite` pulls in Vite 8 (Rolldown),
which conflicts with Astro 5.
