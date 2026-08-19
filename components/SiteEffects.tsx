"use client";

import { useEffect, useState } from "react";

/**
 * Global scroll effects (reveal-on-scroll, stat count-up) and the photo lightbox.
 * Sections opt in via the `.rv` class, `data-count` spans, and `data-zoom` wrappers.
 */
export default function SiteEffects() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const rvObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            rvObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    document.querySelectorAll(".rv").forEach((el) => rvObs.observe(el));

    const cntObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          cntObs.unobserve(e.target);
          const el = e.target as HTMLElement;
          const target = +(el.dataset.count || 0);
          const dur = 1400;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / dur, 1);
            el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll("[data-count]").forEach((el) => cntObs.observe(el));

    const onClick = (e: MouseEvent) => {
      const zoom = (e.target as HTMLElement).closest("[data-zoom]");
      if (!zoom) return;
      const img = zoom.querySelector("img");
      if (img) setLightbox({ src: img.src, alt: img.alt });
    };
    document.addEventListener("click", onClick);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      rvObs.disconnect();
      cntObs.disconnect();
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
  }, [lightbox]);

  return (
    <div
      className={`lightbox${lightbox ? " open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Photo agrandie"
      onClick={(e) => {
        if (e.target === e.currentTarget) setLightbox(null);
      }}
    >
      <button className="lightbox__close" aria-label="Fermer" onClick={() => setLightbox(null)}>
        ×
      </button>
      {lightbox && <img src={lightbox.src} alt={lightbox.alt} />}
    </div>
  );
}
