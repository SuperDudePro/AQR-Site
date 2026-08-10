# AQR Accessibility / Code Review Update

## Replace these files

Upload these files into the same paths in the site repo:

- `src/ClassroomPosters.tsx`
- `src/ClassroomPosters.css`
- `src/CourseOverview.tsx`
- `src/QuarterDetail.tsx`
- `src/posterData.ts`

The CSS file is included unchanged from the latest poster page package, except it remains paired with the revised markup.

## Fixes included

- Added a real **All Posters** route/page at `#/classroom-posters/all`.
- Kept all current poster categories and all current poster entries found in the Drive listing.
- Kept both `What Does This Prove?` poster designs as separate entries.
- Added `role="group"` where grouped download links use an `aria-label`.
- Added `download` attributes to direct PDF/PNG download links.
- Changed poster back-link areas from paragraphs to navigation blocks.
- Added a friendly fallback page for invalid poster-type routes instead of rendering a blank page.
- Changed several home links from `#` to `#/` so they point to the router's home route.
- Added `role="group"` to the Course Overview mini-theme group wrapper.

## Notes

The current Drive/public-folder listing resolves to **19 poster designs**, not 20. Both `What Does This Prove?` designs are included. The earlier 20 count was a miscount.

This package does **not** include poster image/PDF binaries. It assumes those files are already in `public/posters/`, as you said.
