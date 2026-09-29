import { CtaBand } from '@/components/cta';
import { faqs, pageMetadata } from '@/lib/site-data';

export const metadata = pageMetadata(
  'FAQs',
  'Frequently asked questions for Betelnut Resort Diveagar about booking, pool, family amenities, nearby activities and offers.',
  '/faqs'
);

export default function FaqsPage() {
  return (
    <>
      <section className="section">
        <div className="container section-head">
          <p className="eyebrow">FAQs</p>
          <h1>Useful answers before you enquire.</h1>
          <p className="lead">
            The old FAQ section exposed questions but only one full answer. The answers here are limited to facts verified from current
            site pages and policies.
          </p>
        </div>
      </section>
      <section className="section compact band">
        <div className="container accordion">
          {faqs.map((faq) => (
            <details key={faq.question} open={faq === faqs[0]}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
