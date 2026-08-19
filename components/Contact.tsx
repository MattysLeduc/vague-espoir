export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <h2 className="rv">
          Ensemble, faisons grandir <em>la vague</em>
        </h2>
        <p className="contact__sub rv">
          Témoignage, bénévolat, partenariat ou simple mot d&apos;encouragement — écrivez-nous,
          chaque message compte.
        </p>
        <div className="contact__links rv" data-delay="1">
          <a className="clink" href="tel:4383508449">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (438) 350-8449
          </a>
          <a
            className="clink"
            href="https://www.instagram.com/vague_espoir"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
            </svg>
            @vague_espoir
          </a>
        </div>
      </div>
      <div className="footer">
        <b>La vague d&apos;espoir</b> · Une nage de 24 heures pour la santé mentale · © 2026
      </div>
    </section>
  );
}
