'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

export default function StaticNav() {
  const pathname = usePathname();
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close on outside click
  useEffect(() => {
    function onOutsideClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPortfolioOpen(false);
      }
    }
    document.addEventListener('mousedown', onOutsideClick);
    return () => document.removeEventListener('mousedown', onOutsideClick);
  }, []);

  // Close on route change
  useEffect(() => {
    setPortfolioOpen(false);
  }, [pathname]);

  if (pathname === '/') return null;

  return (
    <header className="static-header">
      {/* Logo */}
      <a href="/" className="static-header-logo" aria-label="Torna alla home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="NextHome logo" className="static-header-logo-img" />
        <div className="static-header-logo-divider" />
        <div className="static-header-logo-text">
          <span className="static-header-logo-main">NextHome</span>
          <span className="static-header-logo-sub">Real Estate</span>
        </div>
      </a>

      {/* Nav links — hidden on mobile (hamburger menu handles it) */}
      <div className="static-nav-right">
        <ul className="static-nav-links">
          {/* Portfolio with dropdown */}
          <li
            ref={dropdownRef}
            className={`nav-has-dropdown${portfolioOpen ? ' is-open' : ''}`}
          >
            <button
              className="static-nav-link nav-dropdown-trigger"
              onClick={() => setPortfolioOpen((o) => !o)}
              aria-expanded={portfolioOpen}
              aria-haspopup="true"
            >
              Portfolio
              <span className="nav-chevron">
                <ChevronDown size={11} strokeWidth={1.5} />
              </span>
            </button>
            <div className="nav-dropdown">
              <a href="/portfolio" className="nav-dropdown-item">Tutti gli annunci</a>
              <div className="nav-dropdown-divider" />
              <a href="/portfolio/vendite" className="nav-dropdown-item">Vendite</a>
              <a href="/portfolio/affitti" className="nav-dropdown-item">Affitti</a>
            </div>
          </li>

          <li>
            <a href="/blog" className="static-nav-link">Blog</a>
          </li>
        </ul>

        <a href="/valuta-casa" className="static-nav-btn">Valuta la tua casa</a>
      </div>
    </header>
  );
}
