import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import './GridGallery.css';
import { Gallery } from './Gallery';

export const GridGallery = ({ slides }) => {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openAt = (i) => {
    setStartIndex(i);
    setOpen(true);
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) {
      document.addEventListener('keydown', onKey);
      // focus modal for screen readers
      setTimeout(() => modalRef.current?.focus(), 50);
    }
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="grid-gallery-root">
      <div className="grid-gallery">
        {slides.slice(0, 6).map((s, i) => (
          <div key={i} className="grid-item">
            <img
              src={`${import.meta.env.BASE_URL}${s.image}`}
              alt={s.text || `Obrázek ${i + 1}`}
              onClick={() => openAt(i)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openAt(i); }}
              role="button"
              tabIndex={0}
              loading="lazy"
            />
          </div>
        ))}
      </div>

        {/* Modal with Swiper for zoom/navigation */}
      {open && (
        <div className="gallery-modal" onClick={() => setOpen(false)} aria-hidden={open ? 'false' : 'true'}>
          <div className="gallery-modal-inner" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" tabIndex={-1} ref={modalRef}>
            <button className="gallery-modal-close" onClick={() => setOpen(false)} aria-label="Zavřít galerii">✕</button>
            <Swiper
              modules={[Navigation, Pagination, Zoom]}
              navigation
              pagination={{ clickable: true }}
              zoom={{ maxRatio: 3 }}
              initialSlide={startIndex}
              className="modal-swiper"
            >
              {slides.map((s, idx) => (
                <SwiperSlide key={idx}>
                  <div className="swiper-zoom-container">
                    <img src={`${import.meta.env.BASE_URL}${s.image}`} alt={s.text || ''} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridGallery;
