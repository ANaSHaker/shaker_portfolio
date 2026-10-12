import type { LinkType, Project } from './types';
import manifest from './images.json';

const modules = import.meta.glob<{ default: Project }>('./projects/*.json', { eager: true });

export const projects: Project[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => a.order - b.order);

export const featured = projects.filter((p) => p.featured);

export type ImageInfo = { w: number; h: number; variants: { w: number; src: string }[] };
const images = manifest as Record<string, ImageInfo>;

export function imageInfo(src: string): ImageInfo | undefined {
  return images[src];
}

export const bannerOf = (p: Project) => p.images.find((i) => i.role === 'banner') ?? p.images[0];

/** ISO code of the project's country, used for its flag. */
const countryCodes: Record<string, string> = { Egypt: 'eg', 'Saudi Arabia': 'sa', Iraq: 'iq', Palestine: 'ps' };
export const countryOf = (p: Project) => (p.region ? countryCodes[p.region.en] : undefined);

/** One button per destination for cards and the sticky store bar: Play, App Store, GitHub, Web. */
const cardOrder: LinkType[] = ['play', 'appstore', 'github', 'web', 'pubdev'];
export const cardLinks = (p: Project) =>
  cardOrder.flatMap((type) => {
    const l = p.links.find((x) => x.type === type);
    return l ? [l] : [];
  });
