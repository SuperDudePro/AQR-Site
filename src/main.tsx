import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import AQR from "./AQR";
import WhyAQR from "./WhyAQR";
import "./index.css";

function useSiteChrome(page: string | null) {
  useEffect(() => {
    document.title = page === "why-aqr" ? "AQR | Why AQR" : "AQR";

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <rect width="64" height="64" rx="12" fill="#000000"/>
        <text x="32" y="40" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#39a8ff">AQR</text>
      </svg>`;
    const href = `data:image/svg+xml,${encodeURIComponent(svg)}`;

    let link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/svg+xml";
    link.href = href;
  }, [page]);
}

function getCurrentPage() {
  return new URLSearchParams(window.location.search).get("page");
}

function AppRouter() {
  const [page, setPage] = useState<string | null>(() => getCurrentPage());
  useSiteChrome(page);

  useEffect(() => {
    const syncPage = () => setPage(getCurrentPage());

    window.addEventListener("popstate", syncPage);
    window.addEventListener("hashchange", syncPage);

    const observer = new MutationObserver(() => {
      syncPage();
    });
    observer.observe(document.querySelector("title") ?? document.head, {
      subtree: true,
      childList: true,
      characterData: true,
    });

    return () => {
      window.removeEventListener("popstate", syncPage);
      window.removeEventListener("hashchange", syncPage);
      observer.disconnect();
    };
  }, []);

  if (page === "why-aqr") {
    return <WhyAQR />;
  }

  return <AQR />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
