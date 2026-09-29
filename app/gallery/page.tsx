import { GalleryLightbox } from '@/components/gallery-lightbox';
import { CtaBand } from '@/components/cta';
import { galleryImages, pageMetadata } from '@/lib/site-data';

export const metadata = pageMetadata(
  'Gallery',
  'Photo gallery for Betelnut Resort Diveagar with cottages, rooms, pool, garden, games and nearby beach imagery from the current website.',
  '/gallery'
);

export default function GalleryPage() {
  return (
    <>
      <section className="section">
        <div className="container section-head">
          <p className="eyebrow">Gallery</p>
          <h1>Rooms, cottages, pool and garden spaces.</h1>
          <p className="lead">
            These images are sourced from the current Betelnut Resort website. Final deployment should confirm the client’s rights to
            reuse and optimize the existing media library.
          </p>
        </div>
      </section>
      <section className="section compact band">
        <div className="container">
          <GalleryLightbox images={galleryImages} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
