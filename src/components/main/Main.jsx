import React from 'react';
import '../../index.css'
import Stocks from './stocks/Stocks';
import Compilations from './compilations/Compilations';
import Special from './special/Special';

const Main = () => {
  return (
    <main className='main-container'>
      <Stocks />
      <Compilations />
      <Special />
    </main>
  );
};

export default Main;