import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export const Gallery = ({ slides }) => (
  <Swiper
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
    style={{ width: '100%', height: 'auto' }}
  >
    {slides.map((slide, idx) => (
      <SwiperSlide key={idx}>
        <img src={slide.image} alt="" style={{ width: '100%', display: 'block' }} />
        {slide.text && (
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>{slide.text}</div>
        )}
      </SwiperSlide>
    ))}
  </Swiper>
);