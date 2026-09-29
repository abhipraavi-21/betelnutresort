import { pageMetadata, policies, site } from '@/lib/site-data';

export const metadata = pageMetadata(
  'Terms & Conditions',
  'Terms and Conditions for Betelnut Resort Diveagar covering identification, reservations, arrival, occupancy, payments, cancellations, restaurant, pool and resort policies.',
  '/terms-and-conditions'
);

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container policy-content">
        <p className="eyebrow">Terms & Conditions</p>
        <h1>Terms & Conditions</h1>
        <p>
          Guests visiting or staying at Betelnut Resort, Diveagar agree to the resort policies, terms and conditions upon check-in.
          The following copy preserves the substance of the current website while improving readability.
        </p>

        <h2>Identification and Registration</h2>
        <p>
          Guests must provide valid identification such as driving licence, voter identity card or Aadhaar card. PAN card is not accepted
          as identity proof. Foreign national guests must provide a valid passport and visa. The guest registration book must be completed
          with required details.
        </p>

        <h2>Reservations</h2>
        <p>
          A reservation or amendment is binding only when confirmed by Betelnut Resort and the client. Specific benefits are based on
          the reservation confirmation. The person who signs or confirms the booking is liable for the full reservation invoice.
        </p>

        <h2>Arrival and Departure</h2>
        <p>{policies.arrival}</p>
        <p>
          Early check-in may be requested during reservation or by contacting the front desk before arrival, but it is subject to
          availability and cannot be guaranteed. In case of early departure, the tariff amount is not refunded.
        </p>

        <h2>Occupancy</h2>
        <p>{policies.occupancy}</p>
        <ul>
          <li>Guests allowed in a room are limited to the names and number paid for while reserving.</li>
          <li>One child below 5 years may stay complimentary with parents without an extra bed, subject to age proof at check-in.</li>
          <li>Children from 5 to 17 years and extra adults may be charged as stated in the current policy, pending client confirmation.</li>
        </ul>

        <h2>Payments</h2>
        <p>
          Tariffs may change without prior notice. Accepted payment methods listed on the current site are Visa, MasterCard, cash in
          Indian Rupees and online transfer by RTGS or NEFT.
        </p>
        <p>
          For groups and tour operators, the current policy states that 75% of the total amount is required at booking and the remaining
          25% is due 4 weeks before arrival. In peak season, the current policy requires full pre-payment 30 days before arrival.
        </p>

        <h2>Cancellations</h2>
        <p>{policies.cancellation}</p>

        <h2>Restaurant</h2>
        <p>{policies.restaurant}</p>

        <h2>Swimming Pool</h2>
        <p>{policies.pool}</p>

        <h2>Games Area</h2>
        <p>{policies.games}</p>

        <h2>Damage, Linen and Conduct</h2>
        <p>
          Guests are responsible for loss or damage caused to resort property by themselves, their friends, visitors or anyone for whom
          they are responsible. Resort towels are not to be carried outside the premises. Damage or stains on linen may be charged to the
          guest bill.
        </p>

        <h2>Smoking, Security and Government Rules</h2>
        <p>
          Smoking is prohibited in the reception, restaurant, bedrooms and toilet areas. Guests are responsible for their belongings and
          valuables. Guests must observe applicable government rules and regulations in India.
        </p>

        <p className="form-note">
          For questions about current tariffs, charges, availability or policy updates, contact {site.email} or call {site.phoneDisplay}.
        </p>
      </div>
    </section>
  );
}
