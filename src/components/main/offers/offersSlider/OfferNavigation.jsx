import React from 'react';
import '../../../../index.css'
import './OffersSlider.css'
import s from '../Offers.module.css'

const OfferNavigation = () => {
  return (
    <div className={s.OfferNavigation}>
      <div className='offer-button-prev'>
        <svg width="11.822266" height="20.908173" viewBox="0 0 11.8223 20.9082" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs />
          <path id="Vector" d="M1.00409 1.00409L10.8223 10.1987L1.00409 19.9041" stroke="#302E33" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </div>
      <div className='offer-button-next'>
        <svg width="11.822266" height="20.908173" viewBox="0 0 11.8223 20.9082" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs />
          <path id="Vector" d="M1.00409 1.00409L10.8223 10.1987L1.00409 19.9041" stroke="#302E33" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default OfferNavigation;