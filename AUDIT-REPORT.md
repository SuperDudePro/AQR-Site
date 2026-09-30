# Applied Quantitative Reasoning site audit — 2026-09-30

Scope: `main` at `112a266` (Sep 28, 2026). The audit covers code and build, SEO, AI-search visibility (AIO), accessibility, security and performance. It uses the same method as the Our Old Dad and LifeEducation audits:

- `npm ci`, `npm run check` (lint + build + all validators), `npm audit` and `npm outdated`
- axe-core WCAG 2.0–2.2 A/AA on **all 27 sitemap routes**
- layout-shift measurement
- a Chromium test with the new CSP **enforced**
- a read of `api/contact.js`, the prerenderer and `vercel.json`
- live production checks through the Vercel connector

**Bottom line:** This is the strongest of the three sites for SEO. It already has real server-side prerendering, per-page share images, Course and Breadcrumb schema, and CLS of 0 on every route. The gaps:

1. **No security headers at all:** none were configured, and production confirms it.
2. **The contact endpoint has no abuse protection** unless the Turnstile env vars are set, and it leaked provider error text.
3. **Serious contrast failures on 7 pages**, mostly the vocabulary pages.

All of these are fixed here.

Status legend: **FIXED** = in this PR · **OPEN** = recommended, not changed · **INFO** = no action.

---

## High

| # | Area | Finding | Status |
|---|---|---|---|
| H1 | Security / config | **No security headers configured.** Production checked on 2026-09-30 sent only Vercel's default HSTS. This site uses legacy `routes` for its SPA rewrites, so the fix adds a `continue: true` header route at the top rather than removing `routes`. That route sets nosniff, frame DENY, a referrer policy, a permissions policy and a report-only CSP, and it applies to every response, including the 404 page. | FIXED |
| H2 | Security | **The contact endpoint had no rate limiting, no same-origin check, no body-size cap and no request timeouts.** The only protection was optional Turnstile. It now has all four. Rate limiting runs only when `KV_REST_API_URL`/`KV_REST_API_TOKEN` are set, so the form can't break on a project without KV. Add a Vercel KV/Upstash store to switch it on. | FIXED (rate limit needs KV env) |
| H3 | Security | **Resend error text went back to visitors** ("Provider said: …"). Visitors now see a generic message; the details stay in the server logs. A timed-out send now returns a clean 502 instead of an unhandled error. | FIXED |
| H4 | Accessibility | **Serious color-contrast failures on 7 pages:** the vocabulary term-card kicker was 1.32:1 (near-invisible) on 5 vocabulary pages, and neon labels on white cards were 2.55:1 on `/student-guide` and `/why-aqr`. Scoped overrides now use the site's existing `#00558a` (7.4:1) on those white cards only; dark sections keep the neon. | FIXED |

## Medium

| # | Area | Finding | Status |
|---|---|---|---|
| M1 | SEO / social | **`og:description` was the site-wide text on every page**, while `twitter:description` was page-specific. The prerenderer's regex missed the multi-line `<meta\n  property="og:description"` in `index.html`. The regex now allows any whitespace, so each page gets its own description. | FIXED |
| M2 | Security | **CSP:** a `Content-Security-Policy-Report-Only` header is added. It allows the inline gtag bootstrap by hash, GA/GTM, and Cloudflare Turnstile. Violations are logged by `/api/csp-report`. `validate-site` now fails the build if any inline script in any built page loses its CSP hash. With the policy enforced in Chromium, home, why-aqr, vocabulary, posters, contact and syllabus showed 0 violations. GA and Turnstile don't load locally, so check the live report logs before you enforce the CSP. | FIXED (report-only) |
| M3 | Performance | Hashed `/assets/*` JS/CSS was served with `max-age=0, must-revalidate`, so browsers re-checked it on every visit. It is now `max-age=31536000, immutable`, which is safe because the filenames are content-hashed. | FIXED |
| M4 | Accessibility | Contact form status messages weren't announced to screen readers (WCAG 4.1.3). They are now in an `aria-live` region. | FIXED |
| M5 | AIO | **No `llms.txt`.** One is now generated at build time from `routeRegistry.ts` and `posterData.ts`: every course page with its description, the syllabus, and each poster collection. | FIXED |
| M6 | Dependencies | `brace-expansion` (high severity, dev-only). `npm audit fix` changed only the lockfile; 0 vulnerabilities remain. | FIXED |
| M7 | Content / assets | **`posterData.ts` lists 44 poster designs, each with a full-size PNG and a PDF under `/posters/`, and none of those 88 files is in the repo.** For example, `/posters/real_math_real_decisions_24x36.pdf` returns 404 on production. The site doesn't link to them today; it shows only the WebP previews, so nothing is visibly broken. But the upload notes expect them. **Your local AQR folder, which the earlier session flagged as out of sync with uncommitted changes, probably holds these files.** Decide whether to publish the downloads; each full-resolution PNG is large, so hosting them elsewhere may be better. | OPEN (needs you) |
| M8 | Bot protection | Turnstile runs only if `VITE_TURNSTILE_SITE_KEY` (build) and `TURNSTILE_SECRET` (server) are set in Vercel. I couldn't confirm whether production has them. Check the project's env vars; with the new rate limiting and KV this matters less. | OPEN (verify) |

## Low

| # | Area | Finding | Status |
|---|---|---|---|
| L1 | Hygiene | Two internal poster upload READMEs were deployed publicly under `/posters/`. They moved to `docs/posters/`. | FIXED |
| L2 | Hygiene | `public/deployment.json` and `public/llms.txt` are generated files, so they are now in `.gitignore`. | FIXED |
| L3 | Security | `api/contact.js` now checks email format and name/email/subject length on the server, matching the form limits. | FIXED |
| L4 | Coverage | The CI axe audit sampled 3 routes. It now also covers why-aqr, student-guide, vocabulary/core and posters/all, which are the pages that had contrast failures. | FIXED |
| L5 | SEO | `sitemap.xml` sets every route's `lastmod` to the build date, so all pages claim to change on every deploy. Search engines learn to ignore an inaccurate `lastmod`. Consider using per-page content dates, or omitting `lastmod`. | OPEN |
| L6 | Performance | `AQR_How_It_Works_Banner.png` (2.4 MB) is only the `<picture>` fallback for browsers without WebP; modern browsers get the 132–344 KB WebP variants. No change is needed. | INFO |
| L7 | Dependencies | Minor updates are available (React 19.3, vite 8.3, typescript-eslint 8.71, tsx). ESLint 10 and TypeScript 7 are majors. None are security fixes. | OPEN |
| L8 | Privacy | Students are the audience. GA loads only on the production hostname and respects Do Not Track, which is good. The contact page states that it's for public questions. No change is needed. | INFO |

## Verified OK

- `npm run check` passes: lint, tsc, build, redirect/sitemap/site/discovery validators and poster category checks.
- Every route is prerendered with a real body, a canonical URL, `og:image` (the 1600 px banner with width, height and alt), and Course, WebPage and Breadcrumb JSON-LD. Hash links are rewritten to crawlable paths.
- **Accessibility after fixes:** 0 axe violations on all 27 routes, a skip link, and CLS 0 everywhere.
- **Redirects:** www → apex is permanent. Unknown paths return the custom 404 with a 404 status (checked live).

## Suggested next steps

1. Merge, then confirm the headers: `curl -sI https://appliedquantitativereasoning.com/why-aqr`.
2. Add Vercel KV (or Upstash) to the AQR project so contact rate limiting switches on. Confirm the Turnstile env vars (M8).
3. Decide on the poster PNG/PDF downloads (M7), then sync or clean up your local AQR folder.
4. After about 2 weeks of CSP report logs, enforce the CSP.
