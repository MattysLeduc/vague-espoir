"use client";

import { useEffect, useRef, useState } from "react";

const PHASES: [number, string, string][] = [
  [0, "Heure 0 — Le grand départ", "Le premier plongeon. Le cœur bat fort, la communauté est là, et la vague d'espoir se met en marche."],
  [3, "Heure 3 — Trouver son rythme", "Un coup de bras à la fois. Le corps trouve sa cadence, l'esprit se concentre sur l'essentiel : avancer."],
  [6, "Heure 6 — La nuit tombe", "L'eau devient noire. C'est dans l'obscurité qu'on comprend les tempêtes que certains traversent en silence."],
  [9, "Heure 9 — Au cœur de la nuit", "La fatigue pèse, le froid mord. Mais abandonner n'est pas une option : trop de gens comptent sur cette vague."],
  [12, "Heure 12 — Mi-parcours", "La moitié du chemin. Comme dans la vie, chaque tempête finit par passer — il faut continuer d'avancer."],
  [15, "Heure 15 — Les heures creuses", "Le corps crie, l'esprit répond. La persévérance, c'est choisir de continuer même quand c'est difficile."],
  [18, "Heure 18 — Le lever du soleil", "La lumière revient toujours. Après la nuit la plus longue, l'horizon s'embrase d'espoir."],
  [21, "Heure 21 — La dernière vague", "Portée par la communauté sur la rive, chaque coup de bras devient un message : vous n'êtes pas seuls."],
  [24, "Heure 24 — L'arrivée", "24 heures. Pour toutes les personnes qui vivent des moments difficiles, pour leurs proches, et pour la recherche."],
];

const CIRC = 2 * Math.PI * 88;

export default function Journey() {
  const [hour, setHour] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setHour((h) => (h + 1) % 25);
    }, 2600);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, []);

  const stopAuto = () => {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  };

  let phase = PHASES[0];
  for (const p of PHASES) if (hour >= p[0]) phase = p;

  return (
    <section className="journey dark" id="journey">
      <div className="wrap">
        <span className="kicker rv">Vivez le défi</span>
        <h2 className="title rv">
          Suivez la vague, <em>heure par heure</em>
        </h2>
        <p className="lede rv">
          Glissez le curseur pour traverser les 24 heures de nage — du premier plongeon au dernier
          coup de bras.
        </p>
        <div className="journey__panel rv" data-delay="1">
          <div className="clock" aria-hidden="true">
            <svg viewBox="0 0 200 200">
              <defs>
                <linearGradient id="gradRing" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#35C0CD" />
                  <stop offset="60%" stopColor="#9BE0E5" />
                  <stop offset="100%" stopColor="#FFB566" />
                </linearGradient>
              </defs>
              <circle className="track" cx="100" cy="100" r="88" />
              <circle
                className="prog"
                cx="100"
                cy="100"
                r="88"
                style={{ strokeDasharray: CIRC, strokeDashoffset: CIRC * (1 - hour / 24) }}
              />
            </svg>
            <div className="clock__center">
              <div className="clock__time">{String(hour).padStart(2, "0")} h</div>
              <div className="clock__cap">
                {hour === 0 ? "départ" : hour === 24 ? "arrivée !" : "de nage"}
              </div>
            </div>
          </div>
          <div className="journey__msgbox">
            <span className="journey__phase">{phase[1]}</span>
            <p className="journey__msg">«&nbsp;{phase[2]}&nbsp;»</p>
            <input
              type="range"
              className="journey__slider"
              min={0}
              max={24}
              step={1}
              value={hour}
              aria-label="Heure de la nage, de 0 à 24"
              style={{ "--fill": `${(hour / 24) * 100}%` } as React.CSSProperties}
              onPointerDown={stopAuto}
              onChange={(e) => {
                stopAuto();
                setHour(+e.target.value);
              }}
            />
            <p className="journey__hint">
              ← Faites glisser pour avancer dans la nuit et revoir le soleil se lever →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
