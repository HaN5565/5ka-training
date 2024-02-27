import React from 'react';
import '../../../index.css'
import s from './Leaders.module.css'
import LeadearsTitile from './leadersTitle/LeadearsTitle';
import StocksItems from '../stocks/stocksItems/StocksItems';

const Leaders = () => {
  return (
    <div className={s.Leaders}>
      <LeadearsTitile />
      <StocksItems />
    </div>
  );
};

export default Leaders;