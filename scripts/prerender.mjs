// Browserless prerender.
//
// Renders every route in the shared registry to static HTML using React 19's server
// renderer, then writes a real dist/<route>/index.html with that route's own title,
// meta description, canonical, and JSON-LD baked into the served HTML. No browser is
// launched; the registry also drives generate-sitemap.mjs.
//
// The client bundle is untouched: main.tsx still client-renders on load, so users get
// the identical interactive app. This step only fills the pre-JS HTML that crawlers and
// AI fetchers (GPTBot, ClaudeBot, PerplexityBot, CCBot) read.

import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pageElement } from "../src/App.tsx";
import { buildStructuredData } from "../src/structuredData.ts";
import { publicRoutes, SITE_ORIGIN } from "../src/routeRegistry.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const TEMPLATE = readFileSync(join(DIST, "index.html"), "utf8");

const escapeHtml = (v) =>
  v.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const escapeAttr = (v) => escapeHtml(v).replaceAll('"', "&quot;");

function renderRoute(meta) {
  const { path, page } = meta;
  const canonical = `${SITE_ORIGIN}${path === "/" ? "/" : path}`;
  const rendered = renderToStaticMarkup(pageElement({ page, path }));
  // Rewrite SPA hash-route links (href="#/x") to real crawlable paths (href="/x")
  // so no-JS crawlers can walk the link graph and read anchor text. Genuine
  // same-page anchors like #top and #main-content have no slash after # and are
  // left untouched. The client bundle re-renders and handles nav exactly as before.
  const body = rendered.replaceAll('href="#/', 'href="/').replaceAll("href='#/", "href='/");
  const jsonld = JSON.stringify(buildStructuredData(path));

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
  for (const [property, content] of [
    ["og:url", canonical], ["og:title", meta.title], ["og:description", meta.description],
  ]) {
    html = html.replace(
      new RegExp(`<meta property="${property}"[^>]*>`),
      `<meta property="${property}" content="${escapeAttr(content)}" />`,
    );
  }
  for (const [name, content] of [["twitter:title", meta.title], ["twitter:description", meta.description]]) {
    html = html.replace(
      new RegExp(`<meta\\s+name="${name}"[\\s\\S]*?\\/>`),
      `<meta name="${name}" content="${escapeAttr(content)}" />`,
    );
  }
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

let written = 0;
for (const route of publicRoutes) {
  const { path } = route;
  const html = renderRoute(route);
  const outPath = path === "/" ? join(DIST, "index.html") : join(DIST, path.replace(/^\//, ""), "index.html");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  written += 1;
}
console.log(`Prerendered ${written} routes to static HTML.`);
