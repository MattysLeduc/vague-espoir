const ROLES = [
  {
    img: "images/img13.jpg",
    alt: "Pictogramme sauveteur aquatique",
    title: "Sauveteur aquatique",
    text: "Assurez la sécurité dans l'eau et veillez sur la nageuse tout au long du défi.",
  },
  {
    img: "images/img14.jpg",
    alt: "Équipe de premiers soins",
    title: "Premiers soins",
    text: "Soutien médical et surveillance de l'état de la nageuse, heure après heure.",
  },
  {
    img: "images/img15.jpg",
    alt: "Embarcation d'accompagnement sur l'eau",
    title: "Accompagnement nautique",
    text: "Pilotez ou assistez l'embarcation qui escorte la nage en eau libre.",
  },
  {
    img: "images/img16.jpg",
    alt: "Équipe d'organisation en réunion",
    title: "Organisation & logistique",
    text: "Accueil, ravitaillement, animation : chaque coup de main fait avancer la vague.",
  },
];

export default function Benevoles() {
  return (
    <section className="benevoles" id="benevoles">
      <div className="wrap">
        <span className="kicker rv">S&apos;impliquer</span>
        <h2 className="title rv">
          Devenez <em>bénévole</em>
        </h2>
        <p className="lede rv">
          Une nage de 24 heures, c&apos;est le travail de toute une communauté. Joignez
          l&apos;équipe qui veille sur la vague, de jour comme de nuit.
        </p>
        <div className="bene__grid">
          {ROLES.map((r, i) => (
            <div className="bcard rv" data-delay={i || undefined} key={r.title}>
              <div className="bcard__img">
                <img src={r.img} alt={r.alt} loading="lazy" />
              </div>
              <div className="bcard__body">
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "2.4rem" }} className="rv">
          <a href="#contact" className="btn btn--coral">
            Je veux aider
          </a>
        </div>
      </div>
    </section>
  );
}
