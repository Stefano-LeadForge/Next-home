'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';

const ease = [0.16, 1, 0.3, 1] as const;

const ARTICLES = [
  {
    id: 1,
    src: '/blog-mercato.jpg',
    alt: 'Mercato Immobiliare Milano',
    category: 'Mercato',
    date: '12 Aprile 2026',
    title: 'Come sta evolvendo il mercato immobiliare a Milano nel 2026',
    excerpt:
      "Un'analisi approfondita delle tendenze attuali, dei prezzi per zona e delle opportunità per chi vuole comprare o vendere casa nel capoluogo lombardo.",
    delay: 0,
  },
  {
    id: 2,
    src: '/blog-affitti.jpg',
    alt: 'Affitti Brevi',
    category: 'Affitti Brevi',
    date: '28 Marzo 2026',
    title: 'Affitti brevi: guida completa per massimizzare i tuoi ricavi',
    excerpt:
      'Tutto quello che devi sapere per gestire il tuo immobile su Airbnb e Booking: dalle fotografie professionali al pricing dinamico.',
    delay: 0.12,
  },
  {
    id: 3,
    src: '/blog-valutazione.jpg',
    alt: 'Valutazione Casa',
    category: 'Guida',
    date: '10 Marzo 2026',
    title: 'Come valutare correttamente il prezzo della tua casa',
    excerpt:
      "I criteri che usano i professionisti per stimare il valore di un immobile: posizione, stato, metratura e i dati reali del mercato locale.",
    delay: 0.24,
  },
];

export default function HomeSections() {
  const { scrollY } = useScroll();
  const [ctaVisible, setCtaVisible] = useState(false);

  /* CTA overlay: appears when hero expansion is starting (≈5% vh scroll),
     disappears when portfolio section is fully in view (≈220% vh) */
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const h = window.innerHeight;
    setCtaVisible(latest > h * 0.05 && latest < h * 2.2);
  });

  return (
    <>
      {/* ══ CTA OVERLAY — fixed, appears over the fullscreen hero image ══ */}
      <motion.div
        className="cta-overlay"
        initial={false}
        animate={ctaVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.9, ease }}
        style={{ pointerEvents: ctaVisible ? 'auto' : 'none' }}
      >
        <div className="cta-overlay-text">
          <div className="cta-overlay-eyebrow">
            <div className="cta-overlay-eyebrow-line" />
            <span className="cta-overlay-eyebrow-txt">Next Home 360</span>
          </div>
          <h2 className="cta-overlay-title">
            Il tuo immobile lavora<br />
            per te mentre <em>lo vendiamo.</em>
          </h2>
          <p className="cta-overlay-body">
            Gestiamo affitti brevi di alta qualità per massimizzare i ricavi durante
            l&apos;intera fase di vendita. Zero pensieri, massima redditività.
          </p>
        </div>
        <a href="#" className="cta-overlay-btn">
          <span>Scopri il servizio</span>
          <span className="arr" />
        </a>
      </motion.div>

      {/* ══ HERO EXIT ZONE — 120vh scroll space while hero stays pinned ══ */}
      <div className="hero-exit-zone" />

      {/* ══ PORTFOLIO SECTION ══ */}
      <section className="portfolio-section" id="nextSection">
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="portfolio-eyebrow">
            <div className="portfolio-eyebrow-line" />
            <span className="portfolio-eyebrow-text">Le nostre proprietà</span>
          </div>
          <h2 className="portfolio-title">Portfolio</h2>
        </motion.div>

        <div className="portfolio-grid">
          {[
            { id: 1, src: '/portfolio-affitto.jpg', alt: 'Case in Affitto', line2: 'Affitto', delay: 0.1 },
            { id: 2, src: '/portfolio-vendita.jpg', alt: 'Case in Vendita', line2: 'Vendita', delay: 0.22 },
          ].map(({ id, src, alt, line2, delay }) => (
            <motion.a
              key={id}
              href="#"
              className="portfolio-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay, ease }}
            >
              <Image
                className="portfolio-card-img"
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="portfolio-card-overlay" />
              <div className="portfolio-card-content">
                <div className="portfolio-card-label">Residenziale</div>
                <h3 className="portfolio-card-title">
                  Case in<br /><em>{line2}</em>
                </h3>
                <span className="portfolio-card-cta">
                  Scopri le proprietà
                  <span className="arr" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ══ BLOG SECTION ══ */}
      <section className="blog-section" id="blogSection">
        <div className="blog-inner">
          <motion.div
            className="blog-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="blog-header-left">
              <div className="blog-eyebrow">
                <div className="blog-eyebrow-line" />
                <span className="blog-eyebrow-text">Aggiornamenti e consigli</span>
              </div>
              <h2 className="blog-title">Blog</h2>
            </div>
            <a href="/blog" className="blog-more">
              Mostra altro <span className="arr" />
            </a>
          </motion.div>

          <div className="blog-grid">
            {ARTICLES.map((article) => (
              <motion.a
                key={article.id}
                href="/blog"
                className="blog-card"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, delay: article.delay, ease }}
              >
                <div className="blog-thumb">
                  <Image
                    src={article.src}
                    alt={article.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <span className="blog-category">{article.category}</span>
                </div>
                <div className="blog-body">
                  <div className="blog-date">{article.date}</div>
                  <h3 className="blog-card-title">{article.title}</h3>
                  <p className="blog-excerpt">{article.excerpt}</p>
                  <span className="blog-read-more">
                    Leggi l&apos;articolo <span className="arr" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA FINALE ══ */}
      <section className="cta-finale" id="ctaFinale">
        <Image
          src="/cta-finale.jpg"
          alt="Interno luxury — valutazione immobiliare"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          priority
        />
        <div className="cta-finale-overlay" />
        <motion.div
          className="cta-finale-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="cta-finale-eyebrow">Next Home Real Estate</div>
          <h2 className="cta-finale-headline">
            Scopri il valore reale<br />del tuo immobile
          </h2>
          <p className="cta-finale-text">
            Affidati a Next Home per una valutazione professionale completa,
            mirata a valorizzare al meglio il tuo immobile sul mercato.
          </p>
          <a href="#" className="cta-finale-btn">
            <span>Richiedi una valutazione</span>
            <span className="arr" />
          </a>
          <span className="cta-finale-micro">* gratuita e senza impegno</span>
        </motion.div>
      </section>
    </>
  );
}
