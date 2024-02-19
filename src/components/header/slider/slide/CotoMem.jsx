import React from 'react';
import s from './CotoMem.module.css'

const CotoMem = () => {
  return (
    <div className={s.CotoMem}>
      <div className={s.text}>
        <span className={s.textTop}> Котомемов много </span>
        <span className={s.textBottom}> не бывает! </span>
      </div>
      <div className={s.main}>
        <div className={s.center}></div>
        <div className={s.left}>
          <span className={s.leftTop}>
            Шанс выиграть
          </span>
          <span className={s.leftBottom}>
            1 млн <span>₽</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CotoMem;