# Betelnut Resort Redevelopment

Production-ready Next.js redevelopment for Betelnut Resort, Diveagar. The site preserves verified content from the current Wix website, improves copy, adds responsive premium UI, SEO metadata, sitemap/robots, redirects, enquiry APIs and accessible gallery interactions.

## Stack

- Next.js 16 with App Router
- React 19 and TypeScript
- Node.js route handler for enquiries
- Zod validation
- CSS responsive design and reduced-motion support
- Lucide icons

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure the delivery channel before production.

```bash
NEXT_PUBLIC_SITE_URL=https://www.betelnutresort.com
ENQUIRY_TO_EMAIL=info@betelnutresort.com
ENQUIRY_FROM_EMAIL=website@betelnutresort.com
RESEND_API_KEY=
ENQUIRY_WEBHOOK_URL=
ADMIN_SHARED_SECRET=
```

The enquiry API writes a local JSONL copy in `storage/enquiries.jsonl` when the filesystem is writable. For production, configure either `RESEND_API_KEY` with email values or `ENQUIRY_WEBHOOK_URL` so submissions are delivered outside the server filesystem.

## Implemented Routes

- `/`
- `/cottages`
- `/facilities`
- `/gallery`
- `/explore-diveagar`
- `/contact`
- `/career`
- `/faqs`
- `/privacy-policy`
- `/terms-and-conditions`
- `/sitemap.xml`
- `/robots.txt`

## Redirects

- `/explore-surroundings` -> `/explore-diveagar`
- `/privacypolicy` -> `/privacy-policy`
- `/book-now` -> `https://letsbook.me/booking/betelnutresort`

## Forms

The stay enquiry form validates:

- Check-in and check-out dates
- Adults and children
- Number of cottages
- Name, phone and email
- Optional message

Contact and career forms share the same API and spam honeypot. The forms do not claim confirmed availability or booking completion.

## Client Confirmation Needed

- Exact beach distance and “beachfront” wording
- Cottage categories, occupancy, inclusions and current rates
- Final check-out time
- Dining and room-service details
- Booking provider and whether `letsbook.me` is the preferred final URL
- Production enquiry email/webhook
- Google Business Profile and review URLs
- Approved testimonials
- Rights to reuse existing photos and videos
