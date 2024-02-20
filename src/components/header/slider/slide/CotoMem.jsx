import React from 'react';
import s from './CotoMem.module.css'
import '../../../../index.css'

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
        <div className={s.right}>
          <div className={s.right1}></div>
          <div className={s.right2}></div>
          <div className={s.right3}>
            До <br /> 5 декабря
          </div>
        </div>
      </div>
    </div>
  );
};

export default CotoMem;