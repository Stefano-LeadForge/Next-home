import type { Metadata } from 'next';
import { GUIDES } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'Guide per gli Ospiti | NextHome',
  robots: { index: false, follow: false },
};

export default function GuideIndexPage() {
  return (
    <main className="guide-index-page">
      <div className="guide-index-header">
        <div className="guide-index-eyebrow">
          <div className="guide-index-eyebrow-line" />
          <span className="guide-index-eyebrow-text">NextHome Real Estate</span>
        </div>
        <h1 className="guide-index-title">Guide per gli Ospiti</h1>
        <p className="guide-index-intro">
          Benvenuti nelle nostre proprietà. Qui troverete la guida dedicata
          al vostro alloggio, con tutto ciò di cui avrete bisogno per un
          soggiorno sereno e piacevole. Selezionate la vostra struttura per
          accedere alle informazioni personalizzate.
        </p>
      </div>

      <div className="guide-cards-grid">
        {GUIDES.map((guide, i) => (
          <a
            key={guide.slug}
            href={`/guide-ospiti/${guide.slug}`}
            className="guide-card"
          >
            <span className="guide-card-number">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="guide-card-label">{guide.label}</span>
            <span className="guide-card-arrow" aria-hidden="true" />
          </a>
        ))}
      </div>
    </main>
  );
}
