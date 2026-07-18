import { useEffect, useState } from "react";
import AQR from "./AQR";
import ClassroomPosters from "./ClassroomPosters";
import ContactPage from "./ContactPage";
import CourseOverview from "./CourseOverview";
import QuarterDetail from "./QuarterDetail";
import WhyAQR from "./WhyAQR";

type Page = "home" | "why" | "overview" | "q1" | "q2" | "q3" | "q4" | "posters" | "contact";

type RouteState = {
  page: Page;
  path: string;
};

type PageMeta = {
  title: string;
  description: string;
};

const GA_TRACKING_ID = "G-L6Y4XCS8L7";
const SITE_ORIGIN = "https://appliedquantitativereasoning.com";
const TRACKED_HOSTS = new Set([
  "appliedquantitativereasoning.com",
  "www.appliedquantitativereasoning.com",
]);

const PAGE_META: Record<Page, PageMeta> = {
  home: {
    title: "Applied Quantitative Reasoning | Vista PEAK Prep",
    description:
      "Applied Quantitative Reasoning at Vista PEAK Prep: serious math for real decisions, real data, real tools, and real communication.",
  },
  why: {
    title: "Why AQR | Applied Quantitative Reasoning",
    description:
      "Why Applied Quantitative Reasoning is a serious modern math pathway built around data, evidence, uncertainty, modeling, and practical decisions.",
  },
  overview: {
    title: "Course Overview | Applied Quantitative Reasoning",
    description:
      "A clear overview of the AQR course structure, quarter projects, quantitative-reasoning themes, tools, prerequisites, and honors options.",
  },
  q1: {
    title: "Quarter 1: Know Yourself | Applied Quantitative Reasoning",
    description:
      "AQR Quarter 1 focuses on responsible AI and Google tool use, learner support systems, misleading graphs, units, and useful revision.",
  },
  q2: {
    title: "Quarter 2: Track Yourself | Applied Quantitative Reasoning",
    description:
      "AQR Quarter 2 focuses on self-tracking, surveys, data displays, supported claims, sampling, bias, correlation, and causation.",
  },
  q3: {
    title: "Quarter 3: Build a Decision Tool | Applied Quantitative Reasoning",
    description:
      "AQR Quarter 3 asks students to build and test a decision tool using criteria, tradeoffs, assumptions, weighting, risk, and uncertainty.",
  },
  q4: {
    title: "Quarter 4: Don’t Get Played | Applied Quantitative Reasoning",
    description:
      "AQR Quarter 4 develops practical skepticism about claims, graphs, statistics, samples, sources, AI output, and misleading evidence.",
  },
  posters: {
    title: "Classroom Posters | Applied Quantitative Reasoning",
    description:
      "Printable AQR classroom posters for quantitative reasoning, data skepticism, decision-making, AI use, work habits, and thinking moves.",
  },
  contact: {
    title: "Contact | Applied Quantitative Reasoning",
    description:
      "Contact Applied Quantitative Reasoning at Vista PEAK Prep with questions or comments about the course and public resources.",
  },
};

let analyticsInitialized = false;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function normalizePath(pathname: string) {
  const path = pathname.replace(/\/{2,}/g, "/").replace(/\/$/, "");
  return path || "/";
}

function legacyHashToPath(hash: string) {
  if (!hash.startsWith("#/")) return null;
  return normalizePath(hash.slice(1));
}

function getPage(pathname: string): Page {
  const path = normalizePath(pathname);
  if (path === "/why-aqr") return "why";
  if (path === "/course-overview") return "overview";
  if (path === "/quarter-1") return "q1";
  if (path === "/quarter-2") return "q2";
  if (path === "/quarter-3") return "q3";
  if (path === "/quarter-4") return "q4";
  if (path === "/classroom-posters" || path.startsWith("/classroom-posters/")) return "posters";
  if (path === "/contact") return "contact";
  return "home";
}

function isAppPath(pathname: string) {
  const path = normalizePath(pathname);
  return (
    path === "/" ||
    path === "/why-aqr" ||
    path === "/course-overview" ||
    path === "/quarter-1" ||
    path === "/quarter-2" ||
    path === "/quarter-3" ||
    path === "/quarter-4" ||
    path === "/classroom-posters" ||
    path.startsWith("/classroom-posters/") ||
    path === "/contact"
  );
}

function getRouteState(): RouteState {
  const legacyPath = legacyHashToPath(window.location.hash);
  if (legacyPath) {
    window.history.replaceState({}, "", `${legacyPath}${window.location.search}`);
  }

  const requestedPath = normalizePath(window.location.pathname);
  const path = isAppPath(requestedPath) ? requestedPath : "/";
  if (path !== requestedPath) {
    window.history.replaceState({}, "", `/${window.location.search}`);
  }

  return {
    page: getPage(path),
    path,
  };
}

function ensureGoogleAnalytics() {
  if (analyticsInitialized) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag("js", new Date());
  window.gtag("config", GA_TRACKING_ID, {
    send_page_view: false,
  });
  analyticsInitialized = true;
}

function shouldTrackAnalytics() {
  return TRACKED_HOSTS.has(window.location.hostname.toLowerCase());
}

function trackPageView(route: RouteState) {
  if (!shouldTrackAnalytics()) return;

  ensureGoogleAnalytics();
  window.gtag?.("event", "page_view", {
    page_title: document.title,
    page_path: `${route.path}${window.location.search}`,
    page_location: window.location.href,
    page_referrer: document.referrer,
    aqr_section: route.page,
  });
}

function upsertMeta(name: string, content: string) {
  let meta = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function setChrome(route: RouteState) {
  const meta = PAGE_META[route.page];
  document.title = meta.title;
  upsertMeta("description", meta.description);

  let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = `${SITE_ORIGIN}${route.path === "/" ? "/" : route.path}`;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="12" fill="#000000"/>
      <text x="32" y="40" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#39a8ff">AQR</text>
    </svg>`;

  let icon = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
  if (!icon) {
    icon = document.createElement("link");
    icon.rel = "icon";
    document.head.appendChild(icon);
  }
  icon.type = "image/svg+xml";
  icon.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function rewriteLegacyLinks() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#/"]').forEach((anchor) => {
    const href = anchor.getAttribute("href");
    if (!href) return;
    anchor.setAttribute("href", normalizePath(href.slice(1)));
  });
}

function App() {
  const [route, setRoute] = useState<RouteState>(() => getRouteState());

  useEffect(() => {
    const applyRoute = () => {
      const nextRoute = getRouteState();
      setRoute(nextRoute);
      setChrome(nextRoute);
      trackPageView(nextRoute);
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    const handleInternalLink = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as Element | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor || anchor.hasAttribute("download") || anchor.target === "_blank") return;

      const rawHref = anchor.getAttribute("href");
      if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || !isAppPath(url.pathname)) return;

      event.preventDefault();
      const nextUrl = `${normalizePath(url.pathname)}${url.search}`;
      const currentUrl = `${normalizePath(window.location.pathname)}${window.location.search}`;
      if (nextUrl !== currentUrl) {
        window.history.pushState({}, "", nextUrl);
      }
      applyRoute();
    };

    applyRoute();
    window.addEventListener("popstate", applyRoute);
    document.addEventListener("click", handleInternalLink);
    return () => {
      window.removeEventListener("popstate", applyRoute);
      document.removeEventListener("click", handleInternalLink);
    };
  }, []);

  useEffect(() => {
    rewriteLegacyLinks();
  }, [route.path]);

  if (route.page === "why") return <WhyAQR />;
  if (route.page === "overview") return <CourseOverview />;
  if (route.page === "posters") return <ClassroomPosters currentHash={`#${route.path}`} />;
  if (route.page === "contact") return <ContactPage />;
  if (route.page === "q1") return <QuarterDetail quarter="q1" />;
  if (route.page === "q2") return <QuarterDetail quarter="q2" />;
  if (route.page === "q3") return <QuarterDetail quarter="q3" />;
  if (route.page === "q4") return <QuarterDetail quarter="q4" />;

  return <AQR />;
}

export default App;
