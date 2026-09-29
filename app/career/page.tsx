import Image from 'next/image';
import { EnquiryForm } from '@/components/enquiry-form';
import { images, pageMetadata, site } from '@/lib/site-data';

export const metadata = pageMetadata(
  'Career',
  'Apply for job opportunities at Betelnut Resort Diveagar using the career application form or contact the resort.',
  '/career'
);

export default function CareerPage() {
  return (
    <>
      <section className="section">
        <div className="container section-head">
          <p className="eyebrow">Career</p>
          <h1>Apply to work with Betelnut Resort.</h1>
          <p className="lead">
            The existing Career page accepts the position being applied for and lists the resort contact details. This page keeps the
            application route working with validation and delivery through the enquiry API.
          </p>
        </div>
      </section>

      <section className="section compact band">
        <div className="container split">
          <div className="media tall">
            <Image src={images.garden} alt="Garden walkway at Betelnut Resort" fill priority sizes="(max-width: 980px) 100vw, 50vw" />
          </div>
          <div className="card">
            <div className="card-body">
              <p className="eyebrow">Apply for Job</p>
              <h2>Tell us the role you are interested in.</h2>
              <EnquiryForm type="career" />
              <p className="form-note">
                You can also email {site.email} or call {site.phoneDisplay} during office hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
