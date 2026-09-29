import Link from 'next/link';
import { CalendarCheck, MapPin, MessageCircle, Phone } from 'lucide-react';
import { navItems, site, whatsappUrl } from '@/lib/site-data';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-links">
            <h2>Betelnut Resort</h2>
            <p>
              Coastal cottages, pool, Konkan dining and easy access to Diveagar’s beach experiences from a green resort setting.
            </p>
            <div className="button-row">
              <a className="btn brass" href={site.bookingUrl} target="_blank" rel="noreferrer">
                <CalendarCheck size={17} aria-hidden="true" />
                Book Now
              </a>
              <a className="btn secondary" href={whatsappUrl()} target="_blank" rel="noreferrer">
                <MessageCircle size={17} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Explore</h3>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/faqs">FAQs</Link>
          </div>
          <div className="footer-links">
            <h3>Useful</h3>
            <Link href="/career">Career</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <a href={site.directionsUrl} target="_blank" rel="noreferrer">
              Directions
            </a>
          </div>
          <div className="footer-links">
            <h3>Contact</h3>
            <a href={`tel:${site.phoneHref}`}>
              <Phone size={16} aria-hidden="true" /> {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer">
              <MapPin size={16} aria-hidden="true" /> {site.address}
            </a>
            <p>Office timings: {site.officeHours}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Betelnut Resort. All rights reserved.</span>
          <span>Existing photo rights and Google review/profile links require client confirmation.</span>
        </div>
      </div>
    </footer>
  );
}
