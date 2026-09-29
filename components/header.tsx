'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CalendarCheck, Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems, site } from '@/lib/site-data';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Betelnut Resort home">
          <span>Betelnut Resort</span>
          <span>Diveagar</span>
        </Link>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} className={pathname === item.href ? 'active' : ''} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a className="btn secondary" href={`tel:${site.phoneHref}`} aria-label="Call Betelnut Resort">
            <Phone size={17} aria-hidden="true" />
            Call
          </a>
          <a className="btn primary" href={site.bookingUrl} target="_blank" rel="noreferrer">
            <CalendarCheck size={17} aria-hidden="true" />
            Book Now
          </a>
          <button
            className="icon-button"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
