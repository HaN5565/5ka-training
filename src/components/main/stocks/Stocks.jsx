import React from 'react';
import '../../../index.css'
import s from './Stocks.module.css'
import StocksTitle from './stocksTitle/StocksTitle';
import StocksItems from './stocksItems/StocksItems';

const Stocks = () => {
  return (
    <div className={s.Stocks}>
      <StocksTitle />
      <StocksItems />
    </div>
  );
};

export default Stocks;