import React from "react";
import ReactDOM from "react-dom/client";
import AQR from "./AQR";
import WhyAQR from "./WhyAQR";
import "./index.css";

function AppRouter() {
  const page = new URLSearchParams(window.location.search).get("page");

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
