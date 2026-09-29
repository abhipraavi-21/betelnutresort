import Image from 'next/image';
import Link from 'next/link';
import {
  Car,
  ChevronRight,
  Gift,
  Gamepad2,
  House,
  MapPin,
  Sparkles,
  Waves,
  Wifi
} from 'lucide-react';
import { BookingWidget } from '@/components/booking-widget';
import { CtaBand } from '@/components/cta';
import { EnquiryForm } from '@/components/enquiry-form';
import { GalleryLightbox } from '@/components/gallery-lightbox';
import { amenities, cottageFeatures, faqs, galleryImages, images, pageMetadata, site } from '@/lib/site-data';

const homeFacilities = [
  { title: 'Swimming pool', text: 'A resort pool with posted guest policy and timings.', Icon: Waves },
  { title: 'Restaurant', text: 'On-site restaurant serving Konkan cuisine.', Icon: House },
  { title: 'Free Wi-Fi', text: 'Good-speed Wi-Fi connectivity listed in all rooms.', Icon: Wifi },
  { title: 'Indoor games', text: 'Table tennis, chess, carrom, darts, handball and frisbee.', Icon: Gamepad2 },
  { title: 'Children’s play area', text: 'A dedicated area to keep younger guests entertained.', Icon: Sparkles },
  { title: 'Parking', text: 'Ample parking space for vehicles.', Icon: Car }
];

const offerCards = [
  {
    title: 'Weekend cottage stay',
    text: 'Plan a short Diveagar break with pool access, garden spaces and classic cottages.',
    meta: 'Best for families'
  },
  {
    title: 'Konkan dining plan',
    text: 'Check meal timings before arrival and pair your stay with local coastal dining.',
    meta: 'Restaurant on site'
  },
  {
    title: 'Beach and temple circuit',
    text: 'Use Betelnut Resort as a base for Diveagar Beach, Suvarna Ganesh Mandir and coastal drives.',
    meta: 'Trip idea'
  }
];

export const metadata = pageMetadata(
  'Betelnut Resort Diveagar | Boutique Coastal Cottages',
  'Redeveloped website for Betelnut Resort, Diveagar: cottages, pool, restaurant, gallery, enquiries, booking links and travel information.',
  '/'
);

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Image src={images.hero} alt="Betelnut Resort cottages surrounded by tropical greenery" fill priority sizes="100vw" />
        <div className="container hero-content reveal">
          <span className="hero-kicker">
            <Waves size={16} aria-hidden="true" />
            Diveagar coastal retreat
          </span>
          <h1>Betelnut Resort</h1>
          <p className="lead">
            A green cottage resort in Diveagar with a swimming pool, Konkan dining, indoor games and a relaxed base for beach days,
            temples and coastal drives.
          </p>
          <BookingWidget />
        </div>
      </section>

      <section className="deals-section">
        <div className="container">
          <div className="section-head row">
            <div>
              <p className="eyebrow">Offers & Trip Ideas</p>
              <h2>Plan your Diveagar stay faster.</h2>
            </div>
            <p className="lead">
              Pick a stay style, check availability and move straight to enquiry or booking without searching through every page.
            </p>
          </div>
          <div className="deal-grid">
            {offerCards.map((offer) => (
              <article className="deal-card" key={offer.title}>
                <div className="deal-icon">
                  <Gift size={20} aria-hidden="true" />
                </div>
                <div>
                  <span>{offer.meta}</span>
                  <h3>{offer.title}</h3>
                  <p>{offer.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="media tall reveal">
            <Image src={images.garden} alt="Tropical garden at Betelnut Resort" fill sizes="(max-width: 980px) 100vw, 45vw" />
          </div>
          <div className="section-head">
            <p className="eyebrow">Welcome</p>
            <h2>A quieter way to stay near Diveagar’s coast.</h2>
            <p className="lead">
              Betelnut Resort is positioned as a cottage-led escape in Diveagar, combining contemporary rooms, tropical greenery and
              family-friendly resort amenities. The current site presents the resort as a beachside sanctuary a short walk from
              Diveagar Beach, with cottages designed for the local coastal climate.
            </p>
            <ul className="pill-list" aria-label="Resort highlights">
              <li>Classic Cottage</li>
              <li>Swimming pool</li>
              <li>Konkan restaurant</li>
              <li>Indoor games</li>
              <li>Children’s play area</li>
              <li>Parking</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <div className="section-head row">
            <div>
              <p className="eyebrow">Cottages</p>
              <h2>Classic cottages with verified amenities.</h2>
            </div>
            <p className="lead">
              The existing site confirms one named cottage type, the Classic Cottage, and states that the resort provides 12 Diveagar
              beach cottages. Additional categories, rates and inclusions should be approved before publishing.
            </p>
          </div>
          <div className="grid two">
            <article className="card">
              <div className="media short">
                <Image src={images.room} alt="Cottage room at Betelnut Resort" fill sizes="(max-width: 980px) 100vw, 50vw" />
              </div>
              <div className="card-body">
                <p className="eyebrow">Verified Category</p>
                <h3>Classic Cottage</h3>
                <p>
                  A comfortable coastal cottage stay with contemporary interiors, air conditioning, en-suite bathroom and a private
                  balcony or patio noted on the current site.
                </p>
                <ul className="feature-list">
                  {cottageFeatures.map((feature) => (
                    <li key={feature}>
                      <Sparkles size={17} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link className="btn secondary" href="/cottages">
                  View cottages <ChevronRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </article>
            <div className="card">
              <div className="card-body">
                <p className="eyebrow">Stay Enquiry</p>
                <h3>Ask about availability</h3>
                <EnquiryForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head row">
            <div>
              <p className="eyebrow">Facilities</p>
              <h2>Designed for families, slow mornings and easy evenings.</h2>
            </div>
            <p className="lead">
              Facilities are drawn from the current website and policy pages. Details such as room service and dining operations should
              be reconfirmed before final publication.
            </p>
          </div>
          <div className="grid three">
            {homeFacilities.map(({ title, text, Icon }) => (
              <article className="card facility-card" key={title}>
                <div className="card-body">
                  <Icon size={28} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container split">
          <div className="section-head">
            <p className="eyebrow">Diveagar</p>
            <h2>Beach, temples, fort trips and coastal drives.</h2>
            <p className="lead">
              Diveagar is presented on the current site as a weekend getaway on the Konkan strip, around 3 to 4 hours from Pune and
              Mumbai. Nearby experiences include the beach, local fishing settlement, turtle festival season, Murud-Janjira Fort, Roop
              Narayan Mandir, Suvarna Ganesh Mandir and seasonal water sports operated in the area.
            </p>
            <Link className="btn primary" href="/explore-diveagar">
              Explore Diveagar <ChevronRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="media tall">
            <Image src={images.beach} alt="Beach near Betelnut Resort in Diveagar" fill sizes="(max-width: 980px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head row">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2>Real resort imagery from the current website.</h2>
            </div>
            <p className="lead">
              Cottages, rooms, garden, pool and surrounding imagery have been reused from the existing site pending client confirmation
              of image rights.
            </p>
          </div>
          <GalleryLightbox images={galleryImages.slice(0, 8)} />
        </div>
      </section>

      <section className="section band">
        <div className="container split">
          <div className="media tall">
            <Image src={images.pool} alt="Swimming pool at Betelnut Resort" fill sizes="(max-width: 980px) 100vw, 50vw" />
          </div>
          <div className="section-head">
            <p className="eyebrow">Frequently Asked</p>
            <h2>Clear answers without overpromising.</h2>
            <div className="accordion">
              {faqs.slice(0, 4).map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
            <Link className="btn secondary" href="/faqs">
              Read all FAQs <ChevronRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="section-head">
            <p className="eyebrow">Location</p>
            <h2>Gat no. 136, Diveagar.</h2>
            <p className="lead">
              The current website lists Gat no. 136, Shivaji Chowk Rd, Diveagar, Maharashtra 402404. Google’s hotel listing uses Gate
              no. 136, Shivaji Chowk Beach Rd, Diveagar, Maharashtra 402403. This redevelopment keeps the Google-ready address while
              flagging the difference for confirmation.
            </p>
            <div className="button-row">
              <a className="btn primary" href={site.directionsUrl} target="_blank" rel="noreferrer">
                <MapPin size={17} aria-hidden="true" />
                Get Directions
              </a>
              <Link className="btn secondary" href="/contact">
                Contact Resort
              </Link>
            </div>
          </div>
          <iframe
            className="media"
            title="Map to Betelnut Resort Diveagar"
            src={site.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
