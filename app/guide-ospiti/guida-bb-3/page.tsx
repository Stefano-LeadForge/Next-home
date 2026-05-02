import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { authCookieName } from '@/lib/guides';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const SLUG = 'guida-bb-3';

export default async function OpenSpaceLambratePage() {
  const cookieStore = await cookies();
  if (cookieStore.get(authCookieName(SLUG))?.value !== 'ok') {
    redirect(`/guide-ospiti/${SLUG}/login`);
  }

  return (
    <main className="guide-content-page">

      <div className="guide-content-header">
        <div className="guide-content-eyebrow">
          <div className="guide-content-eyebrow-line" />
          <span className="guide-content-eyebrow-text">Guida per gli ospiti</span>
        </div>
        <h1 className="guide-content-title">Open Space Lambrate</h1>
        <p className="guide-content-subtitle">Via Caduti di Marcinelle, 14 — Milano</p>
        <p className="guide-content-welcome">
          Benvenuti nel vostro alloggio. Siamo lieti di avervi qui —
          questa guida raccoglie tutto ciò di cui avrete bisogno per un
          soggiorno sereno e senza pensieri. Per qualsiasi necessità,
          non esitate a contattarci.
        </p>
      </div>

      <div className="guide-divider" />

      <div className="guide-accordion-list">

        {/* ── CHECK-IN ── */}
        <details className="guide-accordion">
          <summary>
            <span>Check-in</span>
            <span className="guide-accordion-icon" aria-hidden="true" />
          </summary>
          <div className="guide-accordion-body">

            <div className="guide-address-block">
              <p className="guide-address-line">Via Caduti di Marcinelle, 14 — Milano</p>
              <div className="guide-map-wrap">
                <iframe
                  title="Open Space Lambrate — mappa"
                  src="https://www.google.com/maps?q=Via+Caduti+di+Marcinelle,+14,+Milano,+Italy&output=embed&z=17"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <figure className="guide-step-photo guide-step-photo--intro">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/guide/open-space-lambrate/Lambrate1.jpg"
                alt="Ingresso del palazzo"
                loading="lazy"
              />
            </figure>

            <ol className="guide-steps">
              <li className="guide-step">
                <span className="guide-step-num">1</span>
                <div className="guide-step-text">
                  <p>Una volta arrivati all&apos;indirizzo, per recuperare le chiavi, proseguire per <strong>100 metri</strong>. Troverete una keybox attaccata ad un palo.</p>
                  <p className="guide-step-en">Once you arrive at the address, to retrieve your keys, continue for <strong>100 meters</strong>. You will find a keybox attached to a pole.</p>
                  <figure className="guide-step-photo guide-step-photo--wide">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/open-space-lambrate/Lambrate2.jpg"
                      alt="Keybox attaccata ad un palo"
                      loading="lazy"
                    />
                  </figure>
                  <figure className="guide-step-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/open-space-lambrate/Lambrate3.jpg"
                      alt="Keybox — vista frontale"
                      loading="lazy"
                    />
                  </figure>
                  <figure className="guide-step-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/open-space-lambrate/Lambrate4.jpg"
                      alt="Keybox — dettaglio"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </li>
              <li className="guide-step">
                <span className="guide-step-num">2</span>
                <div className="guide-step-text">
                  <p>Aprire la keybox con il codice <span className="guide-highlight">5588</span>.</p>
                  <p className="guide-step-en">Open the keybox using code <span className="guide-highlight">5588</span>.</p>
                  <figure className="guide-step-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/open-space-lambrate/Lambrate5.jpg"
                      alt="Apertura keybox — codice 5588"
                      loading="lazy"
                    />
                  </figure>
                  <figure className="guide-step-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/open-space-lambrate/Lambrate6.jpg"
                      alt="Chiavi all'interno della keybox"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </li>
              <li className="guide-step">
                <span className="guide-step-num">3</span>
                <div className="guide-step-text">
                  <p>Una volta recuperate le chiavi, aprire il cancello e girare a destra.</p>
                  <p className="guide-step-en">Once you have collected the keys, open the gate and turn right.</p>
                  <figure className="guide-step-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/open-space-lambrate/Lambrate7.jpg"
                      alt="Cancello di ingresso"
                      loading="lazy"
                    />
                  </figure>
                  <figure className="guide-step-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/open-space-lambrate/Lambrate8.jpg"
                      alt="Cortile — girare a destra"
                      loading="lazy"
                    />
                  </figure>
                  <figure className="guide-step-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/open-space-lambrate/Lambrate9.jpg"
                      alt="Cortile interno"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </li>
              <li className="guide-step">
                <span className="guide-step-num">4</span>
                <div className="guide-step-text">
                  <p>Una volta arrivati in cortile, girare a destra.</p>
                  <p className="guide-step-en">Once you reach the courtyard, turn right.</p>
                  <figure className="guide-step-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/open-space-lambrate/Lambrate10.jpg"
                      alt="Cortile — indicazione destra"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </li>
              <li className="guide-step">
                <span className="guide-step-num">5</span>
                <div className="guide-step-text">
                  <p>Prendere l&apos;ascensore e salire al <strong>5° piano</strong>.</p>
                  <p className="guide-step-en">Take the elevator and go up to the <strong>5th floor</strong>.</p>
                  <figure className="guide-step-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/open-space-lambrate/Lambrate11.jpg"
                      alt="Ascensore del palazzo"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </li>
              <li className="guide-step">
                <span className="guide-step-num">6</span>
                <div className="guide-step-text">
                  <p>La porta dell&apos;appartamento si trova di fronte alla porta dell&apos;ascensore.</p>
                  <p className="guide-step-en">The apartment door is located opposite the elevator door.</p>
                </div>
              </li>
            </ol>

          </div>
        </details>

        {/* ── PARCHEGGIO / PARKING ── */}
        <details className="guide-accordion">
          <summary>
            <span>Parcheggio / Parking</span>
            <span className="guide-accordion-icon" aria-hidden="true" />
          </summary>
          <div className="guide-accordion-body">

            <p>L&apos;Alzaia Naviglio Pavese non rientra nell&apos;Area C di Milano — è necessario acquistare il ticket per Area C o B per parcheggiare su strada.</p>
            <p className="guide-step-en">The Alzaia Naviglio Pavese does not fall within Milan&apos;s Area C — you must purchase a ticket for Area C or B to park on the street.</p>

            <div className="guide-info-section">
              <p className="guide-info-title">🅿 Strisce blu / Blue lines</p>
              <p>Tariffa indicativa ~€2,40/h. Lunedì–sabato 8:00–19:00 a pagamento; domenica, festivi e dopo le 19:00 gratuito.</p>
              <p className="guide-step-en">Indicative rate ~€2.40/h. Monday–Saturday 8:00–19:00 paid; Sundays, holidays and after 19:00 free.</p>
              <p>Strisce bianche gratuite in Via Rimini e Via Savona (max 2h — verificare la segnaletica). / Free white lines in Via Rimini and Via Savona (max 2h — check signs).</p>
              <p className="guide-note">⚠ Non parcheggiare sulle strisce gialle — riservate ai residenti. / Do not park on yellow lines — reserved for residents.</p>
            </div>

            <div className="guide-info-section">
              <p className="guide-info-title">🅿 Parcheggi custoditi / Guarded parking</p>
              <div className="guide-parking-grid">
                <div className="guide-parking-item">
                  <p className="guide-parking-name">Naviglio Parking</p>
                  <p className="guide-parking-detail">Via G. Meda 8 · 450 m a piedi · custodito h24</p>
                  <a href="tel:+390286461689" className="guide-parking-tel">02 864 61689</a>
                </div>
                <div className="guide-parking-item">
                  <p className="guide-parking-name">Darsena Parking</p>
                  <p className="guide-parking-detail">Via Trincea Delle Frasche 3 · 700 m a piedi</p>
                  <a href="tel:+390258101371" className="guide-parking-tel">02 581 01371</a>
                </div>
              </div>
            </div>

          </div>
        </details>

        {/* ── TRASPORTI / TRANSPORTS ── */}
        <details className="guide-accordion">
          <summary>
            <span>Trasporti / Transports</span>
            <span className="guide-accordion-icon" aria-hidden="true" />
          </summary>
          <div className="guide-accordion-body">

            <div className="guide-route">
              <p className="guide-route-header">
                <span className="guide-route-icon">✈️</span>
                <span>Aeroporto di Linate / Linate Airport</span>
              </p>
              <ol className="guide-route-steps">
                <li><strong>M4</strong> direzione San Cristoforo → fermata <strong>Coni Zugna</strong></li>
                <li><strong>Bus 10</strong> da Viale Coni Zugna / Via Foppa → fermata <strong>Piazza 24 Maggio</strong></li>
                <li>A piedi 550 m fino all&apos;appartamento / On foot 550 m to the apartment</li>
              </ol>
            </div>

            <div className="guide-route">
              <p className="guide-route-header">
                <span className="guide-route-icon">✈️</span>
                <span>Aeroporto di Malpensa / Malpensa Airport</span>
              </p>
              <ol className="guide-route-steps">
                <li><strong>Malpensa Express</strong> direzione Cadorna → fermata <strong>Cadorna</strong></li>
                <li><strong>M2</strong> direzione Assago Milanofiori → fermata <strong>Porta Genova</strong></li>
                <li>A piedi 1 km fino all&apos;appartamento / On foot 1 km to the apartment</li>
              </ol>
            </div>

            <div className="guide-route">
              <p className="guide-route-header">
                <span className="guide-route-icon">✈️</span>
                <span>Aeroporto di Orio al Serio / Orio al Serio Airport</span>
              </p>
              <ol className="guide-route-steps">
                <li><strong>Navetta</strong> (Flixbus / Terravision / Flibco) → <strong>Stazione Centrale</strong></li>
                <li><strong>M2</strong> direzione Abbiategrasso → fermata <strong>Porta Genova</strong></li>
                <li>A piedi 1 km fino all&apos;appartamento / On foot 1 km to the apartment</li>
              </ol>
            </div>

            <div className="guide-route">
              <p className="guide-route-header">
                <span className="guide-route-icon">🚊</span>
                <span>Stazione Centrale / Central Station</span>
              </p>
              <ol className="guide-route-steps">
                <li><strong>M2</strong> direzione Abbiategrasso → fermata <strong>Porta Genova</strong></li>
                <li>A piedi 1 km fino all&apos;appartamento / On foot 1 km to the apartment</li>
              </ol>
            </div>

            <p className="guide-transport-note">
              Biglietti: alle edicole, nelle metropolitane o online su{' '}
              <a href="https://www.atm.it" target="_blank" rel="noopener noreferrer">atm.it</a>
              {' '}e{' '}
              <a href="https://www.trenord.it" target="_blank" rel="noopener noreferrer">trenord.it</a>.
            </p>

            <div className="guide-info-section">
              <p className="guide-info-title">🚕 Trasporto privato / Private transport</p>
              <div className="guide-contact-list">
                <div className="guide-contact-item">
                  <span className="guide-contact-name">Francesco</span>
                  <a href="tel:+393474975840" className="guide-contact-tel">+39 347 497 5840</a>
                  <span className="guide-contact-note">Chiamare per i prezzi / Call for pricing</span>
                </div>
              </div>
            </div>

            <div className="guide-info-section">
              <p className="guide-info-title">🚕 Taxi</p>
              <div className="guide-contact-list">
                <div className="guide-contact-item">
                  <span className="guide-contact-name">Radiotaxi Milano</span>
                  <a href="tel:026969" className="guide-contact-tel">02 6969</a>
                </div>
                <div className="guide-contact-item">
                  <span className="guide-contact-name">Taxiblu</span>
                  <a href="tel:024040" className="guide-contact-tel">02 4040</a>
                </div>
                <div className="guide-contact-item">
                  <span className="guide-contact-name">Taxi Milano</span>
                  <a href="tel:028585" className="guide-contact-tel">02 8585</a>
                </div>
              </div>
            </div>

          </div>
        </details>

        {/* ── NUMERI UTILI / USEFUL NUMBERS ── */}
        <details className="guide-accordion">
          <summary>
            <span>Numeri utili / Useful Numbers</span>
            <span className="guide-accordion-icon" aria-hidden="true" />
          </summary>
          <div className="guide-accordion-body">
            <div className="guide-number-list">
              <div className="guide-number-item">
                <span className="guide-number-val">112</span>
                <span className="guide-number-label">Numero unico di emergenza / European emergency number</span>
              </div>
            </div>
          </div>
        </details>

      </div>

      <a href="/guide-ospiti" className="guide-back-link">
        ← Torna alle guide
      </a>

    </main>
  );
}
