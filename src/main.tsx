import React, { useEffect, useSyncExternalStore } from "react";
import ReactDOM from "react-dom/client";
import AQR from "./AQR";
import WhyAQR from "./WhyAQR";
import "./index.css";

type PageName = "why-aqr" | null;

function getCurrentPage(): PageName {
  const params = new URLSearchParams(window.location.search);
  return params.get("page") === "why-aqr" ? "why-aqr" : null;
}

function subscribe(callback: () => void) {
  const notify = () => callback();

  window.addEventListener("popstate", notify);
  window.addEventListener("hashchange", notify);
  window.addEventListener("pageshow", notify);

  return () => {
    window.removeEventListener("popstate", notify);
    window.removeEventListener("hashchange", notify);
    window.removeEventListener("pageshow", notify);
  };
}

function useCurrentPage(): PageName {
  return useSyncExternalStore(subscribe, getCurrentPage, () => null);
}

function useSiteChrome(page: PageName) {
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

function AppRouter() {
  const page = useCurrentPage();
  useSiteChrome(page);

  return page === "why-aqr" ? <WhyAQR /> : <AQR />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
