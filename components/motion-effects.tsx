'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const revealSelectors = [
  '.section .section-head',
  '.section .lead',
  '.section .card',
  '.section .media',
  '.section .pill-list',
  '.section .feature-list',
  '.section .form',
  '.deal-card',
  '.gallery-button',
  '.accordion details',
  '.cta-band .button-row',
  '.site-footer .footer-links',
  '.site-footer .footer-bottom'
].join(',');

export function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.remove('route-leaving');
  }, [pathname]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) {
      document.body.classList.add('motion-reduced');
      return;
    }

    const header = document.querySelector<HTMLElement>('.site-header');
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));

    revealItems.forEach((item, index) => {
      item.classList.add('motion-reveal');

      if (item.classList.contains('gallery-button')) {
        item.classList.add('motion-gallery');
        item.style.setProperty('--reveal-delay', `${Math.min((index % 12) * 80, 640)}ms`);
      } else if (item.classList.contains('card') || item.classList.contains('facility-card')) {
        item.style.setProperty('--reveal-delay', `${Math.min((index % 6) * 110, 550)}ms`);
      } else if (item.classList.contains('media')) {
        item.classList.add('motion-image');
      }
    });

    document.querySelectorAll<HTMLElement>('.split').forEach((split) => {
      const first = split.firstElementChild as HTMLElement | null;
      const last = split.lastElementChild as HTMLElement | null;
      first?.classList.add('motion-left');
      last?.classList.add('motion-right');
      split.querySelectorAll<HTMLElement>('.media').forEach((media) => media.classList.add('motion-parallax'));
    });

    document.body.classList.add('motion-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));

    let ticking = false;
    const updateScrollState = () => {
      ticking = false;
      const scrolled = window.scrollY > 16;
      document.body.classList.toggle('is-scrolled', scrolled);
      header?.classList.toggle('scrolled', scrolled);

      if (window.innerWidth < 900) return;
      document.querySelectorAll<HTMLElement>('.motion-parallax').forEach((media) => {
        const rect = media.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        media.style.setProperty('--parallax-y', `${Math.max(Math.min(progress * -18, 15), -15).toFixed(2)}px`);
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateScrollState);
    };

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest('a[href]') as HTMLAnchorElement | null;
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || link.target || url.pathname === window.location.pathname) return;
      document.body.classList.add('route-leaving');
    };

    updateScrollState();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onClick);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClick);
      document.body.classList.remove('motion-ready', 'is-scrolled', 'route-leaving');
    };
  }, [pathname]);

  return null;
}
