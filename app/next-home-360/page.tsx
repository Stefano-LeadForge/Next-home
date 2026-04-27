'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

export default function NextHome360Page() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl
      .from('.inner-hero-eyebrow',  { opacity: 0, y: 16, duration: 0.7 })
      .from('.inner-hero-title',    { opacity: 0, y: 24, duration: 0.9 }, '-=0.45')
      .from('.inner-hero-subtitle', { opacity: 0, y: 16, duration: 0.8 }, '-=0.55')
      .from('.nh360-cs-block',      { opacity: 0, y: 14, duration: 0.7 }, '-=0.4');

    return () => { tl.kill(); };
  }, []);

  return (
    <main className="nh360-page">
      <div className="inner-hero">
        <div className="inner-hero-eyebrow">
          <div className="inner-hero-eyebrow-line" />
          <span>Il nostro servizio esclusivo</span>
        </div>
        <h1 className="inner-hero-title">Next Home 360</h1>
        <p className="inner-hero-subtitle">
          Un approccio completo alla vendita e alla valorizzazione del tuo immobile —
          dalla consulenza strategica fino alla firma del rogito.
        </p>
        <div className="nh360-cs-block">
          <span className="nh360-cs-label">Coming Soon</span>
          <p className="nh360-cs-text">
            Stiamo preparando qualcosa di straordinario.<br />
            Torna presto per scoprire tutto su Next Home 360.
          </p>
        </div>
      </div>
    </main>
  );
}
