const QC = "https://www.quebec.ca/sante/sante-mentale/s-informer-sur-sante-mentale-et-troubles-mentaux/mieux-comprendre-troubles-mentaux";

const TROUBLES: [string, string][] = [
  ["État de stress post-traumatique (ESPT)", `${QC}/etat-stress-post-traumatique`],
  ["Troubles anxieux", `${QC}/troubles-anxieux`],
  ["Phobie spécifique", `${QC}/phobie-specifique`],
  ["Anxiété sociale", `${QC}/anxiete-sociale`],
  ["Anxiété généralisée", `${QC}/anxiete-generalisee`],
  ["Trouble panique", `${QC}/trouble-panique`],
  ["Agoraphobie", `${QC}/agoraphobie`],
  ["Trouble de la personnalité limite (TPL)", `${QC}/trouble-personnalite-limite`],
  ["TDAH", "https://www.quebec.ca/sante/problemes-de-sante/a-z/trouble-deficit-attention-hyperactivite-tdah"],
  ["Trouble obsessionnel-compulsif (TOC)", `${QC}/trouble-obsessionnel-compulsif`],
  ["Troubles de l'humeur", `${QC}/troubles-humeur`],
  ["Dépression", `${QC}/depression`],
  ["Troubles bipolaires", `${QC}/trouble-bipolaire`],
  ["Troubles psychotiques", `${QC}/troubles-psychotiques`],
];

export default function Sante() {
  return (
    <section className="sante" id="sante">
      <div className="wrap">
        <span className="kicker rv">Comprendre</span>
        <h2 className="title rv">
          Les maladies <em>mentales</em>
        </h2>
        <div className="sante__def rv">
          <div>
            <h3>Qu&apos;est-ce qu&apos;une maladie mentale&nbsp;?</h3>
            <p>
              Une maladie mentale, ou trouble mental, se caractérise par une{" "}
              <strong>
                altération importante de la cognition, de la régulation émotionnelle et/ou du
                comportement
              </strong>
              , souvent accompagnée de détresse ou de difficultés fonctionnelles dans la vie
              quotidienne.
            </p>
            <p style={{ marginTop: ".8rem" }}>
              Près de 20&nbsp;% de la population du Québec, soit une personne sur cinq, sera
              affectée par un trouble mental au cours de sa vie. Selon l&apos;Institut national de
              santé publique du Québec, moins de la moitié des personnes affectées consultent un
              professionnel.
            </p>
          </div>
          <img
            src="images/img02.jpg"
            alt="Personne vivant un moment difficile, la tête entre les mains"
            loading="lazy"
          />
        </div>
        <div className="troubles rv">
          <h3>Les troubles mentaux les plus fréquents</h3>
          <div className="troubles__grid">
            {TROUBLES.map(([label, href]) => (
              <a className="tcard" key={label} href={href} target="_blank" rel="noopener noreferrer">
                {label}
                <span className="arr">→</span>
              </a>
            ))}
          </div>
          <p className="sante__note">
            Sources&nbsp;: Québec.ca — chaque carte ouvre la fiche officielle du gouvernement du
            Québec.
          </p>
        </div>
      </div>
    </section>
  );
}
