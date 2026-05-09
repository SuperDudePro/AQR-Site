# AQR Sitewide Accessibility Patch

## Replace/upload these files

```text
index.html
src/AQR.tsx
src/ClassroomPosters.tsx
src/ClassroomPosters.css
src/CourseOverview.tsx
src/CourseOverview.css
src/QuarterDetail.tsx
src/QuarterDetail.css
src/main.tsx
src/posterData.ts
```

## Poster filename reminder

The second `What Does This Prove?` design should be named exactly:

```text
public/posters/what_does_this_prove_2_24x36_3600x5400.png
public/posters/what_does_this_prove_2_24x36.pdf
```

## What this patch fixes

- Adds `lang="en"` to the HTML shell.
- Adds a small fallback landmark inside `#root` for scanners that inspect before React renders.
- Keeps React-rendered page landmarks: header, nav, main, footer.
- Keeps skip links on Home, Course Overview, Quarter Detail, and Classroom Posters pages.
- Adds missing alt text to poster type sample images.
- Removes fragile aria labels from poster-image links so the image alt text becomes the link name.
- Preserves the Course Overview Label-in-Name fix.
- Preserves the clean filename fix for the second `What Does This Prove?` poster.

## After upload, rescan these routes

```text
#/ 
#/course-overview
#/classroom-posters
#/classroom-posters/all
#/classroom-posters/qr-questions
#/classroom-posters/data-anti-bs
#/quarter-1
```

If the scanner still reports "No text elements found" or "Page has no landmark elements" on a React-rendered page, scan after the page visually finishes loading. Those warnings usually mean the scanner caught the shell before the app rendered or scanned a raw image/PDF file instead of an HTML route.
