import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import AQR from "./AQR";
import WhyAQR from "./WhyAQR";
import "./index.css";

function setChrome(page: "home" | "why") {
  document.title = page === "why" ? "AQR | Why AQR" : "AQR";

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

function getPage(hash: string) {
  return hash.startsWith("#/why-aqr") ? "why" : "home";
}

function App() {
  const [page, setPage] = useState<"home" | "why">(() => getPage(window.location.hash || ""));

  useEffect(() => {
    const handleHashChange = () => {
      const nextPage = getPage(window.location.hash || "");
      setPage(nextPage);
      setChrome(nextPage);
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return page === "why" ? <WhyAQR /> : <AQR />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
