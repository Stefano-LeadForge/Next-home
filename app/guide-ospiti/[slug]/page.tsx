import { cookies } from 'next/headers';
import { redirect, notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { findGuide, authCookieName } from '@/lib/guides';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const SECTIONS = [
  { id: 'checkin',    title: 'Check-in' },
  { id: 'parking',   title: 'Parcheggio / Parking' },
  { id: 'transport', title: 'Trasporti / Transports' },
  { id: 'numbers',   title: 'Numeri utili / Useful Numbers' },
];

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = findGuide(slug);
  if (!guide) notFound();

  const cookieStore = await cookies();
  if (cookieStore.get(authCookieName(slug))?.value !== 'ok') {
    redirect(`/guide-ospiti/${slug}/login`);
  }

  return (
    <main className="guide-content-page">

      <div className="guide-content-header">
        <div className="guide-content-eyebrow">
          <div className="guide-content-eyebrow-line" />
          <span className="guide-content-eyebrow-text">Guida per gli ospiti</span>
        </div>
        <h1 className="guide-content-title">Nome B&amp;B</h1>
        <p className="guide-content-welcome">
          Benvenuti nel vostro alloggio. Siamo lieti di avervi qui —
          questa guida raccoglie tutto ciò di cui avrete bisogno per un
          soggiorno sereno e senza pensieri. Per qualsiasi necessità,
          non esitate a contattarci.
        </p>
      </div>

      <div className="guide-divider" />

      <div className="guide-accordion-list">
        {SECTIONS.map((section) => (
          <details key={section.id} className="guide-accordion">
            <summary>
              <span>{section.title}</span>
              <span className="guide-accordion-icon" aria-hidden="true" />
            </summary>
            <div className="guide-accordion-body">
              <p>Contenuto da aggiungere.</p>
            </div>
          </details>
        ))}
      </div>

      <a href="/guide-ospiti" className="guide-back-link">
        ← Torna alle guide
      </a>

    </main>
  );
}
