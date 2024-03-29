import React from 'react';
import '../../../../index.css'
import Title2 from '../../../../UI/components/title2/Title2';

const StocksTitle = () => {
  return (
    <Title2 
      rightText='Лучшее по акции'
      hash='#'
      leftText='Больше скидок'
    />
  );
};

export default StocksTitle;