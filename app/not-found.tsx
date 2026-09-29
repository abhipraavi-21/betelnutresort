import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container section-head">
        <p className="eyebrow">Not Found</p>
        <h1>This page could not be found.</h1>
        <p className="lead">Return to the resort website or use the navigation to continue.</p>
        <Link className="btn primary" href="/">
          Go Home
        </Link>
      </div>
    </section>
  );
}
