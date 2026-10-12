/** Localised string. `ar` must be natural Modern Standard Arabic, not a literal word-by-word translation. */
export type L = { en: string; ar: string };
/** Localised list of short paragraphs / bullets. */
export type LL = { en: string[]; ar: string[] };

export type CategoryKey =
  | 'commerce' // Delivery & commerce
  | 'legaltech'
  | 'edtech'
  | 'health'
  | 'fintech'
  | 'opensource'
  | 'own'; // Own products

/** client = client work (code belongs to the client), own = own product, source = source code is public. */
export type ProjectKind = 'client' | 'own' | 'source';

export type LinkType = 'github' | 'play' | 'appstore' | 'web' | 'pubdev' | 'video' | 'other';

export interface ProjectImage {
  /** Path relative to D:/shaker-github/repos, e.g. "talabatek-case-study/assets/screens-driver.png" */
  src: string;
  alt: L;
  caption: L;
  role: 'banner' | 'gallery' | 'feature';
  /** For two-part projects: which part key this image belongs to. */
  part?: string;
}

export interface Project {
  slug: string;
  order: number;
  featured: boolean;
  name: L;
  kind: ProjectKind;
  categories: CategoryKey[];
  /** Hex accent colour matching the project's banner / brand. */
  accent: string;
  /** Square app icon under public/, e.g. "img/logos/talabatek.webp" (built by `npm run logos`). */
  logo?: string;
  /** Country the product serves. */
  region: L | null;
  /** Years, only if stated in the README. */
  period: string | null;
  platforms: string[];
  tagline: L;
  summary: L;
  overview: LL;
  role: LL;
  challenge: LL;
  highlights: { title: L; items: LL }[];
  signature: { title: L; body: LL; image: string | null } | null;
  engineering: { title: L; body: L }[];
  results: LL;
  metrics: { value: string; label: L }[];
  stack: string[];
  parts?: { key: string; name: L; summary: L; repo: string }[];
  links: { type: LinkType; label: L; url: string }[];
  images: ProjectImage[];
}
