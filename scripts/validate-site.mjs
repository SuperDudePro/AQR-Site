import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve, sep } from 'node:path';

const ORIGIN = 'https://appliedquantitativereasoning.com';
const ROOT = process.cwd();
const PUBLIC = resolve('public');
const errors = [];
const assetExts = new Set(['.avif', '.css', '.gif', '.html', '.ico', '.jpeg', '.jpg', '.json', '.pdf', '.png', '.svg', '.txt', '.webp', '.xml', '.zip']);
const sourceExts = new Set(['.css', '.html', '.js', '.jsx', '.mjs', '.ts', '.tsx']);
const rel = (path) => relative(ROOT, path).split(sep).join('/');
const fail = (source, target, reason) => errors.push(`${source}: ${target} — ${reason}`);
const normalizeRoute = (value) => {
  let path = decodeURI(value || '/').replace(/\\/g, '/').replace(/\/{2,}/g, '/');
  if (!path.startsWith('/')) path = `/${path}`;
  return path.length > 1 ? path.replace(/\/+$/, '') : path;
};

function walk(path) {
  if (!existsSync(path)) return [];
  if (statSync(path).isFile()) return [path];
  return readdirSync(path, { withFileTypes: true }).flatMap((entry) =>
    ['node_modules', 'dist', '.git'].includes(entry.name) ? [] : walk(join(path, entry.name)),
  );
}

const sitemapPath = resolve('public/sitemap.xml');
const sitemap = existsSync(sitemapPath) ? readFileSync(sitemapPath, 'utf8') : '';
if (!sitemap) fail('public/sitemap.xml', '(missing)', 'sitemap was not generated');
const routes = new Set();
for (const match of sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)) {
  const loc = match[1].trim();
  try {
    const url = new URL(loc);
    if (url.origin !== ORIGIN) fail('public/sitemap.xml', loc, `wrong origin; expected ${ORIGIN}`);
    if (url.search || url.hash) fail('public/sitemap.xml', loc, 'sitemap URL contains a query or fragment');
    const route = normalizeRoute(url.pathname);
    if (routes.has(route)) fail('public/sitemap.xml', loc, 'duplicate normalized route');
    routes.add(route);
  } catch {
    fail('public/sitemap.xml', loc, 'invalid URL');
  }
}
if (!routes.size) fail('public/sitemap.xml', '<loc>', 'sitemap has no routes');
if (!existsSync(resolve('dist/index.html'))) fail('dist/index.html', '(missing)', 'Vite output was not generated');

function validateTarget(source, raw) {
  const target = raw.trim();
  if (!target || target.startsWith('{') || target.includes('${') || target.startsWith('#') || /^(mailto|tel|data|blob):/i.test(target)) return;
  if (target.startsWith('//')) return fail(source, target, 'protocol-relative URL is not allowed');
  let path = target;
  if (/^https?:\/\//i.test(target)) {
    try {
      const url = new URL(target);
      if (url.origin !== ORIGIN) return;
      path = `${url.pathname}${url.search}${url.hash}`;
    } catch {
      return fail(source, target, 'malformed absolute URL');
    }
  }
  if (!path.startsWith('/')) return;
  const clean = path.split(/[?#]/)[0];
  if (clean.startsWith('/src/')) return;
  let decoded;
  try { decoded = decodeURI(clean); } catch { return fail(source, target, 'malformed percent encoding'); }
  const ext = extname(decoded).toLowerCase();
  if (ext && assetExts.has(ext)) {
    const asset = join(PUBLIC, ...normalizeRoute(decoded).slice(1).split('/'));
    if (!existsSync(asset)) fail(source, target, `missing public asset (${rel(asset)})`);
    return;
  }
  const route = normalizeRoute(decoded);
  if (!routes.has(route)) fail(source, target, 'internal route is absent from the sitemap');
}

const files = ['src', 'index.html'].flatMap((entry) => walk(resolve(entry))).filter((file) => sourceExts.has(extname(file).toLowerCase()));
const patterns = [
  /\b(?:href|src|poster|action|to)\s*=\s*["'`]([^"'`]+)["'`]/g,
  /\b(?:href|src|poster|action|to|png|pdf|image|url)\s*:\s*["'`]([^"'`]+)["'`]/g,
  /\b(?:href|src|poster|action|to)\s*=\s*\{\s*["'`]([^"'`]+)["'`]\s*\}/g,
];
for (const file of files) {
  const source = rel(file);
  const text = readFileSync(file, 'utf8');
  if (text.includes('https://www.appliedquantitativereasoning.com')) fail(source, 'https://www.appliedquantitativereasoning.com', `non-canonical host; expected ${ORIGIN}`);
  for (const pattern of patterns) for (const match of text.matchAll(pattern)) validateTarget(source, match[1]);
  for (const match of text.matchAll(/\bsrcSet\s*=\s*(?:\{\s*)?["'`]([^"'`]+)["'`]/g)) {
    for (const part of match[1].split(',')) validateTarget(source, part.trim().split(/\s+/)[0]);
  }
}

const posterFile = resolve('src/posterData.ts');
const posterSource = existsSync(posterFile) ? readFileSync(posterFile, 'utf8') : '';
if (!posterSource) fail('src/posterData.ts', '(missing)', 'poster registry is missing');
const slugs = [...posterSource.matchAll(/\bslug\s*:\s*["'`]([^"'`]+)["'`]/g)].map((match) => match[1]);
const seenSlugs = new Set();
for (const slug of slugs) {
  if (seenSlugs.has(slug)) fail('src/posterData.ts', slug, 'duplicate poster category slug');
  seenSlugs.add(slug);
  const route = `/classroom-posters/${slug}`;
  if (!routes.has(route)) fail('public/sitemap.xml', route, 'poster category is missing from the sitemap');
}
if (!routes.has('/classroom-posters/all')) fail('public/sitemap.xml', '/classroom-posters/all', 'all-posters route is missing');
for (const match of posterSource.matchAll(/\b(?:png|pdf)\s*:\s*["'`]([^"'`]+)["'`]/g)) validateTarget('src/posterData.ts', match[1]);

const vercelPath = resolve('vercel.json');
const vercel = existsSync(vercelPath) ? readFileSync(vercelPath, 'utf8') : '';
if (!vercel) fail('vercel.json', '(missing)', 'Vercel route configuration is missing');
for (const route of routes) {
  if (route === '/') continue;
  const token = route.startsWith('/classroom-posters/') ? route.split('/').at(-1) : route.slice(1);
  if (!vercel.includes(token)) fail('vercel.json', route, 'sitemap route is not represented in the SPA rewrites');
}

if (errors.length) {
  console.error(`Site validation failed with ${errors.length} problem${errors.length === 1 ? '' : 's'}:`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`Site validation passed: ${routes.size} routes and ${slugs.length} poster categories checked.`);
