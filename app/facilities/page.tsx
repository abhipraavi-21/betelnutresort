import Image from 'next/image';
import { Car, Gamepad2, Home, PhoneCall, Soup, Sparkles, Waves, Wifi } from 'lucide-react';
import { CtaBand } from '@/components/cta';
import { amenities, images, pageMetadata, policies } from '@/lib/site-data';

export const metadata = pageMetadata(
  'Facilities & Dining',
  'Verified Betelnut Resort facilities: pool, Konkan restaurant, Wi-Fi, housekeeping, indoor games, children’s play area, parking and resort policies.',
  '/facilities'
);

const facilityCards = [
  { title: 'Swimming pool', text: 'A refreshing pool with guest policy and timings listed on the current site.', icon: Waves },
  { title: 'Restaurant', text: 'On-site restaurant serving Konkan cuisine, with meal timings from the policy page.', icon: Soup },
  { title: 'Free Wi-Fi', text: 'Good-speed connectivity listed in all rooms.', icon: Wifi },
  { title: 'Daily housekeeping', text: 'Daily housekeeping service for guest convenience.', icon: Sparkles },
  { title: 'Indoor games', text: 'Table tennis, chess, carrom, darts, handball and frisbee are listed.', icon: Gamepad2 },
  { title: 'Children’s play area', text: 'A family-friendly play area for children.', icon: Home },
  { title: 'Parking', text: 'Ample parking space is listed for vehicles.', icon: Car },
  { title: 'Intercom', text: 'Intercom facility is listed in resort amenities.', icon: PhoneCall }
];

export default function FacilitiesPage() {
  return (
    <>
      <section className="section">
        <div className="container section-head">
          <p className="eyebrow">Facilities & Dining</p>
          <h1>Pool days, Konkan meals and simple comforts.</h1>
          <p className="lead">
            This page preserves the current Facilities content while tightening wording and separating confirmed amenities from items
            that need operational confirmation.
          </p>
        </div>
      </section>

      <section className="section compact band">
        <div className="container split">
          <div className="media tall">
            <Image src={images.pool} alt="Swimming pool at Betelnut Resort" fill priority sizes="(max-width: 980px) 100vw, 50vw" />
          </div>
          <div className="section-head">
            <p className="eyebrow">Amenities</p>
            <h2>What the existing site confirms</h2>
            <ul className="feature-list">
              {amenities.map((item) => (
                <li key={item}>
                  <Sparkles size={17} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid three">
          {facilityCards.map(({ title, text, icon: Icon }) => (
            <article className="card facility-card" key={title}>
              <div className="card-body">
                <Icon size={28} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="container grid two">
          <div className="section-head">
            <p className="eyebrow">Dining</p>
            <h2>Konkan cuisine at the resort restaurant.</h2>
            <p className="lead">{policies.restaurant}</p>
            <p className="form-note">Current site content conflicts on in-room dining versus policy text stating meals are not served in rooms.</p>
          </div>
          <div className="media">
            <Image src={images.dining} alt="Dining and resort food service at Betelnut Resort" fill sizes="(max-width: 980px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="section compact">
        <div className="container grid three">
          <article className="card">
            <div className="card-body">
              <h3>Pool Policy</h3>
              <p>{policies.pool}</p>
            </div>
          </article>
          <article className="card">
            <div className="card-body">
              <h3>Games Area</h3>
              <p>{policies.games}</p>
            </div>
          </article>
          <article className="card">
            <div className="card-body">
              <h3>Housekeeping</h3>
              <p>Daily housekeeping is listed on the current website. Linen rules are included on the Terms & Conditions page.</p>
            </div>
          </article>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
