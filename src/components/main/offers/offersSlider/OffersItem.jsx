import React from 'react';
import '../../../../index.css'
import s from '../Offers.module.css'

const OffersItem = () => {
  return (
    <div className={s.OffersItem}>
      <div className={s.imgBlock}>
        <img src="./img/skyeng.png" alt="" />
      </div>
      <div className={s.bottom}>
        <span>500 бонусов за покупку в Литреc</span>
      </div>
    </div>
  );
};

export default OffersItem;