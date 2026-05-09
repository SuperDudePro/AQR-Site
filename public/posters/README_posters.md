# AQR poster asset folder

Put finished poster files here when you want them to appear on the Classroom Posters page.

The poster page is controlled by:

```text
src/posterData.ts
```

## Current expected files

Upload these files into this folder:

```text
public/posters/real_math_real_decisions_24x36.pdf
public/posters/real_math_real_decisions_24x36_3600x5400.png
public/posters/compared_to_what_24x36.pdf
public/posters/compared_to_what_24x36_3600x5400.png
public/posters/correlation_is_not_causation_24x36.pdf
public/posters/correlation_is_not_causation_24x36_3600x5400.png
public/posters/name_the_claim_24x36.pdf
public/posters/name_the_claim_24x36_3600x5400.png
public/posters/dont_disappear_24x36.pdf
public/posters/dont_disappear_24x36_3600x5400.png
public/posters/nietzsche_why_poster_24x36.pdf
public/posters/nietzsche_why_poster_24x36_3600x5400.png
public/posters/10_things_0_talent_respect_final_24x36.pdf
public/posters/10_things_0_talent_respect_final_24x36_3600x5400.png
public/posters/poster_01_blue_grunge_10_things_24x36.pdf
public/posters/poster_01_blue_grunge_10_things_24x36_3600x5400.png
public/posters/10_things_zero_talent_24x36_print.pdf
public/posters/10_things_zero_talent_24x36_3600x5400.png
```

## Poster type visibility

A poster type appears on the Classroom Posters page only when its `posters` array in `posterData.ts` contains at least one poster.

The main Classroom Posters page uses the first poster in each type as the representative preview image.
