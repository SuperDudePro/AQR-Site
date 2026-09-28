import { useEffect, useState } from "react";
import AQR from "./AQR";
import ClassroomPosters from "./ClassroomPosters";
import ContactPage from "./ContactPage";
import CourseOverview from "./CourseOverview";
import QuarterDetail from "./QuarterDetail";
import ResourceLibrary from "./ResourceLibrary";
import StudentGuide from "./StudentGuide";
import VocabularyPage from "./VocabularyPage";
import WhyAQR from "./WhyAQR";
import WhyAI from "./WhyAI";
import { getRoute, normalizeRoute, SITE_ORIGIN, type Page } from "./routeRegistry";

export type RouteState = { page: Page; path: string };
const GA_TRACKING_ID = "G-L6Y4XCS8L7";
const TRACKED_HOSTS = new Set(["appliedquantitativereasoning.com", "www.appliedquantitativereasoning.com"]);
let analyticsInitialized = false;
declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void } }
function legacyHashToPath(hash: string) { return hash.startsWith("#/") ? normalizeRoute(hash.slice(1)) : null; }
function getRouteState(): RouteState {
  const legacyPath = legacyHashToPath(window.location.hash);
  if (legacyPath) window.history.replaceState({}, "", `${legacyPath}${window.location.search}`);
  const path = normalizeRoute(window.location.pathname);
  return { page: getRoute(path).page, path };
}
function ensureGoogleAnalytics() {
  if (analyticsInitialized) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) { window.dataLayer?.push(args); };
  window.gtag("js", new Date());
  window.gtag("config", GA_TRACKING_ID, { send_page_view: false });
  analyticsInitialized = true;
}
function trackPageView(route: RouteState) {
  if (!TRACKED_HOSTS.has(window.location.hostname.toLowerCase())) return;
  ensureGoogleAnalytics();
  window.gtag?.("event", "page_view", { page_title: document.title, page_path: `${route.path}${window.location.search}`, page_location: window.location.href, page_referrer: document.referrer, aqr_section: route.page });
}
function upsertMeta(name: string, content: string) {
  let meta = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement | null;
  if (!meta) { meta = document.createElement("meta"); meta.name = name; document.head.appendChild(meta); }
  meta.content = content;
}
function upsertProperty(property: string, content: string) {
  let meta = document.querySelector(`meta[property='${property}']`) as HTMLMetaElement | null;
  if (!meta) { meta = document.createElement("meta"); meta.setAttribute("property", property); document.head.appendChild(meta); }
  meta.content = content;
}
function rewriteLegacyLinks() {
  document.querySelectorAll<HTMLAnchorElement>("a[href^='#/']").forEach((anchor) => { const href = anchor.getAttribute("href"); if (href) anchor.setAttribute("href", normalizeRoute(href.slice(1))); });
}
function setChrome(route: RouteState) {
  const meta = getRoute(route.path);
  document.title = meta.title;
  upsertMeta("description", meta.description);
  let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
  if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
  canonical.href = `${SITE_ORIGIN}${route.path === "/" ? "/" : route.path}`;
  upsertProperty("og:url", canonical.href);
  upsertProperty("og:title", meta.title);
  upsertProperty("og:description", meta.description);
  upsertMeta("twitter:title", meta.title);
  upsertMeta("twitter:description", meta.description);
}
function App() {
  const [route, setRoute] = useState<RouteState>(() => getRouteState());
  useEffect(() => {
    const applyRoute = () => {
      const nextRoute = getRouteState();
      setRoute(nextRoute); setChrome(nextRoute); trackPageView(nextRoute); window.scrollTo({ top: 0, behavior: "auto" }); window.requestAnimationFrame(rewriteLegacyLinks);
    };
    const handleInternalLink = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest("a") as HTMLAnchorElement | null;
      const href = anchor?.getAttribute("href");
      if (!href) return;
      const nextPath = href.startsWith("#/") ? normalizeRoute(href.slice(1)) : href.startsWith("/") && !href.startsWith("//") ? normalizeRoute(href) : null;
      if (!nextPath || anchor?.hasAttribute("download")) return;
      event.preventDefault();
      if (nextPath !== normalizeRoute(window.location.pathname)) window.history.pushState({}, "", nextPath);
      applyRoute();
    };
    applyRoute();
    window.addEventListener("popstate", applyRoute); document.addEventListener("click", handleInternalLink);
    return () => { window.removeEventListener("popstate", applyRoute); document.removeEventListener("click", handleInternalLink); };
  }, []);
  useEffect(() => { window.requestAnimationFrame(rewriteLegacyLinks); }, [route.path]);
  return pageElement(route);
}

// Pure route -> element mapping. Shared by the client (App) and the build-time
// prerender so both always agree on which component renders for a given path.
// eslint-disable-next-line react-refresh/only-export-components
export function pageElement(route: RouteState) {
  if (route.page === "why") return <WhyAQR />;
  if (route.page === "ai") return <WhyAI />;
  if (route.page === "overview") return <CourseOverview />;
  if (route.page === "guide") return <StudentGuide />;
  if (route.page === "vocabulary") return <VocabularyPage />;
  if (route.page === "vocabCore") return <VocabularyPage section="core" />;
  if (route.page === "vocabQ1") return <VocabularyPage section="q1" />;
  if (route.page === "vocabQ2") return <VocabularyPage section="q2" />;
  if (route.page === "vocabQ3") return <VocabularyPage section="q3" />;
  if (route.page === "vocabQ4") return <VocabularyPage section="q4" />;
  if (route.page === "posters") return <ClassroomPosters currentHash={`#${route.path}`} />;
  if (route.page === "resources") return <ResourceLibrary />;
  if (route.page === "contact") return <ContactPage />;
  if (route.page === "q1") return <QuarterDetail quarter="q1" />;
  if (route.page === "q2") return <QuarterDetail quarter="q2" />;
  if (route.page === "q3") return <QuarterDetail quarter="q3" />;
  if (route.page === "q4") return <QuarterDetail quarter="q4" />;
  return <AQR />;
}
export default App;
