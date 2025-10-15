import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './Gallery.css';

export const Gallery = ({ slides }) => (
  <Swiper
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
    className="gallery-swiper"
  >
    {slides.map((slide, idx) => (
      <SwiperSlide key={idx}>
        <div className="gallery-slide-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}${slide.image}`}
            alt={slide.text || ''}
            className="gallery-image"
          />
          {slide.text && (
            <div className="gallery-text-block">
              {slide.text}
              {slide.icon && (
                <img
                  src={`${import.meta.env.BASE_URL}${slide.icon}`}
                  alt=""
                  className="gallery-icon"
                />
              )}
            </div>
          )}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);