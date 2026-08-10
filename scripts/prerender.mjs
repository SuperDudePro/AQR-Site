// Browserless prerender.
//
// Renders every route in dist/sitemap.xml to static HTML using React 19's server
// renderer, then writes a real dist/<route>/index.html with that route's own title,
// meta description, canonical, and JSON-LD baked into the served HTML. No browser is
// launched; the sitemap is the single source of truth for which routes exist, so this
// stays in lockstep with generate-sitemap.mjs automatically.
//
// The client bundle is untouched: main.tsx still client-renders on load, so users get
// the identical interactive app. This step only fills the pre-JS HTML that crawlers and
// AI fetchers (GPTBot, ClaudeBot, PerplexityBot, CCBot) read.

import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pageElement, getPage, PAGE_META, SITE_ORIGIN } from "../src/App.tsx";
import { buildStructuredData } from "../src/structuredData.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const TEMPLATE = readFileSync(join(DIST, "index.html"), "utf8");
const SITEMAP = readFileSync(join(DIST, "sitemap.xml"), "utf8");

const escapeHtml = (v) =>
  v.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const escapeAttr = (v) => escapeHtml(v).replaceAll('"', "&quot;");

function routesFromSitemap(xml) {
  const paths = [];
  for (const match of xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)) {
    const path = new URL(match[1]).pathname.replace(/\/+$/, "") || "/";
    if (!paths.includes(path)) paths.push(path);
  }
  return paths;
}

function renderRoute(path) {
  const page = getPage(path);
  const meta = PAGE_META[page];
  const canonical = `${SITE_ORIGIN}${path === "/" ? "/" : path}`;
  const rendered = renderToStaticMarkup(pageElement({ page, path }));
  // Rewrite SPA hash-route links (href="#/x") to real crawlable paths (href="/x")
  // so no-JS crawlers can walk the link graph and read anchor text. Genuine
  // same-page anchors like #top and #main-content have no slash after # and are
  // left untouched. The client bundle re-renders and handles nav exactly as before.
  const body = rendered.replaceAll('href="#/', 'href="/').replaceAll("href='#/", "href='/");
  const jsonld = JSON.stringify(buildStructuredData(path, meta.title, meta.description));

  let html = TEMPLATE;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
  html = html.replace(
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
  );
  html = html.replace(
    /<link rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
  );
  html = html.replace(
    /<script type="application\/ld\+json" data-site-jsonld>[\s\S]*?<\/script>/,
    `<script type="application/ld+json" data-site-jsonld>${jsonld}</script>`,
  );
  html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${body}</div>`);

  // Fail loudly if any target was missed, rather than shipping a half-prerendered page.
  for (const [label, needle] of [
    ["title", `<title>${escapeHtml(meta.title)}</title>`],
    ["canonical", `href="${escapeAttr(canonical)}"`],
    ["body", body.slice(0, 24)],
  ]) {
    if (body.length > 0 && !html.includes(needle)) {
      throw new Error(`prerender: ${label} not injected for ${path}`);
    }
  }
  return html;
}

const routes = routesFromSitemap(SITEMAP);
let written = 0;
for (const path of routes) {
  const html = renderRoute(path);
  const outPath = path === "/" ? join(DIST, "index.html") : join(DIST, path.replace(/^\//, ""), "index.html");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  written += 1;
}
console.log(`Prerendered ${written} routes to static HTML.`);
