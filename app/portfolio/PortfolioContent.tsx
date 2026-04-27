'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import PropertyCard, { type Annuncio } from '@/components/PropertyCard';

// ─────────────────────────────────────────────────────────────────────────────
// MOCK DATA — sostituire con il feed reale di Immobiliare.it
//
// Struttura dei campi allineata al formato XML/JSON standard Immobiliare.it:
//   titolo           → <title>
//   prezzo           → <price><value>
//   superficie       → <surface>
//   locali           → <rooms>
//   zona             → <city_zone>
//   tipologia        → <contract> (1 = vendita, 2 = affitto)
//   immaginePrincipale → <photos><photo url="...">
//   linkEsterno      → URL diretto all'annuncio su Immobiliare.it
// ─────────────────────────────────────────────────────────────────────────────
const annunciMock: Annuncio[] = [
  {
    id: 1,
    titolo: 'Attico luminoso con terrazza panoramica',
    prezzo: 1_850_000,
    superficie: 185,
    locali: 4,
    zona: 'Brera',
    tipologia: 'vendita',
    immaginePrincipale: '/copertina-vendita.png',
    linkEsterno: '#',
  },
  {
    id: 2,
    titolo: 'Appartamento di design in palazzo storico',
    prezzo: 3_800,
    superficie: 120,
    locali: 3,
    zona: 'Porta Venezia',
    tipologia: 'affitto',
    immaginePrincipale: '/copertina-affitto.png',
    linkEsterno: '#',
  },
  {
    id: 3,
    titolo: 'Trilocale ristrutturato con vista sui Navigli',
    prezzo: 620_000,
    superficie: 95,
    locali: 3,
    zona: 'Navigli',
    tipologia: 'vendita',
    immaginePrincipale: '/copertina-vendita.png',
    linkEsterno: '#',
  },
  {
    id: 4,
    titolo: 'Bilocale moderno con portineria — Porta Nuova',
    prezzo: 2_200,
    superficie: 68,
    locali: 2,
    zona: 'Porta Nuova',
    tipologia: 'affitto',
    immaginePrincipale: '/copertina-affitto.png',
    linkEsterno: '#',
  },
  {
    id: 5,
    titolo: 'Villa con giardino privato e piscina',
    prezzo: 3_200_000,
    superficie: 420,
    locali: 7,
    zona: 'Città Studi',
    tipologia: 'vendita',
    immaginePrincipale: '/copertina-vendita.png',
    linkEsterno: '#',
  },
  {
    id: 6,
    titolo: 'Loft esclusivo con soffitti a doppia altezza',
    prezzo: 4_500,
    superficie: 150,
    locali: 2,
    zona: 'Isola',
    tipologia: 'affitto',
    immaginePrincipale: '/copertina-affitto.png',
    linkEsterno: '#',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FETCH FUNCTION — attualmente ritorna i mock data in modo sincrono.
//
// Per integrare Immobiliare.it, sostituire il corpo con la chiamata API:
//
//   const res = await fetch(
//     `https://api.immobiliare.it/v2/listings?agencyId=${process.env.IMMOBILIARE_AGENCY_ID}`,
//     { headers: { Authorization: `Bearer ${process.env.IMMOBILIARE_API_KEY}` },
//       next: { revalidate: 900 } }   // ISR ogni 15 min
//   );
//   const json = await res.json();
//   return json.results.map(mapImmobiliareToAnnuncio);  // adattare la mappatura
//
// Il tipo Annuncio (in components/PropertyCard.tsx) è già allineato
// ai campi principali del feed Immobiliare.it.
// ─────────────────────────────────────────────────────────────────────────────
async function fetchAnnunci(): Promise<Annuncio[]> {
  return annunciMock;
}

export default function PortfolioContent() {
  const [annunci, setAnnunci] = useState<Annuncio[]>([]);

  // Carica gli annunci — basta aggiornare fetchAnnunci() per usare l'API reale
  useEffect(() => {
    fetchAnnunci().then(setAnnunci);
  }, []);

  // Animazione GSAP: hero entrance + stagger sulle card
  useEffect(() => {
    if (!annunci.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set('.property-card', { opacity: 1, y: 0 });
      return;
    }

    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .from('.inner-hero-eyebrow', { opacity: 0, y: 16, duration: 0.7 })
      .from('.inner-hero-title',   { opacity: 0, y: 24, duration: 0.9 }, '-=0.45')
      .from('.inner-hero-subtitle',{ opacity: 0, y: 16, duration: 0.8 }, '-=0.55');

    // Stagger sulle card con delay per far finire l'hero prima
    gsap.fromTo(
      '.property-card',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.75, ease: 'power3.out', delay: 0.35 }
    );

    return () => { heroTl.kill(); };
  }, [annunci.length]);

  return (
    <main className="portfolio-page">
      <div className="inner-hero">
        <div className="inner-hero-eyebrow">
          <div className="inner-hero-eyebrow-line" />
          <span>Le nostre proprietà</span>
        </div>
        <h1 className="inner-hero-title">Portfolio</h1>
        <p className="inner-hero-subtitle">
          Una selezione di immobili esclusivi a Milano: residenze di pregio, attici con
          terrazza e appartamenti di design nelle zone più ambite della città.
        </p>
      </div>

      {/*
        INTEGRAZIONE IMMOBILIARE.IT
        Questo grid cicla su annunci[] popolato da fetchAnnunci().
        Quando l'API sarà attiva, solo fetchAnnunci() deve essere aggiornata —
        il componente PropertyCard e questa struttura rimangono invariati.
      */}
      <div className="portfolio-page-grid">
        {annunci.map((annuncio) => (
          <PropertyCard key={annuncio.id} annuncio={annuncio} />
        ))}
      </div>
    </main>
  );
}
