import React from 'react';
import '../../index.css'
import Stocks from './stocks/Stocks';
import Compilations from './compilations/Compilations';

const Main = () => {
  return (
    <main className='main-container'>
      <Stocks />
      <Compilations />
    </main>
  );
};

export default Main;