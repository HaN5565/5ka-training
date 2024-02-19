import React from 'react';
import '../../../index.css'
import './Slider.css'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SliderNavigation from './SliderNavigation';
import CotoMem from './slide/CotoMem';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation,]}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }}
      loop={true}
      // autoplay={{
      //   delay: 5000,
      //   pauseOnMouseEnter: true,
      //   disableOnInteraction: false,
      // }}
      centeredSlides={true}
      slidesPerView={'auto'}
      className='swiper-container'
    >
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
      <SwiperSlide>4</SwiperSlide>
      <SwiperSlide>5</SwiperSlide>
      <SwiperSlide><CotoMem /></SwiperSlide>
      <SliderNavigation />
    </Swiper>
  );
};

export default Slider;