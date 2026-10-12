import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { langs, url } from '../i18n';

export const GET: APIRoute = ({ site }) => {
  const origin = site!.toString().replace(/\/$/, '');
  const paths = langs.flatMap((l) => [`${l}/`, ...projects.map((p) => `${l}/projects/${p.slug}/`)]);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${paths
  .map((p) => {
    const rest = p.slice(3);
    return `  <url><loc>${origin}${url(p)}</loc>${langs
      .map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${origin}${url(`${l}/${rest}`)}"/>`)
      .join('')}</url>`;
  })
  .join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
