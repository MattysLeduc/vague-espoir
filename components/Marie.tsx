const STORIES = [
  {
    img: "images/img03.jpg",
    alt: "Marie-Laurence à l'entraînement en piscine",
    big: (
      <>
        Je suis une fille qui a dû apprendre très jeune à se battre contre des choses que{" "}
        <em>les autres ne voyaient pas</em>.
      </>
    ),
    paras: [
      "À 14 ans, j'ai été diagnostiquée avec une dépression. À un âge où je devais simplement grandir et profiter de la vie, je me suis retrouvée à essayer de comprendre des émotions beaucoup trop lourdes pour moi.",
      "J'ai connu l'anxiété, le stress, les doutes et ces moments où les pensées prennent toute la place. Des moments où avancer était difficile, où je me demandais si j'allais réussir à retrouver la lumière. De l'extérieur, certaines personnes pouvaient voir une fille qui continuait son chemin, mais à l'intérieur, je vivais des combats que peu de gens connaissaient.",
    ],
  },
  {
    img: "images/img06.jpg",
    alt: "Moment de calme au bord du lac, au coucher du soleil",
    big: (
      <>
        C&apos;est pour ça que la cause de la santé mentale est si importante pour moi.{" "}
        <em>Parce qu&apos;elle fait partie de mon histoire.</em>
      </>
    ),
    paras: [
      "Je sais ce que ça fait de vivre des difficultés invisibles. Je sais à quel point c'est important de se sentir compris, écouté et de savoir qu'on n'est pas seul. Je veux contribuer à enlever les tabous autour des maladies mentales et rappeler aux personnes qui souffrent qu'elles ont le droit de demander de l'aide et qu'il y a toujours de l'espoir.",
      "Ma dépression et mon anxiété font partie de mon parcours, mais elles ne définissent pas qui je suis.",
    ],
  },
  {
    img: "images/img05.jpg",
    alt: "Marie-Laurence enfant, à ses premières courses en eau libre",
    big: (
      <>
        Je suis aussi la fille qui a trouvé <em>une force dans l&apos;eau</em>.
      </>
    ),
    paras: [
      "La fille qui a appris à transformer ses peurs en énergie et ses doutes en motivation. La fille qui a nagé des heures, qui a affronté le froid, la fatigue et ses propres limites pour réaliser des rêves que plusieurs auraient trouvés impossibles.",
      "Chaque kilomètre que je nage représente plus qu'un défi sportif. C'est un message. Un message pour toutes les personnes qui traversent des tempêtes en silence. Un message pour leur dire qu'elles ne sont pas seules et que leurs difficultés ne leur enlèvent pas leur valeur.",
    ],
  },
  {
    img: "images/img08.jpg",
    alt: "Marie-Laurence en voyage, au bord de la mer",
    big: (
      <>
        Si je veux relever une nage de 24 heures, ce n&apos;est pas seulement pour accomplir
        quelque chose d&apos;extraordinaire.
      </>
    ),
    paras: [
      "C'est pour transformer mon histoire en quelque chose de positif. C'est pour utiliser ma voix afin d'aider d'autres personnes.",
      "Aujourd'hui, quand je regarde la petite Marie-Laurence de 14 ans, je ne vois pas une fille faible. Je vois une fille courageuse qui continuait d'avancer même quand elle ne savait pas encore où son chemin allait la mener. Je suis une personne sensible, passionnée et déterminée. Je ressens profondément, je rêve grand et je veux faire une différence.",
    ],
  },
];

export default function Marie() {
  return (
    <section className="marie" id="marie">
      <div className="wrap">
        <span className="kicker rv">La nageuse</span>
        <h2 className="title rv">
          Je suis <em>Marie-Laurence</em>
        </h2>
        <p className="intro-q rv">
          Qui est Marie-Laurence, et pourquoi la santé mentale est-elle une cause qui me tient à
          cœur&nbsp;?
        </p>

        {STORIES.map((s, i) => (
          <div className="story rv" key={i}>
            <div className="story__img" data-zoom>
              <img src={s.img} alt={s.alt} loading="lazy" />
            </div>
            <div className="story__txt">
              <p className="big">{s.big}</p>
              {s.paras.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </div>
        ))}

        <div className="quote-band rv">
          <p>
            Je ne suis pas définie par mon diagnostic. Je suis définie par toutes les fois où
            j&apos;ai choisi de continuer malgré mes peurs. Je suis Marie-Laurence. J&apos;ai
            traversé mes tempêtes. Et mon histoire ne fait que commencer&nbsp;!
          </p>
          <cite>— Marie-Laurence</cite>
        </div>
      </div>
    </section>
  );
}
