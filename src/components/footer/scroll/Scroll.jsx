import React from 'react';
import '../../../index.css'
import s from './Scroll.module.css'

const Scroll = () => {
  return (
    <div className={s.Scroll}>
      <div className={`${s.circle} ${s.circleTop}`}>
        {/* Круг для блока */}
      </div>
      <div className={s.text}>
        <span className={s.title}>16 385</span>
        <span className={s.subtitle}>магазинов в России</span>
      </div>
      <div className={`${s.circle} ${s.circleBottom}`}>
        {/* Круг для блока */}
      </div>
    </div>
  );
};

export default Scroll;