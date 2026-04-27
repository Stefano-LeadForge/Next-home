'use client';

import { useEffect, useRef } from 'react';
import HomeSections from './home-sections';
import { useLenis } from '@/components/SmoothScrolling';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function HomePage() {
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const lenisCtx = useLenis();
  const lenisRef = useRef(lenisCtx);
  lenisRef.current = lenisCtx; // always current inside effect closures

  useEffect(() => {
    const scrollCue = scrollCueRef.current;
    if (!scrollCue) return;
    const cue = scrollCue; // const alias — TS can't narrow refs through closures

    /* ── REDUCED MOTION: skip all animations ── */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(['#nav', '#eyebrow', '#title', '#ctas', '#mediaCard'], {
        opacity: 1, y: 0, clearProps: 'transform',
      });
      cue.classList.add('visible');
      return;
    }

    /* ── ENTRANCE TIMELINE ── */
    const enter = gsap.timeline({ defaults: { ease: 'power3.out' } });
    enter
      .to('#nav',       { opacity: 1, y: 0, duration: 0.9 })
      .to('#eyebrow',   { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
      .to('#title',     { opacity: 1, y: 0, duration: 1.0 }, '-=0.5')
      .to('#ctas',      { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
      .to('#mediaCard', { opacity: 1, duration: 0.6 }, '-=0.3')
      .to('#scrollCue', { opacity: 1, duration: 0.5 }, '-=0.1');
    enter.add(() => { cue.classList.add('visible'); }, '+=0.3');

    /* ═══════════════════════════════════════════════════
       SCROLL MEDIA EXPANSION — responsive via matchMedia
       Desktop: card centered in right half → fullscreen
       Mobile:  card in lower half → fullscreen
    ═══════════════════════════════════════════════════ */
    const card       = document.getElementById('mediaCard');
    const imgOverlay = document.getElementById('imgOverlay');
    const wallText   = document.getElementById('wallText');

    const mm = gsap.matchMedia();

    function buildExpandTl(scrub: number, wallDelay: number) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: '+=120%',
          scrub,
          onUpdate: (self) => {
            if (self.progress > 0.02) cue.classList.remove('visible');
            else                      cue.classList.add('visible');
          },
        },
      });

      tl
        /* card expands to fullscreen */
        .to(card, {
          width: '100%', height: '100%',
          top: 0, left: 0,
          xPercent: 0, yPercent: 0,
          x: 0, y: 0,
          borderRadius: 0,
          ease: 'power2.inOut',
          duration: 0.6,
          force3D: true,
        }, 0)
        /* dissolve UI */
        .to('#eyebrow',  { opacity: 0, y: -12, duration: 0.35, ease: 'power2.in', force3D: true }, 0)
        .to('#title',    { opacity: 0, y: -12, duration: 0.35, ease: 'power2.in', force3D: true }, 0.04)
        .to('#ctas',     { opacity: 0, y: -12, duration: 0.28, ease: 'power2.in', force3D: true }, 0.12)
        .to('#scrollCue',{ opacity: 0, duration: 0.2,  ease: 'power2.in' }, 0)
        /* overlay settles */
        .to(imgOverlay,  { opacity: 1, duration: 0.2, ease: 'power1.out' }, 0.6)
        /* wall text once fully fullscreen */
        .to(wallText,    { opacity: 1, duration: 0.3, ease: 'power2.out' }, wallDelay);

      return () => tl.kill();
    }

    /* desktop: lower scrub matches Lenis lerp timing → consistent feel page-wide */
    mm.add('(min-width: 769px)', () => {
      const cleanupExpand = buildExpandTl(0.5, 0.62);
      const exitTween = gsap.to('#heroWrap', {
        y: () => -window.innerHeight * 0.45,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#nextSection',
          start: 'top bottom',
          end: 'top 55%',
          scrub: 0.4,
          invalidateOnRefresh: true,
        },
      });
      return () => { cleanupExpand(); exitTween.kill(); };
    });
    /* mobile: keep original scrub values — mobile feel is already correct */
    mm.add('(max-width: 768px)', () => {
      const cleanupExpand = buildExpandTl(1.5, 0.75);
      const exitTween = gsap.to('#heroWrap', {
        y: () => -window.innerHeight * 0.45,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#nextSection',
          start: 'top bottom',
          end: 'top 55%',
          scrub: 1.0,
          invalidateOnRefresh: true,
        },
      });
      return () => { cleanupExpand(); exitTween.kill(); };
    });

    /* ── NAV SOLID BACKGROUND after 50px scroll ── */
    const navEl = document.getElementById('nav');
    function onNavScroll() {
      navEl?.classList.toggle('nav--solid', window.scrollY > 50);
    }
    window.addEventListener('scroll', onNavScroll, { passive: true });
    onNavScroll(); // apply immediately if page loads already scrolled

    /* ── RECALC on resize ── */
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    /* ── SCROLL TO FULLSCREEN helper ── */
    function scrollToFullscreen(e: Event) {
      e.preventDefault();
      const target = window.innerHeight * 1.2;
      const lenis = lenisRef.current;
      if (lenis) {
        lenis.scrollTo(target, { duration: 3.6, easing: (x: number) => x });
      } else {
        gsap.to(window, { scrollTo: { y: target, autoKill: false }, duration: 3.6, ease: 'none' });
      }
    }

    const ctaBtn  = document.getElementById('ctaScroll');
    const navLink = document.getElementById('navNH360');
    ctaBtn?.addEventListener('click', scrollToFullscreen);
    navLink?.addEventListener('click', scrollToFullscreen);

    /* ── MOBILE MENU ── */
    const hamburgerEl   = document.getElementById('hamburger');
    const mobileMenuEl  = document.getElementById('mobileMenu');
    const mobileLinks   = mobileMenuEl ? Array.from(mobileMenuEl.querySelectorAll('a')) : [];
    let menuOpen        = false;

    function openMenu() {
      menuOpen = true;
      hamburgerEl?.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      if (mobileMenuEl) mobileMenuEl.style.pointerEvents = 'auto';
      gsap.to(mobileMenuEl, { opacity: 1, duration: 0.35, ease: 'power2.out' });
      gsap.fromTo(
        mobileLinks,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: 'power3.out', delay: 0.18 }
      );
    }

    function closeMenu(cb?: () => void) {
      menuOpen = false;
      hamburgerEl?.classList.remove('is-open');
      document.body.style.overflow = '';
      gsap.to(mobileLinks, { opacity: 0, y: 16, duration: 0.22, ease: 'power2.in', stagger: 0.04 });
      gsap.to(mobileMenuEl, {
        opacity: 0, duration: 0.28, delay: 0.18, ease: 'power2.in',
        onComplete: () => {
          if (mobileMenuEl) mobileMenuEl.style.pointerEvents = 'none';
          cb?.();
        },
      });
    }

    function onHamburgerClick() { menuOpen ? closeMenu() : openMenu(); }
    hamburgerEl?.addEventListener('click', onHamburgerClick);

    /* NH360 mobile — close menu then scroll */
    function onMobileNH360Click(e: Event) {
      e.preventDefault();
      closeMenu(() => {
        const target = window.innerHeight * 1.2;
        const lenis = lenisRef.current;
        if (lenis) {
          lenis.scrollTo(target, { duration: 3.6, easing: (x: number) => x });
        } else {
          gsap.to(window, { scrollTo: { y: target, autoKill: false }, duration: 3.6, ease: 'none' });
        }
      });
    }
    const mobileNH360 = document.getElementById('mobileNavNH360');
    mobileNH360?.addEventListener('click', onMobileNH360Click);

    const cueTimer = setTimeout(() => { cue.classList.add('visible'); }, 1800);

    return () => {
      mm.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener('scroll', onNavScroll);
      window.removeEventListener('resize', onResize);
      ctaBtn?.removeEventListener('click', scrollToFullscreen);
      navLink?.removeEventListener('click', scrollToFullscreen);
      hamburgerEl?.removeEventListener('click', onHamburgerClick);
      mobileNH360?.removeEventListener('click', onMobileNH360Click);
      document.body.style.overflow = '';
      clearTimeout(cueTimer);
    };
  }, []);

  return (
    <div className="home-page">
      {/* ══ FIXED NAV — outside heroWrap so position:fixed works correctly ══ */}
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
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
        <a href="/valuta-casa" className="nav-btn">Valuta la tua casa</a>
        <button className="hamburger" id="hamburger" aria-label="Apri menu">
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* ══ MOBILE MENU OVERLAY ══ */}
      <div className="mobile-menu" id="mobileMenu">
        <ul className="mobile-menu-list">
          <li><a href="#" className="mobile-menu-link" id="mobileNavNH360">Next Home 360</a></li>
          <li><a href="/portfolio" className="mobile-menu-link">Portfolio</a></li>
          <li><a href="/blog" className="mobile-menu-link">Blog</a></li>
        </ul>
        <div className="mobile-menu-divider" />
        <a href="/valuta-casa" className="mobile-menu-cta-link">Valuta la tua casa</a>
      </div>

      {/* ══ STICKY HERO ══ */}
      <div className="hero-sticky-wrap" id="heroWrap">

        <div className="hero-bg" />

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
                al tuo passato, <br />
                per offrirti un <br />
                <em>futuro ideale.</em>
              </h1>
              <div className="hero-cta-group" id="ctas">
                <a href="#" className="hero-scroll-arrow" id="ctaScroll" aria-label="Scopri Next Home 360">
                  <span className="hero-scroll-arrow-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MEDIA EXPANSION — responsive image source */}
        <div className="media-expand-wrap" id="mediaCard">
          <picture>
            <source media="(max-width: 768px)" srcSet="/hero-mobile.png" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="media-img"
              style={{ objectPosition: 'center 40%' }}
              src="/hero.jpg"
              alt="Proprietà luxury Milano"
            />
          </picture>
          <div className="media-overlay" id="imgOverlay" />
          <div className="nh360-wall-text" id="wallText">
            <span className="nh360-wall-title">Next Home 360</span>
            <span className="nh360-wall-sub">
              L&apos;unico servizio che massimizza il valore della tua casa
            </span>
            <a href="#" className="nh360-wall-btn">
              <span>Scopri Next Home 360</span>
              <span className="arr" />
            </a>
          </div>
        </div>

        {/* SCROLL CUE */}
        <div className="scroll-cue" id="scrollCue" ref={scrollCueRef}>
          <span className="scroll-cue-text">Scorri</span>
          <div className="scroll-cue-line" />
        </div>

      </div>
      {/* /sticky hero */}

      <HomeSections />
    </div>
  );
}
