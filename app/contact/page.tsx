import { CalendarCheck, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { EnquiryForm } from '@/components/enquiry-form';
import { pageMetadata, site, whatsappUrl } from '@/lib/site-data';

export const metadata = pageMetadata(
  'Contact & Location',
  'Contact Betelnut Resort Diveagar for bookings, availability, directions and enquiries. Phone, email, WhatsApp, map and office timings.',
  '/contact'
);

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="container section-head">
          <p className="eyebrow">Contact & Location</p>
          <h1>Ask about availability, directions or your stay.</h1>
          <p className="lead">
            For booking and room availability questions, use the form, call during office hours, WhatsApp the resort or continue to the
            external booking provider.
          </p>
        </div>
      </section>

      <section className="section compact band">
        <div className="container grid two">
          <div className="card">
            <div className="card-body">
              <p className="eyebrow">Stay Enquiry</p>
              <h2>Send travel details</h2>
              <EnquiryForm />
            </div>
          </div>
          <div className="section-head">
            <p className="eyebrow">Reach the Resort</p>
            <h2>Betelnut Resort, Diveagar</h2>
            <div className="grid">
              <a className="btn secondary" href={`tel:${site.phoneHref}`}>
                <Phone size={17} aria-hidden="true" />
                {site.phoneDisplay}
              </a>
              <a className="btn secondary" href={`mailto:${site.email}`}>
                <Mail size={17} aria-hidden="true" />
                {site.email}
              </a>
              <a className="btn secondary" href={whatsappUrl()} target="_blank" rel="noreferrer">
                <MessageCircle size={17} aria-hidden="true" />
                WhatsApp Enquiry
              </a>
              <a className="btn primary" href={site.bookingUrl} target="_blank" rel="noreferrer">
                <CalendarCheck size={17} aria-hidden="true" />
                Book Now
              </a>
            </div>
            <p className="lead">
              Office timings: {site.officeHours}. The current site notes that calls are not answered after 7:00 pm.
            </p>
            <p className="form-note">
              Google Business Profile and “Leave a review” URLs were not confirmed in the current site source and should be supplied by
              the client before adding direct review links.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="section-head">
            <p className="eyebrow">Address</p>
            <h2>{site.address}</h2>
            <p className="lead">
              Existing footer address: {site.addressFromCurrentSite}. Please confirm the preferred postal code and road wording for
              final structured data and business listings.
            </p>
            <a className="btn primary" href={site.directionsUrl} target="_blank" rel="noreferrer">
              <MapPin size={17} aria-hidden="true" />
              Open Directions
            </a>
          </div>
          <iframe
            className="media tall"
            title="Map to Betelnut Resort Diveagar"
            src={site.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
