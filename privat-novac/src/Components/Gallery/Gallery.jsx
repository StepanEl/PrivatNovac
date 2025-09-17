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
        <div style={{ position: 'relative' }}>
    <img src={slide.image} alt="" style={{ width: '100%', display: 'block' }} />
    {slide.text && (
      <div style={{ textAlign: 'center', marginBlock: '2rem', position: 'relative' }}>
        {slide.text}
        {slide.icon && (
          <img
            src={slide.icon}
            alt=""
            style={{
              position: 'absolute',
              right: '20px',
              bottom: '-30px',
              width: '32px',
              height: '32px'
            }}
          />
        )}
      </div>
    )}
  </div>
      </SwiperSlide>
    ))}
  </Swiper>
);