import React from 'react';
import '../../../index.css'
import s from './FooterBottom.module.css'
import FooterConnection from './footerConnection/FooterConnection'
import FooterRight from './footerRight/FooterRight';

const FooterBottom = () => {
  return (
    <div className={s.FooterBottom}>
      <FooterConnection />
      <FooterRight />
    </div>
  );
};

export default FooterBottom;