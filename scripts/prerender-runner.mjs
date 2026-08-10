// Runs the prerender with the .css stub loader active. tsx (TS/JSX) is provided via
// `--import tsx` on the command line; this only adds the css stub, registered here so it
// runs ahead of tsx in the resolve chain and short-circuits .css imports.
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register("./scripts/prerender-css-loader.mjs", pathToFileURL(process.cwd() + "/"));

await import("./prerender.mjs");
