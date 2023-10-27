import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';

function Slider({ slides }) {
    const { slides: slideImages } = slides || { slides: [] };

    return (
        <div className='container-slider'>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop
            >
                {slideImages.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img src={`/${slide}`} alt={`Slide ${index + 1}`} className='img-slider' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;
