import React from 'react';
import '../../../../index.css'
import s from './SpecialSlider.module.css'
import './SpecialSlider.css'

const SpecialNavigation = () => {
  return (
    <div className={s.SpecialNavigation}>
      <div className='special-button-prev'>
        <svg width="11.822266" height="20.908173" viewBox="0 0 11.8223 20.9082" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs />
          <path id="Vector" d="M1.00409 1.00409L10.8223 10.1987L1.00409 19.9041" stroke="#302E33" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </div>
      <div className='special-button-next'>
        <svg width="11.822266" height="20.908173" viewBox="0 0 11.8223 20.9082" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs />
          <path id="Vector" d="M1.00409 1.00409L10.8223 10.1987L1.00409 19.9041" stroke="#302E33" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default SpecialNavigation;