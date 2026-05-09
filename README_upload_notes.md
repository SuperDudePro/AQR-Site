# AQR Site Public Posters + Quarter Content Update - Corrected

This package supersedes the earlier consolidated poster package.

## What this fixes

- Keeps the visible `Posters` link on the home page navigation.
- Keeps the `Classroom Posters` preview card on the home page.
- Keeps the visible `Posters` link on the Course Overview navigation.
- Keeps the visible `Posters` link on the Quarter Detail navigation.
- Fixes poster type pages not opening from the poster index.
- Adds a representative poster image to each poster-type card on the main Classroom Posters page.
- Keeps the full poster lists on the individual poster type pages.
- Includes the corrected all-9 `posterData.ts` poster batch.
- Keeps the expanded quarter descriptions, mini-themes, and tool-focus language.

## Files to upload / replace

Copy these into your repo:

```text
src/AQR.tsx
src/ClassroomPosters.tsx
src/ClassroomPosters.css
src/CourseOverview.tsx
src/CourseOverview.css
src/QuarterDetail.tsx
src/QuarterDetail.css
src/main.tsx
src/posterData.ts
public/posters/README_posters.md
```

## Why the fix was needed

The previous router stored only the page name. Moving from `#/classroom-posters` to `#/classroom-posters/type-slug` still counted as the same `posters` page, so React did not always re-render the poster component. This version stores the full hash route and passes it into the poster page.

## Poster route

The visible public page is:

```text
#/classroom-posters
```

Example:

```text
https://your-site.com/#/classroom-posters
```

Poster type pages are reachable from visible cards on that page, for example:

```text
#/classroom-posters/aqr-identity
#/classroom-posters/qr-questions
#/classroom-posters/data-anti-bs
#/classroom-posters/pass-path-work-habits
#/classroom-posters/thinking-moves
#/classroom-posters/quotation-posters
```

## Poster assets

The code expects poster files under:

```text
public/posters/
```

Upload the matching PNG/PDF files from Drive into `public/posters/`.

## Note

This package does not directly modify GitHub. It is meant for manual upload.
