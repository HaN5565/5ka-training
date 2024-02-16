import React from 'react';
import '../../../index.css'
import './Slider.css'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{ el: '.swiper-pagination', clickable: true, }}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      className='swiper-container'
    >
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
      <SwiperSlide>4</SwiperSlide>
      <SwiperSlide>5</SwiperSlide>
      <SwiperSlide>6</SwiperSlide>
      <SwiperSlide>7</SwiperSlide>
      <div className="slider-controler">
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
};

export default Slider;