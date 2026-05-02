import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { authCookieName } from '@/lib/guides';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const SLUG = 'guida-bb-2';

export default async function LovelyHomeNavigliPage() {
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
        <h1 className="guide-content-title">Lovely Home Navigli</h1>
        <p className="guide-content-subtitle">Alzaia Naviglio Pavese, 34 — Milano</p>
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
              <p className="guide-address-line">Alzaia Naviglio Pavese, 34 — Milano</p>
              <div className="guide-map-wrap">
                <iframe
                  title="Lovely Home Navigli — mappa"
                  src="https://www.google.com/maps?q=Alzaia+Naviglio+Pavese,+34,+Milano,+Italy&output=embed&z=17"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <figure className="guide-step-photo guide-step-photo--intro">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/guide/lovely-home-navigli/navigli1.jpg"
                alt="Ingresso del palazzo"
                loading="lazy"
              />
            </figure>

            <ol className="guide-steps">
              <li className="guide-step">
                <span className="guide-step-num">1</span>
                <div className="guide-step-text">
                  <p>Per aprire il portone esterno, comporre il codice <span className="guide-highlight">70</span>, premere il tasto <span className="guide-highlight">C</span> sulla tastiera del citofono e telefonare al <strong>+39 353 480 1695</strong>. Il portone si aprirà automaticamente. La telefonata è completamente gratuita e non è necessario avere credito.</p>
                  <p className="guide-step-en">To open the external door, dial code <span className="guide-highlight">70</span>, press the <span className="guide-highlight">C</span> key on the intercom keypad and call <strong>+39 353 480 1695</strong>. The door will open automatically. The call is completely free and does not require credit.</p>
                  <figure className="guide-step-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/lovely-home-navigli/navigli2.jpg"
                      alt="Tastiera citofono — codice 70 + C"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </li>
              <li className="guide-step">
                <span className="guide-step-num">2</span>
                <div className="guide-step-text">
                  <p>Attraversare il portico e girare a sinistra.</p>
                  <p className="guide-step-en">Cross the portico and turn left.</p>
                  <figure className="guide-step-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/lovely-home-navigli/navigli3.jpg"
                      alt="Portico — girare a sinistra"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </li>
              <li className="guide-step">
                <span className="guide-step-num">3</span>
                <div className="guide-step-text">
                  <p>Poi girare a destra.</p>
                  <p className="guide-step-en">Then turn right.</p>
                  <figure className="guide-step-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/lovely-home-navigli/navigli4.jpg"
                      alt="Corridoio — girare a destra"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </li>
              <li className="guide-step">
                <span className="guide-step-num">4</span>
                <div className="guide-step-text">
                  <p>Per aprire il portone interno, ripetere la stessa operazione del portone esterno: comporre il codice <span className="guide-highlight">70</span>, premere il tasto <span className="guide-highlight">C</span> e telefonare al <strong>+39 353 480 1695</strong>. Il portone si aprirà automaticamente. La telefonata è completamente gratuita e non è necessario avere credito.</p>
                  <p className="guide-step-en">To open the internal door, repeat the same procedure as for the external door: dial code <span className="guide-highlight">70</span>, press the <span className="guide-highlight">C</span> key and call <strong>+39 353 480 1695</strong>. The door will open automatically. The call is completely free and does not require credit.</p>
                  <figure className="guide-step-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/lovely-home-navigli/navigli5.jpg"
                      alt="Portone interno del palazzo"
                      loading="lazy"
                    />
                  </figure>
                  <figure className="guide-step-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/lovely-home-navigli/navigli6.jpg"
                      alt="Tastiera citofono portone interno"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </li>
              <li className="guide-step">
                <span className="guide-step-num">5</span>
                <div className="guide-step-text">
                  <p>Salire al <strong>1° piano</strong>. La porta dell&apos;appartamento è la <strong>seconda</strong>. Per recuperare le chiavi, aprire la keybox: codice <span className="guide-highlight">1020</span>.</p>
                  <p className="guide-step-en">Go up to the <strong>1st floor</strong>. The apartment door is the <strong>second</strong>. To retrieve the keys, open the keybox: code <span className="guide-highlight">1020</span>.</p>
                  <figure className="guide-step-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/lovely-home-navigli/navigli7.jpg"
                      alt="Porta dell'appartamento con keybox"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </li>
              <li className="guide-step">
                <span className="guide-step-num">6</span>
                <div className="guide-step-text">
                  <p>La porta ha <strong>due serrature</strong>.</p>
                  <p className="guide-step-en">The door has <strong>two locks</strong>.</p>
                  <figure className="guide-step-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/guide/lovely-home-navigli/navigli8.jpg"
                      alt="Porta con due serrature"
                      loading="lazy"
                    />
                  </figure>
                  <p className="guide-note">⚠ Vi chiediamo di richiudere sempre la porta a chiave quando uscite dall&apos;appartamento. Per chiudere la serratura in basso, tirare su la maniglia, attendere il click, poi girare la chiave. / We kindly ask you to always lock the door when leaving. To lock the lower lock, pull the handle up, wait for the click, then turn the key.</p>
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

        {/* ── ISTRUZIONI / INSTRUCTIONS ── */}
        <details className="guide-accordion">
          <summary>
            <span>Istruzioni / Instructions</span>
            <span className="guide-accordion-icon" aria-hidden="true" />
          </summary>
          <div className="guide-accordion-body">

            <div className="guide-info-section">
              <p className="guide-info-title">☕ Macchina del caffè Nespresso / Nespresso coffee machine</p>
              <figure className="guide-step-photo guide-step-photo--intro">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/guide/lovely-home-navigli/Guida1.png"
                  alt="Riempire il contenitore con acqua"
                  loading="lazy"
                />
              </figure>
              <p>Riempire il contenitore con acqua <em>non gasata</em>.</p>
              <p className="guide-step-en">Fill the container with still water.</p>
              <figure className="guide-step-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/guide/lovely-home-navigli/Guida2.png"
                  alt="Inserire la capsula Nespresso"
                  loading="lazy"
                />
              </figure>
              <p>Sollevare il coperchio — inserire la capsula — richiudere il coperchio.</p>
              <p className="guide-step-en">Lift the lid — insert the capsule — close the lid.</p>
              <figure className="guide-step-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/guide/lovely-home-navigli/Guida3.png"
                  alt="Tasti A e B della Nespresso"
                  loading="lazy"
                />
              </figure>
              <p>Una volta che i tasti smetteranno di lampeggiare e ci sarà una luce verde fissa, premere il tasto <span className="guide-highlight">A</span> per un caffè ristretto, <span className="guide-highlight">B</span> per un caffè lungo.</p>
              <p className="guide-step-en">Once the buttons stop flashing and a steady green light appears, press <span className="guide-highlight">A</span> for a ristretto, <span className="guide-highlight">B</span> for a lungo.</p>
            </div>

            <div className="guide-info-section">
              <p className="guide-info-title">🍳 Piano cottura ad induzione / Induction hob</p>
              <figure className="guide-step-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/guide/lovely-home-navigli/Guida4.png"
                  alt="Piano cottura ad induzione — tasti A, B, C"
                  loading="lazy"
                />
              </figure>
              <p>Usare il tasto <span className="guide-highlight">A</span> per accendere e spegnere il piano cottura. Usare i tasti <span className="guide-highlight">B</span> per selezionare la piastra. Usare il tasto <span className="guide-highlight">C</span> per regolare la potenza. (Si consiglia di non superare il livello 7.)</p>
              <p className="guide-step-en">Use button <span className="guide-highlight">A</span> to turn the hob on/off. Use buttons <span className="guide-highlight">B</span> to select the hotplate. Use button <span className="guide-highlight">C</span> to adjust power. (We recommend not exceeding level 7.)</p>
            </div>

            <div className="guide-info-section">
              <p className="guide-info-title">🔥 Forno / Oven</p>
              <figure className="guide-step-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/guide/lovely-home-navigli/Guida5.png"
                  alt="Forno — manopola sinistra e destra"
                  loading="lazy"
                />
              </figure>
              <p>Ruotare la manopola di <strong>sinistra</strong> per accendere/spegnere e selezionare il tipo di cottura. Ruotare la manopola di <strong>destra</strong> per regolare la temperatura.</p>
              <p className="guide-step-en">Turn the <strong>left</strong> knob to turn on/off and select the cooking mode. Turn the <strong>right</strong> knob to adjust the temperature.</p>
            </div>

            <div className="guide-info-section">
              <p className="guide-info-title">👕 Lavatrice / Washing machine</p>
              <figure className="guide-step-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/guide/lovely-home-navigli/Guida6.png"
                  alt="Lavatrice — manopola programmi"
                  loading="lazy"
                />
              </figure>
              <p>Ruotare la manopola per selezionare il programma di lavaggio.</p>
              <p className="guide-step-en">Turn the knob to select the washing program: A Quick · B Quick · C Jeans/Dark · D Down jackets · E Synthetic · F Hand wash · G Centrifuge · H Cotton · I Ecological · L Cotton prewash · M Cotton · N Colorful · O Wool · P Rinse.</p>
            </div>

            <div className="guide-info-section">
              <p className="guide-info-title">🍽 Lavastoviglie / Dishwasher</p>
              <figure className="guide-step-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/guide/lovely-home-navigli/Guida7.png"
                  alt="Lavastoviglie — interruttore accensione"
                  loading="lazy"
                />
              </figure>
              <p>Per utilizzare la lavastoviglie, assicurarsi che l&apos;interruttore vicino alla presa della macchina del caffè sia sull&apos;<span className="guide-highlight">1</span>.</p>
              <p className="guide-step-en">To use the dishwasher, make sure the switch near the coffee machine socket is on <span className="guide-highlight">1</span>.</p>
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
