import React from 'react';
import '../../index.css'
import Scroll from './scroll/Scroll';
import FooterTitle from './footerTitle/FooterTitle';
import FooterInfo from './footerInfo/FooterInfo';
import FooterBottom from './footerBottom/FooterBottom';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <Scroll />
      <FooterTitle />
      <FooterInfo />
      <FooterBottom />
    </footer>
  );
};

export default Footer;