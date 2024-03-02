import React from 'react';
import '../../../../index.css'
import s from './FooterRight.module.css'

const FooterRight = () => {
  return (
    <div className={s.FooterRight}>
      <div className={s.numberBlock}>
        <span className={s.number}>8-800-555-55-05</span>
        <span className={s.line}>Горячая линия</span>
      </div>
      <div className={s.politicsBlock}>
        <span className={s.politics}>Политика конфиденциальности</span>
        <span className={s.design}>Дизайн — Конечно, <span>MAX</span></span>
      </div>
    </div>
  );
};

export default FooterRight;