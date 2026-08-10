// Build-time only: lets the prerender import React components that `import "./x.css"`.
// In Node there is no bundler to handle CSS, so we resolve every .css specifier to an
// empty module. Styling is unaffected at runtime — Vite still emits the real stylesheet
// and the built index.html links it.
export async function resolve(specifier, context, next) {
  if (specifier.endsWith(".css")) {
    return { url: "data:text/javascript,export default {}", shortCircuit: true };
  }
  return next(specifier, context);
}
