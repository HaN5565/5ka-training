import React from 'react';
import '../../../index.css'
import s from './Offers.module.css'
import OffersTitle from './offersTitle/OffersTitle';
import OffersSlider from './offersSlider/OffersSlider';

const Offers = () => {
  return (
    <div className={s.Offers}>
      <OffersTitle />
      <OffersSlider />
    </div>
  );
};

export default Offers;