import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import AQR from "./AQR";
import WhyAQR from "./WhyAQR";
import "./index.css";

type Route = "home" | "why";

const WHY_HASH = "#/why-aqr";

function setChrome(route: Route) {
  document.title = route === "why" ? "AQR | Why AQR" : "AQR";

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

function getRoute(hash: string): Route {
  return hash.startsWith(WHY_HASH) ? "why" : "home";
}

function navigate(route: Route) {
  const nextHash = route === "why" ? WHY_HASH : "";

  if (window.location.hash === nextHash) {
    setChrome(route);
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  window.location.hash = nextHash;
}

function App() {
  const [route, setRoute] = useState<Route>(() => getRoute(window.location.hash || ""));

  useEffect(() => {
    const syncRoute = () => {
      const nextRoute = getRoute(window.location.hash || "");
      setRoute(nextRoute);
      setChrome(nextRoute);
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    syncRoute();
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  return route === "why" ? (
    <WhyAQR onNavigateHome={() => navigate("home")} />
  ) : (
    <AQR onNavigateWhy={() => navigate("why")} />
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
