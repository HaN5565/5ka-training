import React from 'react';
import '../../../index.css'
import s from './FooterInfoBlock.module.css'

const FooterInfoBlock = (props) => {
  return (
    <div className={s.FooterInfoBlock}>
      <h3 className={s.title}>{props.title}</h3>
      <ul className={s.ul}>
        <li className={`${s.listItem} ${props.off1}`}><a href='#'>{props.li1}</a></li>
        <li className={`${s.listItem} ${props.off2}`}><a href='#'>{props.li2}</a></li>
        <li className={`${s.listItem} ${props.off3}`}><a href='#'>{props.li3}</a></li>
        <li className={`${s.listItem} ${props.off4}`}><a href='#'>{props.li4}</a></li>
      </ul>
    </div>
  );
};

export default FooterInfoBlock;