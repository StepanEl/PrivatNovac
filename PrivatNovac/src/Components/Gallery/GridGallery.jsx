import { useState } from 'react';
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

  return (
    <div className="grid-gallery-root">
      <div className="grid-gallery">
        {slides.slice(0, 6).map((s, i) => (
          <div key={i} className="grid-item">
            <img
              src={`${import.meta.env.BASE_URL}${s.image}`}
              alt={s.text || ''}
              onClick={() => openAt(i)}
              loading="lazy"
            />
          </div>
        ))}
      </div>

        {/* Modal with Swiper for zoom/navigation */}
      {open && (
        <div className="gallery-modal" onClick={() => setOpen(false)}>
          <div className="gallery-modal-inner" onClick={(e) => e.stopPropagation()}>
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
