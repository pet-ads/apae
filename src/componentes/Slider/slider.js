import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import sliderData from './sliderData.json';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './slider.css';

function Slider() {
  const { slides, thumbs } = sliderData;

  return (
    <div className='container-slider'>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation 
        pagination={{ clickable: true }} 
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={`/${slide}`} alt={`Slide ${index + 1}`} className='img-slider' />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={(swiper) => (window.thumbsSwiper = swiper)}
        spaceBetween={15} 
        slidesPerView={5}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        className='thumbs-slider'
      >
        {thumbs.map((thumb, index) => (
          <SwiperSlide key={index}>
            <img src={`/${thumb}`} alt={`Thumb ${index + 1}`} className='thumb' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
