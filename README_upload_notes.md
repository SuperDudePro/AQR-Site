# AQR Poster Page - All Posters View Update

Purpose: add a visible way to browse every finished poster without choosing a category first.

Replace these files in the site:

- `src/ClassroomPosters.tsx`
- `src/ClassroomPosters.css`

Included for safety/currentness:

- `src/posterData.ts` — current 20-poster data file from the last poster update.

New route:

- `#/classroom-posters/all`

Visible changes:

- The poster top navigation now includes `All Posters`.
- The main Classroom Posters page includes a large `See every finished poster in one place` card.
- Each category page includes a `See all posters` button near the bottom.
- The All Posters page displays every poster in one grid and labels each poster with its type.

Asset reminder:

This package does not include the actual poster image/PDF assets. The code expects the PNG/PDF files to already exist in:

- `public/posters/`

