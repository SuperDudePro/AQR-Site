# AQR poster asset folder

Put finished poster files here when you want them to appear on the Classroom Posters page.

The current sample file paths are controlled in:

```text
src/posterData.ts
```

Current expected files for the starter visible poster families:

```text
public/posters/real_math_real_decisions_24x36.pdf
public/posters/real_math_real_decisions_24x36_3600x5400.png
public/posters/compared_to_what_24x36.pdf
public/posters/compared_to_what_24x36_3600x5400.png
public/posters/per_what_24x36.pdf
public/posters/per_what_24x36_3600x5400.png
public/posters/correlation_is_not_causation_24x36.pdf
public/posters/correlation_is_not_causation_24x36_3600x5400.png
public/posters/a_decision_is_a_tradeoff_24x36.pdf
public/posters/a_decision_is_a_tradeoff_24x36_3600x5400.png
```

To hide a poster type, remove its poster entries or leave its `posters` array empty in `posterData.ts`.
To add a new poster type page, add at least one poster entry to that type's `posters` array.
