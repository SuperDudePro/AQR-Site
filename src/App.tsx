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

type Page = "home" | "why" | "overview" | "guide" | "vocabulary" | "vocabCore" | "vocabQ1" | "vocabQ2" | "vocabQ3" | "vocabQ4" | "q1" | "q2" | "q3" | "q4" | "posters" | "resources" | "contact";
export type RouteState = { page: Page; path: string };
type PageMeta = { title: string; description: string };
const GA_TRACKING_ID = "G-L6Y4XCS8L7";
export const SITE_ORIGIN = "https://appliedquantitativereasoning.com";
const TRACKED_HOSTS = new Set(["appliedquantitativereasoning.com", "www.appliedquantitativereasoning.com"]);
// eslint-disable-next-line react-refresh/only-export-components
export const PAGE_META: Record<Page, PageMeta> = {
  home: { title: "Applied Quantitative Reasoning | Vista PEAK Prep", description: "Applied Quantitative Reasoning at Vista PEAK Prep: serious math for real decisions, real data, real tools, and real communication." },
  why: { title: "Why AQR | Applied Quantitative Reasoning", description: "Why Applied Quantitative Reasoning is a serious modern math pathway built around data, evidence, uncertainty, modeling, and practical decisions." },
  overview: { title: "Course Overview | Applied Quantitative Reasoning", description: "A clear overview of the AQR year arc, quarter project families, sequential quantitative-reasoning focus windows, tools, checkpoints, and course pathways." },
  guide: { title: "Student Guide | Applied Quantitative Reasoning", description: "A practical guide to AQR classroom routines, progress expectations, responsible tool use, discussion, language support, and getting help." },
  vocabulary: { title: "Vocabulary | Applied Quantitative Reasoning", description: "The AQR vocabulary hub, organized into core course language and Quarter 1 through Quarter 4 sections." },
  vocabCore: { title: "Core AQR Vocabulary | Applied Quantitative Reasoning", description: "Core language used across AQR for evidence, decisions, models, tradeoffs, uncertainty, revision, and explanation." },
  vocabQ1: { title: "Quarter 1 Vocabulary | Applied Quantitative Reasoning", description: "Quarter 1 vocabulary for self-data, measurement, learner evidence, claims, visuals, and AI confidence." },
  vocabQ2: { title: "Quarter 2 Vocabulary | Applied Quantitative Reasoning", description: "Quarter 2 vocabulary for surveys, samples, bias, data displays, correlation, causation, and limitations." },
  vocabQ3: { title: "Quarter 3 Vocabulary | Applied Quantitative Reasoning", description: "Quarter 3 vocabulary for criteria, tradeoffs, risk, cost, uncertainty, assumptions, weighting, and sensitivity." },
  vocabQ4: { title: "Quarter 4 Vocabulary | Applied Quantitative Reasoning", description: "Quarter 4 vocabulary for claims, evidence, misleading displays, source trust, reasonable belief, and critique." },
  q1: { title: "Quarter 1: Know Yourself | Applied Quantitative Reasoning", description: "Build a portable learner profile, capture an ordinary-AI baseline, and test what changes with personalized learning support." },
  q2: { title: "Quarter 2: Track Yourself | Applied Quantitative Reasoning", description: "Collect and analyze real data while examining survey quality, sampling, bias, correlation, causation, and honest limitations." },
  q3: { title: "Quarter 3: Build a Decision Tool | Applied Quantitative Reasoning", description: "Build and test a decision tool using options, criteria, tradeoffs, risk, cost, uncertainty, assumptions, weighting, and sensitivity." },
  q4: { title: "Quarter 4: Don’t Get Played | Applied Quantitative Reasoning", description: "Practical skepticism about claims, graphs, statistics, samples, sources, AI output, and misleading evidence." },
  posters: { title: "Classroom Posters | Applied Quantitative Reasoning", description: "AQR classroom poster designs for quantitative reasoning, data skepticism, decision-making, AI use, work habits, and thinking moves." },
  resources: { title: "Resource Finder | Applied Quantitative Reasoning", description: "Search AQR course pages, quarter plans, vocabulary, poster categories, and finished poster designs." },
  contact: { title: "Contact | Applied Quantitative Reasoning", description: "Contact Applied Quantitative Reasoning at Vista PEAK Prep with questions or comments about the course and public resources." },
};
let analyticsInitialized = false;
declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void } }
function normalizePath(pathname: string) { const path = pathname.replace(/\/{2,}/g, "/").replace(/\/$/, ""); return path || "/"; }
function legacyHashToPath(hash: string) { return hash.startsWith("#/") ? normalizePath(hash.slice(1)) : null; }
// eslint-disable-next-line react-refresh/only-export-components
export function getPage(pathname: string): Page {
  const path = normalizePath(pathname);
  if (path === "/why-aqr") return "why";
  if (path === "/course-overview") return "overview";
  if (path === "/student-guide") return "guide";
  if (path === "/vocabulary") return "vocabulary";
  if (path === "/vocabulary/core") return "vocabCore";
  if (path === "/vocabulary/quarter-1") return "vocabQ1";
  if (path === "/vocabulary/quarter-2") return "vocabQ2";
  if (path === "/vocabulary/quarter-3") return "vocabQ3";
  if (path === "/vocabulary/quarter-4") return "vocabQ4";
  if (path === "/quarter-1") return "q1";
  if (path === "/quarter-2") return "q2";
  if (path === "/quarter-3") return "q3";
  if (path === "/quarter-4") return "q4";
  if (path === "/classroom-posters" || path.startsWith("/classroom-posters/")) return "posters";
  if (path === "/resources") return "resources";
  if (path === "/contact") return "contact";
  return "home";
}
function getRouteState(): RouteState {
  const legacyPath = legacyHashToPath(window.location.hash);
  if (legacyPath) window.history.replaceState({}, "", `${legacyPath}${window.location.search}`);
  const path = normalizePath(window.location.pathname);
  return { page: getPage(path), path };
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
function rewriteLegacyLinks() {
  document.querySelectorAll<HTMLAnchorElement>("a[href^='#/']").forEach((anchor) => { const href = anchor.getAttribute("href"); if (href) anchor.setAttribute("href", normalizePath(href.slice(1))); });
}
function setChrome(route: RouteState) {
  const meta = PAGE_META[route.page];
  document.title = meta.title;
  upsertMeta("description", meta.description);
  let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
  if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
  canonical.href = `${SITE_ORIGIN}${route.path === "/" ? "/" : route.path}`;
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
      const nextPath = href.startsWith("#/") ? normalizePath(href.slice(1)) : href.startsWith("/") && !href.startsWith("//") ? normalizePath(href) : null;
      if (!nextPath || anchor?.hasAttribute("download")) return;
      event.preventDefault();
      if (nextPath !== normalizePath(window.location.pathname)) window.history.pushState({}, "", nextPath);
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
