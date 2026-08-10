import { applyStructuredData } from "./structuredData";

let lastSignature = "";

function syncStructuredData() {
  const path = window.location.pathname.replace(/\/{2,}/g, "/").replace(/\/$/, "") || "/";
  const description = document.querySelector<HTMLMetaElement>("meta[name='description']")?.content ?? "";
  const signature = `${path}|${document.title}|${description}`;
  if (signature === lastSignature) return;
  lastSignature = signature;
  applyStructuredData(path, document.title, description);
}

const observer = new MutationObserver(() => window.requestAnimationFrame(syncStructuredData));
observer.observe(document.head, {
  subtree: true,
  childList: true,
  attributes: true,
  attributeFilter: ["content", "href"],
});

window.addEventListener("popstate", syncStructuredData);
document.addEventListener("click", () => window.requestAnimationFrame(syncStructuredData));
window.requestAnimationFrame(syncStructuredData);
