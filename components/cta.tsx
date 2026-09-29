import { CalendarCheck, MessageCircle } from 'lucide-react';
import { site, whatsappUrl } from '@/lib/site-data';

export function CtaBand() {
  return (
    <section className="section compact cta-band">
      <div className="container section-head row">
        <div>
          <p className="eyebrow">Plan Your Stay</p>
          <h2>Check cottage availability before you travel to Diveagar.</h2>
        </div>
        <div className="button-row">
          <a className="btn brass" href={site.bookingUrl} target="_blank" rel="noreferrer">
            <CalendarCheck size={18} aria-hidden="true" />
            Book Now
          </a>
          <a className="btn secondary" href={whatsappUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}
