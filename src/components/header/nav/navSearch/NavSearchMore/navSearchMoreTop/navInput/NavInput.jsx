import React, { useState } from 'react';
import '../../../../../../../index.css'
import s from './NavInput.module.css'
import Magnifier from '../../../../../../../UI/svg/Magnifier'

const NavInput = () => {
  const [shadow, setShadow] = useState(false)
  const someHandler = () => { setShadow(!shadow) }
  return (
    <div className={shadow ? [s.inputWrapper, s.active].join(' ') : [s.inputWrapper]}>
      <button className={s.search}>
        <Magnifier svgClass={s.svg} pathClass={s.svgPath} />
      </button>
      <input onFocus={someHandler} onBlur={someHandler} className={s.input} placeholder='Поиск'
      />
    </div>
  );
};

export default NavInput;