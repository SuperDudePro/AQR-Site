# AQR poster data update — 20 poster designs

Use this package to update the site code so the Classroom Posters page recognizes the new poster entries.

## Primary file to replace

Replace:

```text
src/posterData.ts
```

with the version in this package.

## Optional supporting files

This ZIP also includes the current poster page/component files from the previous corrected package:

```text
src/ClassroomPosters.tsx
src/ClassroomPosters.css
src/main.tsx
src/AQR.tsx
src/CourseOverview.tsx
src/CourseOverview.css
src/QuarterDetail.tsx
src/QuarterDetail.css
```

If your site already has the poster page working, you probably only need `src/posterData.ts`.

## Poster assets

This package does not include the poster PNG/PDF binaries. It assumes you already uploaded them into:

```text
public/posters/
```

The expected filenames are listed in:

```text
public/posters/README_posters.md
```

## Current count

The code now recognizes 20 poster designs across 8 poster types.

The two `What Does This Prove?` designs are intentionally both included as separate posters.
