import React from 'react';
import '../../../index.css'
import s from './FooterInfo.module.css'

const FooterInfo = () => {

  const state = [
    {
      id: 0,
      title: 'Title text',
      li: [],
    }
  ]


  
  return (
    <div className={s.FooterInfo}>
      {render}
    </div>
  );
};

export default FooterInfo;