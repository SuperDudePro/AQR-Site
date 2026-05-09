import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import AQR from "./AQR";
import WhyAQR from "./WhyAQR";
import CourseOverview from "./CourseOverview";
import QuarterDetail from "./QuarterDetail";
import ClassroomPosters from "./ClassroomPosters";
import "./index.css";

type Page = "home" | "why" | "overview" | "q1" | "q2" | "q3" | "q4" | "posters";

type RouteState = {
  page: Page;
  hash: string;
};

const GA_TRACKING_ID = "G-L6Y4XCS8L7";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function ensureGoogleAnalytics() {
  if (document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"]`)) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag("js", new Date());
}

function trackPageView(page: Page) {
  ensureGoogleAnalytics();
  window.gtag?.("config", GA_TRACKING_ID, {
    page_title: document.title,
    page_path: `${window.location.pathname}${window.location.hash || "#"}`,
    page_location: window.location.href,
    page_referrer: document.referrer,
    page_aqr_section: page,
  });
}

function setChrome(page: Page) {
  const titles: Record<Page, string> = {
    home: "Applied Quantitative Reasoning | Vista PEAK Prep",
    why: "Why AQR | Applied Quantitative Reasoning",
    overview: "Course Overview | Applied Quantitative Reasoning",
    q1: "Quarter 1 | Applied Quantitative Reasoning",
    q2: "Quarter 2 | Applied Quantitative Reasoning",
    q3: "Quarter 3 | Applied Quantitative Reasoning",
    q4: "Quarter 4 | Applied Quantitative Reasoning",
    posters: "Classroom Posters | Applied Quantitative Reasoning",
  };

  document.title = titles[page];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="12" fill="#000000"/>
      <text x="32" y="40" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#39a8ff">AQR</text>
    </svg>`;

  let link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }

  link.type = "image/svg+xml";
  link.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function getPage(hash: string): Page {
  if (hash.startsWith("#/why-aqr")) return "why";
  if (hash.startsWith("#/course-overview")) return "overview";
  if (hash.startsWith("#/classroom-posters")) return "posters";
  if (hash.startsWith("#/quarter-1")) return "q1";
  if (hash.startsWith("#/quarter-2")) return "q2";
  if (hash.startsWith("#/quarter-3")) return "q3";
  if (hash.startsWith("#/quarter-4")) return "q4";
  return "home";
}

function getRouteState(): RouteState {
  const hash = window.location.hash || "";
  return {
    page: getPage(hash),
    hash,
  };
}

function App() {
  const [route, setRoute] = useState<RouteState>(() => getRouteState());

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = getRouteState();
      setRoute(nextRoute);
      setChrome(nextRoute.page);
      trackPageView(nextRoute.page);
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (route.page === "why") {
    return <WhyAQR />;
  }

  if (route.page === "overview") {
    return <CourseOverview />;
  }

  if (route.page === "posters") {
    return <ClassroomPosters currentHash={route.hash} />;
  }

  if (route.page === "q1") {
    return <QuarterDetail quarter="q1" />;
  }

  if (route.page === "q2") {
    return <QuarterDetail quarter="q2" />;
  }

  if (route.page === "q3") {
    return <QuarterDetail quarter="q3" />;
  }

  if (route.page === "q4") {
    return <QuarterDetail quarter="q4" />;
  }

  return <AQR />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
