import Image from 'next/image';
import { CalendarCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { CtaBand } from '@/components/cta';
import { EnquiryForm } from '@/components/enquiry-form';
import { cottageFeatures, images, pageMetadata, policies, site, whatsappUrl } from '@/lib/site-data';

export const metadata = pageMetadata(
  'Cottages',
  'Classic Cottage accommodation at Betelnut Resort Diveagar with verified room features and stay enquiry options.',
  '/cottages'
);

export default function CottagesPage() {
  return (
    <>
      <section className="section">
        <div className="container section-head">
          <p className="eyebrow">Cottages</p>
          <h1>Classic cottage stays among palms and quiet paths.</h1>
          <p className="lead">
            The existing website confirms 12 Diveagar beach cottages and one named category: Classic Cottage. The page avoids invented
            tiers, rates and offers until the client supplies approved details.
          </p>
        </div>
      </section>

      <section className="section compact band">
        <div className="container split">
          <div className="media tall">
            <Image src={images.cottage} alt="Cottages among trees at Betelnut Resort" fill priority sizes="(max-width: 980px) 100vw, 50vw" />
          </div>
          <article className="card">
            <div className="card-body">
              <p className="eyebrow">Verified Category</p>
              <h2>Classic Cottage</h2>
              <p>
                The current Facilities page describes the Classic Cottage as a comfortable base for experiencing local culture, cuisine
                and adventure at Diveagar, with cottages designed for the temperate coastal climate.
              </p>
              <ul className="feature-list">
                {cottageFeatures.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="button-row">
                <a className="btn primary" href={site.bookingUrl} target="_blank" rel="noreferrer">
                  <CalendarCheck size={17} aria-hidden="true" />
                  Book Now
                </a>
                <a className="btn secondary" href={whatsappUrl('Hello Betelnut Resort, I would like to enquire about Classic Cottage availability.')} target="_blank" rel="noreferrer">
                  <MessageCircle size={17} aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div className="section-head">
            <p className="eyebrow">Occupancy Policy</p>
            <h2>Important stay notes</h2>
            <p className="lead">{policies.occupancy}</p>
            <p className="form-note">
              Rates, seasonal packages, inclusions, exact room inventory and child charges should be confirmed before being used in
              sales copy.
            </p>
          </div>
          <div className="card">
            <div className="card-body">
              <p className="eyebrow">Check Availability</p>
              <h3>Send your travel dates</h3>
              <EnquiryForm compact />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
