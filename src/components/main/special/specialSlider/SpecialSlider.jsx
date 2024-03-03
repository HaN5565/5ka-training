import React from 'react';
import '../../../../index.css'
import s from './SpecialSlider.module.css'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import SpecialItem from './SpecialItem';
import SpecialNavigation from './SpecialNavigation';

const SpecialSlider = () => {
  return (
    <div className={s.SpecialSlider}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={20}
        navigation={{
          prevEl: '.special-button-prev',
          nextEl: '.special-button-next'
        }}
        className={s.swiper}
      >
        <SwiperSlide><SpecialItem /></SwiperSlide>
        <SwiperSlide><SpecialItem /></SwiperSlide>
        <SwiperSlide><SpecialItem /></SwiperSlide>
        <SwiperSlide><SpecialItem /></SwiperSlide>
        <SwiperSlide><SpecialItem /></SwiperSlide>
      </Swiper>
      <SpecialNavigation />
    </div>
  );
};

export default SpecialSlider;