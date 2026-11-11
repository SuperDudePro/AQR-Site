import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import "./ResponsiveNav.css";

type ResponsiveNavProps = {
  className: string;
  ariaLabel: string;
  children: ReactNode;
};

/** Keep the entire header navigation on one line, or replace it with a menu. */
export default function ResponsiveNav({ className, ariaLabel, children }: ResponsiveNavProps) {
  // Keep navigation links available in prerendered HTML and when JavaScript is disabled.
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const inlineRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    const nav = navRef.current;
    const inline = inlineRef.current;
    const header = nav?.parentElement;
    const brand = header?.querySelector("a[class*='brand']");
    if (!nav || !inline || !header || !brand) return;

    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const headerStyle = getComputedStyle(header);
        const gap = Number.parseFloat(headerStyle.columnGap || headerStyle.gap) || 0;
        const space = header.clientWidth - brand.getBoundingClientRect().width - gap;
        const needed = inline.scrollWidth;
        setCompact(needed > space + 1);
      });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    observer.observe(brand);
    observer.observe(inline);
    measure();
    void document.fonts?.ready.then(measure);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [children]);

  useEffect(() => {
    if (!open) return;
    const onOutside = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        navRef.current?.querySelector<HTMLButtonElement>(".aqr-nav-menu-button")?.focus();
      }
    };
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className={`${className} aqr-responsive-nav${compact ? " aqr-nav-compact" : ""}`} aria-label={ariaLabel} ref={navRef}>
      <div className="aqr-nav-inline" ref={inlineRef} aria-hidden={compact || undefined} inert={compact}>
        {children}
      </div>
      {compact && (
        <>
          <button className="aqr-nav-menu-button" type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((value) => !value)}>
            Menu <span className="aqr-nav-menu-icon" aria-hidden="true">☰</span>
          </button>
          {open && <div className="aqr-nav-menu-panel" id={panelId} onClick={() => setOpen(false)}>{children}</div>}
        </>
      )}
    </nav>
  );
}
