'use client';

import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

export function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [closing, setClosing] = useState(false);

  function closeLightbox() {
    setClosing(true);
    window.setTimeout(() => {
      setActive(null);
      setClosing(false);
    }, 180);
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (active === null) return;
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') setActive((value) => previous(value, images.length));
      if (event.key === 'ArrowRight') setActive((value) => next(value, images.length));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, images.length]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <button className="gallery-button" key={`${image.src}-${index}`} type="button" onClick={() => setActive(index)}>
            <img src={image.src} alt={image.alt} loading={index < 6 ? 'eager' : 'lazy'} decoding="async" />
            <span>{image.category}</span>
          </button>
        ))}
      </div>
      {active !== null && (
        <div className={`lightbox ${closing ? 'closing' : ''}`} role="dialog" aria-modal="true" aria-label="Gallery image">
          <button className="icon-button close" type="button" aria-label="Close gallery" onClick={closeLightbox}>
            <X size={22} aria-hidden="true" />
          </button>
          <button
            className="icon-button prev"
            type="button"
            aria-label="Previous image"
            onClick={() => setActive((value) => previous(value, images.length))}
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>
          <div className="lightbox-panel">
            <img src={images[active].src} alt={images[active].alt} />
            <p className="lightbox-caption">{images[active].alt}</p>
          </div>
          <button
            className="icon-button next"
            type="button"
            aria-label="Next image"
            onClick={() => setActive((value) => next(value, images.length))}
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}

function previous(value: number | null, length: number) {
  if (value === null) return value;
  return value === 0 ? length - 1 : value - 1;
}

function next(value: number | null, length: number) {
  if (value === null) return value;
  return value === length - 1 ? 0 : value + 1;
}
