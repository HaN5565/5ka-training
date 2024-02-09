import React from 'react';
import '../../../../../../../index.css'
import s from './NavButtons.module.css'

const NavButtons = ({ handleVisibility }) => {
  return (
    <>
      <button className={s.search}>Поиск</button>
      <button onClick={handleVisibility} className={s.close}>
        <svg className={s.svg} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
};

export default NavButtons;