# Applied Quantitative Reasoning Site

This is the source for AppliedQuantitativeReasoning.com, a small Vite + React + TypeScript site for the Vista PEAK Prep Applied Quantitative Reasoning course.

The site is intentionally simple: a homepage, course rationale, course overview, quarter detail pages, and classroom poster downloads. It uses hash routes so the static build works on ordinary static hosting without server-side route rewrites.

## Pages

- `#/` - homepage
- `#/why-aqr` - course rationale and external college/framework examples
- `#/course-overview` - course structure and quarter links
- `#/quarter-1` through `#/quarter-4` - quarter detail pages
- `#/classroom-posters` - poster categories
- `#/classroom-posters/all` - full poster grid

## Development

```bash
npm ci
npm run dev
```

## Checks

Run these before publishing changes:

```bash
npm run lint
npm run build
npm audit --audit-level=moderate
```

## Notes

- Public poster files live in `public/posters`.
- Poster category metadata lives in `src/posterData.ts`.
- Google Analytics is only loaded on `appliedquantitativereasoning.com` or `www.appliedquantitativereasoning.com`, and it respects Do Not Track.
