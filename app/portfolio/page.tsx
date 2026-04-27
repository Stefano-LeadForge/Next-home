import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio — NextHome Real Estate',
  description: 'Scopri le proprietà in affitto e vendita selezionate da NextHome Real Estate a Milano.',
};

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <div className="inner-hero">
        <div className="inner-hero-eyebrow">
          <div className="inner-hero-eyebrow-line" />
          <span className="inner-hero-eyebrow-text">Le nostre proprietà</span>
        </div>
        <h1 className="inner-hero-title">Portfolio</h1>
        <p className="inner-hero-subtitle">
          Stiamo aggiornando il nostro catalogo. Torna presto per scoprire le nuove proprietà selezionate.
        </p>
      </div>
    </main>
  );
}
