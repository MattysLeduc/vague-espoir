"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#defi", label: "Le défi" },
  { href: "#marie", label: "Marie-Laurence" },
  { href: "#sante", label: "Santé mentale" },
  { href: "#aide", label: "Trouver de l'aide" },
  { href: "#temoigner", label: "Témoigner" },
  { href: "#benevoles", label: "Bénévoles" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = [...LINKS.map((l) => l.href.slice(1)), "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <a href="#top" className="nav__logo" aria-label="La vague d'espoir — retour en haut">
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M2 20c4-6 8-6 12 0s8 6 12 0" stroke="#35C0CD" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M2 26c4-6 8-6 12 0s8 6 12 0" stroke="#FF8552" strokeWidth="2.6" strokeLinecap="round" opacity=".85" />
          <circle cx="24" cy="8" r="4" fill="#FFB566" />
        </svg>
        La vague d&apos;espoir
      </a>
      <button
        className={`nav__burger${open ? " open" : ""}`}
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav__links${open ? " open" : ""}`}>
        {LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={active === l.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="cta" onClick={() => setOpen(false)}>
            Nous joindre
          </a>
        </li>
      </ul>
    </nav>
  );
}
