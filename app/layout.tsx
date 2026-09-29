import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MotionEffects } from '@/components/motion-effects';
import { site } from '@/lib/site-data';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Betelnut Resort Diveagar | Boutique Coastal Cottages',
    template: '%s | Betelnut Resort Diveagar'
  },
  description:
    'Betelnut Resort in Diveagar offers coastal cottages, pool, restaurant, indoor games, children’s play area, Wi-Fi and stay enquiries near Diveagar Beach.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Resort',
    name: site.name,
    url: site.url,
    telephone: site.phoneHref,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gate no. 136, Shivaji Chowk Beach Rd',
      addressLocality: 'Diveagar',
      addressRegion: 'Maharashtra',
      postalCode: '402403',
      addressCountry: 'IN'
    },
    amenityFeature: [
      'Swimming pool',
      'Restaurant',
      'Free Wi-Fi',
      'Housekeeping',
      'Indoor games',
      'Children’s play area',
      'Parking'
    ].map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true }))
  };

  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <MotionEffects />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
