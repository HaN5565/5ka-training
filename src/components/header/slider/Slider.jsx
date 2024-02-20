import React from 'react';
import '../../../index.css'
import './Slider.css'
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SliderNavigation from './SliderNavigation';
import CotoMem from './slide/CotoMem';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay,]}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      loop={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      className='swiper-container'
    >
      <SwiperSlide><CotoMem /></SwiperSlide>
      <SwiperSlide><CotoMem /></SwiperSlide>
      <SwiperSlide><CotoMem /></SwiperSlide>
      <SwiperSlide><CotoMem /></SwiperSlide>
      <SwiperSlide><CotoMem /></SwiperSlide>
      <SwiperSlide><CotoMem /></SwiperSlide>
      <SliderNavigation />
    </Swiper>
  );
};

export default Slider;