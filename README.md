# Mahmoud Shaker — Portfolio

Bilingual (English / العربية) portfolio for **Mahmoud Shaker**, Senior Flutter Engineer in Cairo.
Static site built with **Astro 5 + Tailwind CSS 4**, deployed to GitHub Pages at
`https://anashaker.github.io/shaker_portfolio/`.

## Features

- Separate `/en/` and `/ar/` routes with full RTL, `hreflang` alternates and a persisted language choice
  (the root `/` redirects using the saved choice or the browser language).
- Dark and light themes: follows the system preference until the visitor picks one, then the choice is saved. No flash on load.
- 22 projects, each with its own case-study page in both languages: banner, overview, role, challenge, highlights,
  signature feature, screen gallery with a keyboard and swipe lightbox, engineering notes, results, stack and links.
- Filterable project grid (Delivery & commerce, LegalTech, EdTech, Health, AI, Open source, Own products), with the filter kept in the URL (`?filter=ai`).
- Scroll reveals, a cursor spotlight on cards, count-up stats and a marquee. All of them turn off under `prefers-reduced-motion`.
- SEO: canonical URLs, Open Graph and Twitter cards (a 1200×630 image per page), JSON-LD `Person`, `sitemap.xml` and `robots.txt`.
- Self-hosted variable fonts: Bricolage Grotesque (display), Inter (body) and Readex Pro (Arabic).

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
scripts/build-images.mjs
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
