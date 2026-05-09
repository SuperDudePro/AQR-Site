# AQR Site Public Posters + Quarter Content Update

This package consolidates the previous quarter-content update, classroom-posters page, and corrected all-9 poster data into one upload set.

## What this fixes

- Adds a visible `Posters` link on the home page navigation.
- Adds a `Classroom Posters` preview card on the home page.
- Adds a visible `Posters` link on the Course Overview navigation.
- Adds a visible `Posters` link on the Quarter Detail navigation.
- Adds the `/classroom-posters` route through the hash router.
- Includes the classroom posters page and poster type/detail views.
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

## Poster route

The visible public page is:

```text
#/classroom-posters
```

Example:

```text
https://your-site.com/#/classroom-posters
```

## Poster assets

The code expects poster files under:

```text
public/posters/
```

The corrected all-9 `posterData.ts` references the poster filenames from the Drive batch. Upload the matching PNG/PDF files from Drive into `public/posters/`.

## Note

This package does not directly modify GitHub. It is meant for manual upload.
