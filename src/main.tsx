import { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import AQR from "./AQR";
import WhyAQR from "./WhyAQR";
import "./index.css";

type Page = "home" | "why-aqr";

function getPageFromHash(hash: string): Page {
  return hash.startsWith("#/why-aqr") ? "why-aqr" : "home";
}

function setSiteChrome(page: Page) {
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
}

function AppRouter() {
  const [hash, setHash] = useState<string>(() => window.location.hash || "");
  const page = useMemo(() => getPageFromHash(hash), [hash]);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || "");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    setSiteChrome(page);
  }, [page]);

  return page === "why-aqr" ? <WhyAQR /> : <AQR />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(<AppRouter />);
