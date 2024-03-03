import React from 'react';
import '../../../../index.css'
import s from '../Offers.module.css'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import OffersItem from './OffersItem';
import OfferNavigation from './OfferNavigation';
import OffersItem2 from './OffersItem2';
import OffersItem3 from './OffersItem3';

const OffersSlider = () => {
  return (
    <div className={s.OffersSlider}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          prevEl: '.offer-button-prev',
          nextEl: '.offer-button-next'
        }}
        className='offers-slider'
      >
        <SwiperSlide><OffersItem /></SwiperSlide>
        <SwiperSlide><OffersItem2 /></SwiperSlide>
        <SwiperSlide><OffersItem3 /></SwiperSlide>
        <SwiperSlide><OffersItem /></SwiperSlide>
        <SwiperSlide><OffersItem2 /></SwiperSlide>
        <SwiperSlide><OffersItem3 /></SwiperSlide>
      </Swiper>
      <OfferNavigation />
    </div>
  );
};

export default OffersSlider;