"use client";

import { useEffect, useState } from "react";

type Bubble = { size: number; left: number; duration: number; delay: number };

export default function Hero() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(
      Array.from({ length: 26 }, () => ({
        size: 4 + Math.random() * 16,
        left: Math.random() * 100,
        duration: 9 + Math.random() * 14,
        delay: -Math.random() * 20,
      }))
    );
  }, []);

  return (
    <header className="hero" id="top">
      <div className="bubbles" aria-hidden="true">
        {bubbles.map((b, i) => (
          <span
            key={i}
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="hero__inner">
        <span className="hero__kicker">
          <span className="dot"></span>Nage d&apos;endurance · 24 heures · eau libre
        </span>
        <h1>
          La vague
          <br />
          <span className="esp">d&apos;espoir</span>
        </h1>
        <p className="hero__sub">
          24 heures de nage en eau libre, en solo, pour{" "}
          <strong>briser les tabous entourant la santé mentale</strong> et amasser des fonds pour
          la recherche — un coup de bras à la fois.
        </p>
        <div className="hero__actions">
          <a href="#defi" className="btn btn--coral">
            Découvrir le défi
          </a>
          <a href="#aide" className="btn btn--ghost">
            Trouver de l&apos;aide
          </a>
        </div>
      </div>
      <a className="hero__scroll" href="#stats">
        Plonger
      </a>
      <div className="waves" aria-hidden="true">
        <svg viewBox="0 0 1440 190" preserveAspectRatio="none">
          <g className="wave-track">
            <path
              fill="rgba(53,192,205,.16)"
              d="M0,80 C120,130 240,130 360,85 C480,40 600,40 720,85 C840,130 960,130 1080,85 C1200,40 1320,40 1440,85 C1560,130 1680,130 1800,85 C1860,62 1920,62 1920,62 L1920,190 L0,190 Z"
            />
          </g>
          <g className="wave-track w2">
            <path
              fill="rgba(155,224,229,.22)"
              d="M0,105 C130,150 260,150 390,105 C520,60 650,60 780,105 C910,150 1040,150 1170,105 C1300,60 1430,60 1560,105 C1690,150 1820,150 1920,120 L1920,190 L0,190 Z"
            />
          </g>
          <g className="wave-track w3">
            <path
              fill="#F2F8F8"
              d="M0,140 C140,175 280,175 420,140 C560,105 700,105 840,140 C980,175 1120,175 1260,140 C1400,105 1540,105 1680,140 C1780,164 1920,160 1920,160 L1920,190 L0,190 Z"
            />
          </g>
        </svg>
      </div>
    </header>
  );
}
