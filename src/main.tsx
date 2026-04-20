import React, { useEffect, useSyncExternalStore } from "react";
import ReactDOM from "react-dom/client";
import AQR from "./AQR";
import WhyAQR from "./WhyAQR";
import "./index.css";

type Route = {
  page: "home" | "why-aqr";
  section?: string;
};

function parseHash(): Route {
  const hash = window.location.hash || "";

  if (hash.startsWith("#/why-aqr")) {
    const rest = hash.slice("#/why-aqr".length).replace(/^\//, "");
    return {
      page: "why-aqr",
      section: rest || undefined,
    };
  }

  return {
    page: "home",
    section: hash.startsWith("#") ? hash.slice(1) || undefined : undefined,
  };
}

function subscribe(callback: () => void) {
  window.addEventListener("hashchange", callback);
  window.addEventListener("pageshow", callback);
  return () => {
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("pageshow", callback);
  };
}

function useRoute(): Route {
  return useSyncExternalStore(subscribe, parseHash, () => ({ page: "home" }));
}

function useSiteChrome(page: Route["page"]) {
  useEffect(() => {
    document.title = page === "why-aqr" ? "AQR | Why AQR" : "AQR";

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
  }, [page]);
}

function useScrollToSection(route: Route) {
  useEffect(() => {
    const id = route.section;

    const scroll = () => {
      if (!id || id === "top" || id === "home") {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return;
      }

      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };

    requestAnimationFrame(scroll);
  }, [route.page, route.section]);
}

function AppRouter() {
  const route = useRoute();
  useSiteChrome(route.page);
  useScrollToSection(route);

  return route.page === "why-aqr" ? <WhyAQR /> : <AQR />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
