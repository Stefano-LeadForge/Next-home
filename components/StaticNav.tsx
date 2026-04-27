'use client';

import { usePathname } from 'next/navigation';

export default function StaticNav() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <header className="static-header">
      <a href="/" className="static-header-logo" aria-label="Torna alla home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="NextHome logo" className="static-header-logo-img" />
        <div className="static-header-logo-divider" />
        <div className="static-header-logo-text">
          <span className="static-header-logo-main">NextHome</span>
          <span className="static-header-logo-sub">Real Estate</span>
        </div>
      </a>
    </header>
  );
}
