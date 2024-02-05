import React from 'react';
import '../../../../../../index.css'
import s from './NavSearchMoreTop.module.css'
import Magnifier from '../../../../../../UI/svg/Magnifier'

const NavSearchMoreTop = () => {
  return (
    <div className={s.NavSearchMoreTop}>
      <div className={s.inputWrapper}>
        <button className={s.search}>
          <Magnifier svgClass={s.svg} pathClass={s.svgPath} />
        </button>
        <input className={s.input} placeholder='Поиск' />
      </div>
      <button>Поиск</button>
      <button></button>
    </div>
  );
};

export default NavSearchMoreTop;