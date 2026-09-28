import fs from 'node:fs';
import { publicRoutes, SITE_ORIGIN } from '../src/routeRegistry.ts';

const today = new Date().toISOString().slice(0, 10);
const urls = publicRoutes.map(({ path }) => path)
  .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

const escapeXml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const body = urls
  .map((path) => {
    const loc = path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;
    return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${path === '/' ? '1.0' : '0.7'}</priority>\n  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
fs.writeFileSync('public/sitemap.xml', xml);
console.log(`Generated public/sitemap.xml with ${urls.length} URLs.`);
