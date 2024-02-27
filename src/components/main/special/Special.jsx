import React from 'react';
import '../../../index.css'
import s from './Special.module.css'
import SpecialTitle from './specialTitle/SpecialTitle';
import SpecialSlider from './specialSlider/SpecialSlider';

const Special = () => {
  return (
    <div className={s.Special}>
      <SpecialTitle />
      <SpecialSlider />
    </div>
  );
};

export default Special;