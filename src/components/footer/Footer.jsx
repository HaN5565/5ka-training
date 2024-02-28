import React from 'react';
import '../../index.css'
import Scroll from './scroll/Scroll';
import FooterTitle from './footerTitle/FooterTitle';
import FooterInfo from './footerInfo/FooterInfo';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <Scroll />
      <FooterTitle />
      <FooterInfo />
    </footer>
  );
};

export default Footer;