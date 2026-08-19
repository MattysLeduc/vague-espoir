export default function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="wrap">
        <div className="stats__grid">
          <div className="stat rv">
            <div className="stat__num">
              <span data-count="24">0</span>
              <span className="unit"> heures</span>
            </div>
            <p className="stat__label">
              de nage continue en eau libre, sans jamais toucher le bateau ni recevoir d&apos;aide
            </p>
          </div>
          <div className="stat rv" data-delay="1">
            <div className="stat__num">
              <span data-count="1">0</span>
              <span className="unit"> sur </span>
              <span data-count="5">0</span>
            </div>
            <p className="stat__label">
              près de 20 % de la population du Québec sera affectée par un trouble mental au cours
              de sa vie
            </p>
          </div>
          <div className="stat rv" data-delay="2">
            <div className="stat__num">
              &lt;<span data-count="50">0</span>
              <span className="unit"> %</span>
            </div>
            <p className="stat__label">
              selon l&apos;INSPQ, moins de la moitié des personnes affectées consultent un
              professionnel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
