export default function Aide() {
  return (
    <section className="aide dark" id="aide">
      <div className="wrap">
        <span className="kicker rv">Tu n&apos;es pas seul·e</span>
        <h2 className="title rv">
          Va chercher <em>de l&apos;aide&nbsp;!</em>
        </h2>
        <p className="lede rv">
          Demander de l&apos;aide est un geste de courage. Ces ressources sont là pour toi, ou pour
          un proche, en toute confidentialité.
        </p>
        <div className="aide__grid">
          <div className="acard acard--urgent rv">
            <span className="acard__tag">Prévention du suicide · 24/7</span>
            <a className="acard__num" href="tel:18662774553">
              1 866 APPELLE
            </a>
            <p>(1 866 277-4553) — disponible en tout temps pour parler avec un professionnel.</p>
          </div>
          <div className="acard rv" data-delay="1">
            <span className="acard__tag">Consultation psychosociale</span>
            <a className="acard__num" href="tel:811">
              Info-Social 811
            </a>
            <p>
              Un service de consultation téléphonique gratuit et confidentiel pour des problèmes
              psychosociaux.
            </p>
          </div>
          <div className="acard rv" data-delay="2">
            <span className="acard__tag">Pour les proches</span>
            <a className="acard__num" href="tel:8552727837">
              (855) 272-7837
            </a>
            <p>
              Ligne de référence disponible pour les proches d&apos;une personne vivant avec un
              problème de santé mentale.
            </p>
          </div>
          <div className="acard rv" data-delay="3">
            <span className="acard__tag">Réseau d&apos;organismes</span>
            <a
              className="acard__num"
              href="https://www.capsantementale.ca/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.6rem" }}
            >
              CAP santé mentale
            </a>
            <p>
              Une confédération d&apos;organismes d&apos;aide aux proches vivant avec un problème
              de santé mentale.
            </p>
          </div>
        </div>
        <p className="aide__disclaimer rv">En cas d&apos;urgence immédiate, composez le 911.</p>
      </div>
    </section>
  );
}
