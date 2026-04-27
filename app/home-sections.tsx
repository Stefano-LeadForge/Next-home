'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLenis } from '@/components/SmoothScrolling';

const ease = [0.16, 1, 0.3, 1] as const;

const ARTICLES = [
  {
    id: 1,
    href: '/blog/mercato-immobiliare-milano-2026',
    src: '/copertina-articolo-mercato.png',
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
    href: '/blog',
    src: '/copertina-articolo-bnb.png',
    alt: 'Affitti Brevi Milano',
    category: 'Affitti Brevi',
    date: '28 Marzo 2026',
    title: 'Affitti brevi: guida completa per massimizzare i tuoi ricavi',
    excerpt:
      'Tutto quello che devi sapere per gestire il tuo immobile su Airbnb e Booking: dalle fotografie professionali al pricing dinamico.',
    delay: 0.12,
  },
  {
    id: 3,
    href: '/blog',
    src: '/copertina-articolo-valutazione.png',
    alt: 'Valutazione Immobiliare',
    category: 'Guida',
    date: '10 Marzo 2026',
    title: 'Come valutare correttamente il prezzo della tua casa',
    excerpt:
      "I criteri che usano i professionisti per stimare il valore di un immobile: posizione, stato, metratura e i dati reali del mercato locale.",
    delay: 0.24,
  },
];

export default function HomeSections() {
  const lenis = useLenis();

  function scrollToNext() {
    lenis?.scrollTo('#blogSection', {
      duration: 1.4,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
  }

  return (
    <>
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
            { id: 1, src: '/copertina-affitto.png', alt: 'Case in Affitto Milano', line2: 'Affitto', href: '/portfolio/affitti', delay: 0.1 },
            { id: 2, src: '/copertina-vendita.png', alt: 'Case in Vendita Milano', line2: 'Vendita', href: '/portfolio/vendite', delay: 0.22 },
          ].map(({ id, src, alt, line2, href, delay }) => (
            <motion.a
              key={id}
              href={href}
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

        <div className="portfolio-arrow-wrap">
          <button className="section-scroll-arrow" onClick={scrollToNext} aria-label="Vai alla sezione Blog">
            <span className="section-scroll-arrow-icon" />
          </button>
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
                href={article.href}
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
          src="/sfondo-home-fine.png"
          alt="Interno luxury — valutazione immobiliare"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
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
          <a href="/valuta-casa" className="cta-finale-btn">
            <span>Richiedi una valutazione</span>
            <span className="arr" />
          </a>
          <span className="cta-finale-micro">* gratuita e senza impegno</span>
        </motion.div>
      </section>
    </>
  );
}
