import React from 'react';
import '../../../../index.css'
import s from './StocksItems.module.css'

const StockItem = () => {
  return (
    <div className={s.StockItem}>
      <div className={s.main}>
        <div className={s.sale}>
          -15%
        </div>
      </div>
      <div className={s.bottom}>
        <div className={s.price}>
          <div className={s.priceLeft}>
            <span className={s.span1}>от</span>
            <span className={s.span2}>255</span>
          </div>
          <div className={s.priceRight}>
            <span className={s.span1}>99</span>
            <del className={s.del}>326.99</del>
          </div>
        </div>
        <div className={s.name}>
          Клубника красная органика...
        </div>
        <div className={s.timer}>
          <svg className={s.svg} width="13.000000" height="13.000000" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs />
            <path id="Union" d="M13 6.5C13 10.0898 10.0898 13 6.5 13C2.91016 13 0 10.0898 0 6.5C0 2.91016 2.91016 0 6.5 0C10.0898 0 13 2.91016 13 6.5ZM11 6.5C11 8.98529 8.98529 11 6.5 11C4.01471 11 2 8.98529 2 6.5C2 4.01471 4.01471 2 6.5 2C8.98529 2 11 4.01471 11 6.5ZM5.875 6.53113L5.875 6.53125C5.875 6.82465 6.11285 7.0625 6.40625 7.0625L6.41776 7.06238L9.09375 7.06238C9.38715 7.06238 9.625 6.82452 9.625 6.53113C9.625 6.23773 9.38715 5.99988 9.09375 5.99988L6.9375 5.99988L6.9375 3.84375C6.9375 3.55035 6.69965 3.3125 6.40625 3.3125C6.11285 3.3125 5.875 3.55035 5.875 3.84375L5.875 6.53113Z" clipRule="evenodd" fill="#000000" fillOpacity="1.000000" fillRule="evenodd" />
          </svg>
          до 15 июня
        </div>
      </div>
    </div>
  );
};

export default StockItem;