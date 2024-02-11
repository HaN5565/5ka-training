import React, { useState } from 'react';
import '../../../../../../index.css'
import s from './NacSearchUl.module.css'

const NavSearchUl = () => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <ul className={s.NavSearchUl}>
      <li className={active ? [s.active] : [s.disabled]} onClick={handleClick}>Товары по акциям</li>
      <li className={active ? [s.active] : [s.disabled]} onClick={handleClick}>Рейтинг товаров</li>
      <li className={active ? [s.active] : [s.disabled]} onClick={handleClick}>Магазины</li>
      <li className={active ? [s.active] : [s.disabled]} onClick={handleClick}>Новости</li>
    </ul>
  );
};

export default NavSearchUl;