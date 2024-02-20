import React from 'react';
import '../../../../index.css'
import s from '../Stocks.module.css'

const StocksTitle = () => {
  return (
    <div className={s.StocksTitle}>
      <div>Лучшее по акции</div>
      <a href="!#">
        Больше скидок
        <svg width="6.913147" height="12.808228" viewBox="0 0 6.91315 12.8082" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs />
          <path id="Vector" d="M1.00409 1.00415L5.91321 6.25818L1.00409 11.8042" stroke="#302E33" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </a>
    </div>
  );
};

export default StocksTitle;