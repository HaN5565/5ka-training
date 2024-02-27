import React from 'react';
import '../../../index.css'
import s from './Title2.module.css'

const Title2 = ({ leftText, hash, rightText }) => {
  return (
    <div className={s.title}>
      <div className={s.titleLeft}>{leftText}</div>
      <a className={s.titleRight} href={hash}>
        {rightText}
        <svg width="6.913147" height="12.808128" viewBox="0 0 6.91315 12.8081" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs />
          <path id="Vector" d="M1.00409 1.00408L5.91321 6.25813L1.00409 11.8041" stroke="#302E33" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </a>
    </div>
  );
};

export default Title2;