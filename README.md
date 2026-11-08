# Applied Quantitative Reasoning Site

This is the source for [AppliedQuantitativeReasoning.com](https://appliedquantitativereasoning.com), a Vite + React + TypeScript site for the Vista PEAK Prep Applied Quantitative Reasoning course.

## Pages and routing

The site uses clean pathname routes (not hash URLs), with client-side navigation and static prerendered HTML for public pages. The shared `src/routeRegistry.ts` defines published routes, titles, descriptions, and breadcrumbs; the build uses it to generate `public/sitemap.xml`, `public/llms.txt`, and prerendered pages. Legacy `#/...` links redirect in the client for compatibility.

Representative pages:

- `/` — homepage
- `/why-aqr` and `/why-ai` — course and AI rationale
- `/course-overview`, `/student-guide`, and `/quarter-1` through `/quarter-4` — course information
- `/vocabulary`, `/vocabulary/arcade`, and quarter vocabulary pages — practice and reference
- `/classroom-posters` and `/classroom-posters/all` — poster collections
- `/resources` and `/contact` — resource finder and contact page

Add new published pages to the route registry. Do not maintain a separate quality-audit route list: `npm run audit:quality` checks every route in the generated and validated sitemap on both desktop and mobile. The build checks sitemap/registry consistency and prerendered route metadata.

## Development

```bash
npm ci
npm run dev
```

## Checks

Before publishing changes:

```bash
npm run check
npm run audit:quality
npm audit --audit-level=moderate
```

The quality audit requires a completed build and a local Chrome executable (CI sets `CHROME_PATH`). Deployment and production verification follow the project release workflow; do not infer a production release from a successful local build.

## Notes

- Public poster files live in `public/posters`; poster category metadata lives in `src/posterData.ts`.
- Google Analytics is loaded only on `appliedquantitativereasoning.com` or `www.appliedquantitativereasoning.com`, respecting Do Not Track.
