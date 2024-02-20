import React from 'react';
import '../../../../index.css'
import s from './StocksItems.module.css'
import StockItem from './StockItem';

const StocksItems = () => {
  return (
    <div className={s.StocksItems}>
      <StockItem />
      <StockItem />
      <StockItem />
      <StockItem />
      <StockItem />
    </div>
  );
};

export default StocksItems;