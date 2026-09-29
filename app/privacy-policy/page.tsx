import { pageMetadata, site } from '@/lib/site-data';

export const metadata = pageMetadata(
  'Privacy Policy',
  'Privacy Policy for Betelnut Resort Diveagar covering personal data, reservations, communications, cookies, Google Analytics and media rights.',
  '/privacy-policy'
);

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="container policy-content">
        <p className="eyebrow">Privacy Policy</p>
        <h1>Privacy Policy</h1>
        <p>
          Betelnut Resort takes guest privacy seriously and trains employees to handle personal information with care. This policy
          applies to customers and website visitors and explains how personal data is collected, processed and retained.
        </p>

        <h2>Personal Data</h2>
        <p>
          When making a reservation, the resort may collect only the information needed to process the stay, including name, address,
          nationality, email, telephone number, check-in and check-out dates, selected room category and billing information. At check-in,
          guests may be asked for passport or identity documentation as required by policy and law.
        </p>
        <p>
          Guest data is retained only as long as necessary for the processing purpose, contractual obligations and legal requirements.
          Customers may request access, correction or deletion of their information by contacting the resort in writing.
        </p>

        <h2>Marketing</h2>
        <p>
          Email and postal addresses are not used for direct marketing without consent. Guests may opt in to newsletters and may ask to
          be removed from the mailing list.
        </p>

        <h2>Payments and Security</h2>
        <p>
          The existing policy states that credit card information may be requested to confirm a booking and saved in encrypted form until
          check-out, after which it is deleted. Only authorized personnel may access this information.
        </p>

        <h2>Camera Surveillance</h2>
        <p>
          Betelnut Resort may use camera surveillance for crime prevention and guest security. Video may be disclosed to third parties
          when legally required or when there are legal grounds to do so.
        </p>

        <h2>Website Data and Analytics</h2>
        <p>
          Website visits may generate data that helps the resort understand how visitors use the site and which information is useful.
          If Google Analytics or similar tools are enabled, cookies may be used to analyze website activity. Visitors can restrict
          cookies in browser settings, though this may affect website functionality.
        </p>

        <h2>Photographs and Copyright</h2>
        <p>
          Photographs, pictures, layouts, diagrams and logos are copyright protected. Use of media for marketing, editorial or other
          purposes requires prior written approval from Betelnut Resort unless expressly stated otherwise.
        </p>

        <h2>Policy Updates</h2>
        <p>
          Betelnut Resort may update this policy when required. Questions about this policy can be sent to{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </section>
  );
}
