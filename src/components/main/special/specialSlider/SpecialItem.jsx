import React from 'react';
import '../../../../index.css'
import s from './SpecialSlider.module.css'

const SpecialItem = () => {
  return (
    <div className={s.SpecialItem}>
      <div className={s.imgBlock}>
        {/* Блок с изображением */}
      </div>
      <div className={s.contentBlock}>
        <div className={s.title}>
          Акция 2+1 на все сыры из пальмового масла
        </div>
        <div className={s.subtitle}>
          До 26 мая 2020
        </div>
      </div>
    </div>
  );
};

export default SpecialItem;