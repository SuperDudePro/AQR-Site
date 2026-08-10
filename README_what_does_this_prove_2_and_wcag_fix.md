# AQR poster filename + WCAG fix

Replace these files:

- `src/posterData.ts`
- `src/CourseOverview.tsx`

## Rename the second What Does This Prove poster files

In `public/posters/`, rename the second design from the `(1)` filenames to these exact names:

```text
what_does_this_prove_2_24x36_3600x5400.png
what_does_this_prove_2_24x36.pdf
```

The updated `posterData.ts` points to those clean filenames.

## WCAG report fix

The uploaded Grackle report flagged four Course Overview quarter-card links for WCAG 2.5.3 Label in Name. The issue came from custom `aria-labelledby` values on the full-card links. The corrected `CourseOverview.tsx` lets the link use its visible text as its accessible name, which resolves the mismatch.
