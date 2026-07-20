import fs from 'node:fs';

const siteUrl = 'https://appliedquantitativereasoning.com';
const today = new Date().toISOString().slice(0, 10);
const appSource = fs.readFileSync('src/App.tsx', 'utf8');
const posterSource = fs.readFileSync('src/posterData.ts', 'utf8');

function normalizePath(value) {
  const normalized = value.trim().replace(/\/{2,}/g, '/').replace(/\/+$/, '');
  return normalized || '/';
}

const paths = new Set(['/']);

for (const match of appSource.matchAll(/path\s*===\s*["']([^"']+)["']/g)) {
  paths.add(normalizePath(match[1]));
}
for (const match of appSource.matchAll(/path\.startsWith\(["']([^"']+)["']\)/g)) {
  paths.add(normalizePath(match[1]));
}

paths.add('/classroom-posters/all');
for (const match of posterSource.matchAll(/slug:\s*["']([^"']+)["']/g)) {
  const slug = match[1].trim().replace(/^\/+|\/+$/g, '');
  if (slug) paths.add(`/classroom-posters/${slug}`);
}

const urls = [...paths]
  .map(normalizePath)
  .filter((path) => path.startsWith('/'))
  .filter((path, index, all) => all.indexOf(path) === index)
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
    const loc = path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`;
    return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${path === '/' ? '1.0' : '0.7'}</priority>\n  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
fs.writeFileSync('public/sitemap.xml', xml);
console.log(`Generated public/sitemap.xml with ${urls.length} URLs.`);
