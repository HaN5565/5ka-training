import React from 'react';
import '../../index.css'
import Stocks from './stocks/Stocks';
import Compilations from './compilations/Compilations';
import Special from './special/Special';
import Leaders from './leaders/Leaders';
import Offers from './offers/Offers';

const Main = () => {
  return (
    <main className='main-container'>
      <Stocks />
      <Compilations />
      <Special />
      <Leaders />
      <Offers />
    </main>
  );
};

export default Main;