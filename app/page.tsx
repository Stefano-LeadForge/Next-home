'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function HomePage() {
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollCue = scrollCueRef.current;
    if (!scrollCue) return;

    /* ── ENTRANCE TIMELINE ── */
    const enter = gsap.timeline({ defaults: { ease: 'power3.out' } });
    enter
      .to('#nav',       { opacity: 1, y: 0, duration: 0.9 })
      .to('#eyebrow',   { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
      .to('#title',     { opacity: 1, y: 0, duration: 1.0 }, '-=0.5')
      .to('#ctas',      { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
      .to('#mediaCard', { opacity: 1, duration: 0.6 }, '-=0.3')
      .to('#scrollCue', { opacity: 1, duration: 0.5 }, '-=0.1');

    /* ═══════════════════════════════════════════════════
       SCROLL MEDIA EXPANSION
       Image expands from small card → fullscreen.
       All UI except logo fades out during expansion.
       "Next Home 360" wall text fades in at fullscreen.
    ═══════════════════════════════════════════════════ */
    const card       = document.getElementById('mediaCard');
    const imgOverlay = document.getElementById('imgOverlay');
    const wallText   = document.getElementById('wallText');

    const expandTl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: '+=120%',
        scrub: 1.2,
        onUpdate: (self) => {
          if (self.progress > 0.02) scrollCue.classList.remove('visible');
          else                      scrollCue.classList.add('visible');
        },
      },
    });

    expandTl
      /* Phase 1 (0→60%): card expands to fullscreen */
      .to(card, {
        width: '100%', height: '100%',
        top: 0, left: 0,
        xPercent: 0, yPercent: 0,
        x: 0, y: 0,
        borderRadius: 0,
        ease: 'power2.inOut',
        duration: 0.6,
      }, 0)
      /* Phase 1: dissolve all UI except logo */
      .to('#eyebrow',  { opacity: 0, y: -12, duration: 0.35, ease: 'power2.in' }, 0)
      .to('#title',    { opacity: 0, y: -12, duration: 0.35, ease: 'power2.in' }, 0.04)
      .to('#ctas',     { opacity: 0, y: -12, duration: 0.28, ease: 'power2.in' }, 0.12)
      .to('#scrollCue',{ opacity: 0,         duration: 0.2,  ease: 'power2.in' }, 0)
      .to('.nav-links',{ opacity: 0,         duration: 0.25, ease: 'power2.in' }, 0.02)
      .to('.nav-btn',  { opacity: 0,         duration: 0.25, ease: 'power2.in' }, 0.02)
      /* Phase 2 (60→80%): dark overlay settles on image */
      .to(imgOverlay,  { opacity: 1, duration: 0.2, ease: 'power1.out' }, 0.6)
      /* Phase 3 (80→100%): wall text fades in */
      .to(wallText,    { opacity: 1, duration: 0.3, ease: 'power2.out' }, 0.62);

    /* Show scroll cue after entrance completes */
    enter.add(() => { scrollCue.classList.add('visible'); }, '+=0.3');

    /* ── POST-EXPAND REVEAL ── */
    gsap.to('#postExpand', {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: {
        trigger: '#postExpand',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    /* ── RECALC on resize ── */
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    /* ── SCROLL TO FULLSCREEN helper ── */
    function scrollToFullscreen(e: Event) {
      e.preventDefault();
      const target = window.innerHeight * 1.2;
      gsap.to(window, {
        scrollTo: { y: target, autoKill: false },
        duration: 3.6,
        ease: 'none',
      });
    }

    const ctaBtn  = document.getElementById('ctaScroll');
    const navLink = document.getElementById('navNH360');
    ctaBtn?.addEventListener('click', scrollToFullscreen);
    navLink?.addEventListener('click', scrollToFullscreen);

    /* Initial scroll cue */
    const cueTimer = setTimeout(() => { scrollCue.classList.add('visible'); }, 1800);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener('resize', onResize);
      ctaBtn?.removeEventListener('click', scrollToFullscreen);
      navLink?.removeEventListener('click', scrollToFullscreen);
      clearTimeout(cueTimer);
    };
  }, []);

  return (
    <>
      {/* ══ STICKY HERO ══ */}
      <div className="hero-sticky-wrap" id="heroWrap">

        <div className="hero-bg" />

        {/* NAV */}
        <nav id="nav">
          <div className="logo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo-icon" src="/logo.png" alt="NextHome logo" />
            <div className="logo-divider" />
            <div className="logo-text">
              <span className="logo-main">NextHome</span>
              <span className="logo-sub">Real Estate</span>
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="#" id="navNH360">Next Home 360</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Chi siamo</a></li>
          </ul>
          <a href="#" className="nav-btn">Valuta la tua casa</a>
        </nav>

        {/* HERO TEXT */}
        <div className="hero-inner">
          <div className="hero-top">
            <div className="hero-text-block">
              <div className="hero-eyebrow" id="eyebrow">
                <div className="eyebrow-line" />
                <span className="eyebrow-text">La tua agenzia immobiliare di fiducia</span>
              </div>
              <h1 className="hero-title" id="title">
                Diamo valore <br /> 
                al tuo passato,  <br />
                per offrirti un  <br />
                <em>futuro ideale.</em>
              </h1>
              <div className="hero-cta-group" id="ctas">
                <a href="#" className="cta-primary" id="ctaScroll">
                  <span>Scopri Next Home 360</span>
                  <span className="arr" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MEDIA EXPANSION */}
        <div className="media-expand-wrap" id="mediaCard">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="media-img"
            style={{ objectPosition: 'center 40%' }}
            src="/hero.jpg"
            alt="Proprietà luxury Milano"
          />
          <div className="media-overlay" id="imgOverlay" />
          <div className="nh360-wall-text" id="wallText">
            <span className="nh360-wall-title">Next Home 360</span>
            <span className="nh360-wall-sub">
              L&apos;unico servizio che massimizza il valore della tua casa
            </span>
          </div>
        </div>

        {/* SCROLL CUE */}
        <div className="scroll-cue" id="scrollCue" ref={scrollCueRef}>
          <span className="scroll-cue-text">Scorri</span>
          <div className="scroll-cue-line" />
        </div>

      </div>
      {/* /sticky hero */}

      {/* ══ POST-EXPAND CONTENT ══ */}
      <div className="post-expand" id="postExpand">
        <div className="post-expand-eyebrow">Il nostro portfolio</div>
        <h2 className="post-expand-title">
          Residenze selezionate<br />
          per chi non <em>scende a compromessi.</em>
        </h2>
      </div>
    </>
  );
}
