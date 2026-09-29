import type { Metadata } from 'next';

export const site = {
  name: 'Betelnut Resort',
  location: 'Diveagar',
  tagline: 'Boutique coastal cottages in Diveagar',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.betelnutresort.com',
  phoneDisplay: '+91 91122 20119',
  phoneHref: '+919112220119',
  whatsapp: '919112220119',
  email: 'info@betelnutresort.com',
  address: 'Gate no. 136, Shivaji Chowk Beach Rd, Diveagar, Maharashtra 402403, India',
  addressFromCurrentSite: 'Gat no. 136, Shivaji Chowk Rd, Diveagar, Maharashtra 402404',
  officeHours: '9:00 am - 7:00 pm',
  bookingUrl: 'https://letsbook.me/booking/betelnutresort',
  legacyBookingUrl: 'https://live.ipms247.com/booking/book-rooms-betelnutresort',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Betelnut%20Resort%20Gate%20no.%20136%20Shivaji%20Chowk%20Beach%20Rd%20Diveagar',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Betelnut%20Resort%2C%20Gate%20no.%20136%2C%20Shivaji%20Chowk%20Beach%20Rd%2C%20Diveagar',
  mapEmbed:
    'https://www.google.com/maps?q=Betelnut%20Resort%20Diveagar%20Gate%20no.%20136%20Shivaji%20Chowk%20Beach%20Rd&output=embed'
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/cottages', label: 'Cottages' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/explore-diveagar', label: 'Explore Diveagar' },
  { href: '/contact', label: 'Contact' }
];

export const imageBase = 'https://static.wixstatic.com/media/';

export const images = {
  hero: imageBase + '0a095e_a94ccd2dd3824e148c8832f3ca3cb43a~mv2_d_6720_4480_s_4_2.jpg',
  pool: imageBase + '0a095e_998a18acd6c24080b045c0003fe0e839~mv2_d_5568_3712_s_4_2.jpg',
  cottage: imageBase + '0a095e_6c04529c632e43f6b08bcbe873ab3890~mv2_d_6720_4480_s_4_2.jpg',
  garden: imageBase + '0a095e_1387a13b3f984d8183e6c3b0e2f288e4~mv2_d_6703_4469_s_4_2.jpg',
  room: imageBase + '0a095e_c2a5cf37a50442969a31a27c0291cf58~mv2_d_5844_3896_s_4_2.jpg',
  dining: imageBase + '0a095e_ff1844008e9742929cac1344cbd022ce~mv2_d_6703_3723_s_4_2.jpg',
  beach: imageBase + '0a095e_67b2a1cbde7f461ba981725636bce800~mv2_d_5568_3712_s_4_2.jpg',
  walkway: imageBase + '0a095e_9202a3f21ade4e519b3413e1692d33e5~mv2_d_5568_3712_s_4_2.jpg',
  facade: imageBase + '0a095e_a3a6122b6a614e1293c9debdb1713674~mv2_d_6720_4480_s_4_2.jpg',
  night: imageBase + '0a095e_98aeddbfb1e14d5db8113d692a1d239b~mv2_d_5568_3712_s_4_2.jpg'
};

export const galleryImages = [
  { src: images.hero, alt: 'Luxury cottages at Betelnut Resort', category: 'Cottages' },
  { src: images.garden, alt: 'Garden pathways at Betelnut Resort', category: 'Garden' },
  { src: imageBase + '0a095e_021151f57d5c41e286b471e500e1ebf6~mv2_d_6559_4373_s_4_2.jpg', alt: 'Table tennis in the resort balcony area', category: 'Facilities' },
  { src: images.pool, alt: 'Swimming pool at Betelnut Resort', category: 'Pool' },
  { src: images.facade, alt: 'Konkan cottages beside the swimming pool', category: 'Cottages' },
  { src: imageBase + '0a095e_535f38742d7f432787d02c4750a2e183~mv2.jpg', alt: 'Konkan cottages surrounded by greenery', category: 'Cottages' },
  { src: images.room, alt: 'Cottage room at Betelnut Resort', category: 'Rooms' },
  { src: imageBase + '0a095e_c2cda1c895e0402cb3aa6d8fe1f4c8c4~mv2_d_5568_3712_s_4_2.jpg', alt: 'Luxury cottage room view', category: 'Rooms' },
  { src: imageBase + '0a095e_307eabc692d943d1bf8218d1f5412012~mv2_d_5607_3738_s_4_2.jpg', alt: 'Television and air conditioning in a cottage room', category: 'Rooms' },
  { src: images.night, alt: 'Decorative lighting on trees at night', category: 'Garden' },
  { src: images.walkway, alt: 'Palm-lined resort walkway illuminated by lights', category: 'Garden' },
  { src: imageBase + '0a095e_a3f1fc4ec1e24b10a87932caf364a424~mv2_d_5568_3712_s_4_2.jpg', alt: 'Serene tropical garden at Betelnut Resort', category: 'Garden' },
  { src: imageBase + '0a095e_3d8f9ce09db44378873ebab1b8d9bb1d~mv2_d_5568_3712_s_4_2.jpg', alt: 'Fountain near a cottage', category: 'Garden' },
  { src: imageBase + '0a095e_0555199fed0d43e88085671189074f43~mv2.jpg', alt: 'Front view of a Konkan cottage', category: 'Cottages' },
  { src: imageBase + '0a095e_3e70b9c369784f8c94f6d1eeaf90b3ae~mv2.jpg', alt: 'Night view of a deluxe cottage', category: 'Cottages' },
  { src: images.cottage, alt: 'Cottages set among resort trees', category: 'Cottages' },
  { src: imageBase + '0a095e_a94ccd2dd3824e148c8832f3ca3cb43a~mv2_d_6720_4480_s_4_2.jpg', alt: 'Cottages in Betelnut Resort', category: 'Cottages' },
  { src: images.beach, alt: 'Beach near Betelnut Resort in Diveagar', category: 'Diveagar' }
];

export const amenities = [
  'In-room dining service',
  'Daily housekeeping',
  'LCD TV with Dish connection',
  'Indoor games: table tennis, chess, carrom, darts, handball and frisbee',
  'Free Wi-Fi in all rooms',
  'Swimming pool',
  'Patio and deck',
  'On-site restaurant',
  'Kids play area',
  'Ample parking',
  'Intercom facility'
];

export const cottageFeatures = [
  'Plush furnishings and contemporary decor',
  'Private balcony or patio',
  'En-suite bathroom with amenities',
  'Air conditioning',
  'In-room safe',
  'Designed for Diveagar’s coastal climate'
];

export const faqs = [
  {
    question: 'What makes Betelnut Resort a good stay in Diveagar?',
    answer:
      'Betelnut Resort combines cottage accommodation, a swimming pool, restaurant, indoor games, children’s play area, parking and easy access to Diveagar’s coastal experiences.'
  },
  {
    question: 'Does the resort have a swimming pool?',
    answer:
      'Yes. The resort lists a swimming pool among its amenities. The current policy states pool timings are 8:00 am to 8:00 pm and that children under 17 must be supervised by an adult.'
  },
  {
    question: 'How can I book or check availability?',
    answer:
      'Use the Book Now link for the external booking provider, or send a stay enquiry with your dates, guest count and number of cottages. You can also call during office hours.'
  },
  {
    question: 'Is Betelnut Resort family-friendly?',
    answer:
      'The resort lists family-oriented amenities including cottages, indoor games, a children’s play area, swimming pool and parking.'
  },
  {
    question: 'What activities are available nearby?',
    answer:
      'Nearby Diveagar options include the beach, fishing village areas, turtle festival season, coastal drives, Murud-Janjira Fort by ferry, Roop Narayan Mandir, Suvarna Ganesh Mandir and seasonal water sports operated locally.'
  },
  {
    question: 'Are special offers or extended-stay packages published?',
    answer:
      'No current package or rate card was found on the existing site. Please enquire directly before planning around an offer.'
  }
];

export const policies = {
  arrival:
    'Current site policy states check-in at 12 noon and check-out at 10:00 am. Google Hotels currently displays check-out at 11:00 am, so the final check-out time should be confirmed by the client.',
  occupancy:
    'Current policy says standard occupancy is 2 adults and 2 children below 5 years, or 3 adults with extra charge. Extra beds are subject to availability.',
  cancellation:
    'Cancellation requests should be sent by email or phone. Current policy states free cancellation until 7 days before arrival, with total price charged for cancellation within 7 days or no-show.',
  restaurant:
    'Restaurant timings listed on the current site are breakfast 8:00 am - 10:30 am, lunch 12:00 pm - 3:00 pm, and dinner 7:00 pm - 10:00 pm. Last food order is 10:00 pm. Current policy says meals are not served in rooms.',
  pool:
    'Swimming pool timings are listed as 8:00 am - 8:00 pm. There is no lifeguard on duty and proper swimwear is required.',
  games:
    'Games area timings are listed as 9:00 am - 8:00 pm. Food and drinks are not allowed in the games area.'
};

export function pageMetadata(title: string, description: string, path = ''): Metadata {
  const canonical = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      images: [{ url: images.hero, width: 1200, height: 800, alt: 'Betelnut Resort cottages in Diveagar' }],
      locale: 'en_IN',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [images.hero]
    }
  };
}

export function whatsappUrl(message = 'Hello Betelnut Resort, I would like to check availability for a stay.'): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
