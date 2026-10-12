import type { Project } from './types';
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
