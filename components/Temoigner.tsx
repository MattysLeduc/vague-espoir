export default function Temoigner() {
  return (
    <section className="temoigner" id="temoigner">
      <div className="wrap">
        <span className="kicker rv">Votre voix compte</span>
        <h2 className="title rv">
          Témoigner, c&apos;est <em>faire une différence</em>
        </h2>
        <div className="temoigner__grid">
          <div className="temoigner__img rv" data-zoom>
            <img
              src="images/img01.jpg"
              alt="Personne partageant son témoignage devant une caméra"
              loading="lazy"
            />
          </div>
          <div className="rv" data-delay="1">
            <p className="lede" style={{ marginTop: 0 }}>
              Aidez à sensibiliser les personnes en témoignant de votre histoire et des enjeux que
              vous avez vécus. Votre expérience peut contribuer à mieux faire comprendre cette
              réalité, à susciter l&apos;empathie et à encourager des changements positifs.
            </p>
            <div className="formats">
              <div className="fmt">
                <span className="fmt__n">1</span>
                <div>
                  <b>Oral ou écrit</b>
                  <span>Racontez votre histoire dans le format qui vous ressemble.</span>
                </div>
              </div>
              <div className="fmt">
                <span className="fmt__n">2</span>
                <div>
                  <b>En présentiel ou en ligne</b>
                  <span>Sur place lors de l&apos;événement, ou à distance.</span>
                </div>
              </div>
              <div className="fmt">
                <span className="fmt__n">3</span>
                <div>
                  <b>Anonyme ou identifié</b>
                  <span>Votre témoignage vous appartient — vous choisissez.</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "1.8rem" }}>
              <a href="#contact" className="btn btn--coral">
                Partager mon histoire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
