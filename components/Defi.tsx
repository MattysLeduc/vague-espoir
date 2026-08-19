export default function Defi() {
  return (
    <section className="defi" id="defi">
      <div className="wrap">
        <span className="kicker rv">Le défi</span>
        <h2 className="title rv">
          24 heures <em>dans l&apos;eau</em>
        </h2>
        <div className="defi__grid">
          <div className="defi__text rv">
            <p>
              Mon défi consiste à réaliser une nage d&apos;endurance de{" "}
              <strong>24 heures en eau libre, en solo — sans toucher le bateau ni qui que ce soit</strong>{" "}
              — afin de{" "}
              <strong>
                sensibiliser la population aux maladies mentales et d&apos;amasser des fonds pour la
                recherche et le soutien en santé mentale
              </strong>
              .
            </p>
            <p>
              À travers cette épreuve, je souhaite démontrer que même face aux plus grands défis,
              il est possible de continuer d&apos;avancer, un coup de bras à la fois. La nage
              représente pour moi un symbole de{" "}
              <strong>persévérance, de résilience et d&apos;espoir</strong>.
            </p>
            <p>
              Ce projet a pour objectif de rassembler une communauté autour d&apos;une cause
              importante, de briser les tabous entourant la santé mentale et de rappeler
              l&apos;importance de mieux comprendre, prévenir et soutenir les personnes touchées
              par les maladies mentales.
            </p>
            <p>
              Pendant 24 heures, je nagerai pour toutes les personnes qui vivent des moments
              difficiles, pour leurs proches et pour contribuer à faire avancer la recherche.
            </p>
            <div className="rule-chips">
              <span className="chip">Eau libre</span>
              <span className="chip">En solo</span>
              <span className="chip coral">Aucun contact avec le bateau</span>
              <span className="chip coral">Aucun contact avec quiconque</span>
            </div>
          </div>
          <div className="photo-stack rv" data-delay="1">
            <figure className="ps-1" data-zoom>
              <img
                src="images/img09.jpg"
                alt="Marie-Laurence à la Traversée internationale du lac St-Jean (32 km)"
                loading="lazy"
              />
            </figure>
            <figure className="ps-2" data-zoom>
              <img
                src="images/img11.jpg"
                alt="Ravitaillement pendant l'entraînement en eau libre"
                loading="lazy"
              />
            </figure>
            <figure className="ps-3" data-zoom>
              <img src="images/img12.jpg" alt="Nage au coucher du soleil" loading="lazy" />
            </figure>
          </div>
        </div>
        <p className="gallery-hint rv">Cliquez sur une photo pour l&apos;agrandir.</p>
      </div>
    </section>
  );
}
