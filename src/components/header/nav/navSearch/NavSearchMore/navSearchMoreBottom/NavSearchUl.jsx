import React, { useState } from 'react';
import '../../../../../../index.css'
import s from './NacSearchUl.module.css'

const NavSearchUl = () => {
  return (
    <div className={s.NavSearchUl}>
      <div className={s.radioGroup}>
        <input type="radio" id='radio-1' name='radio' value='1' checked />
        <label htmlFor="radio-1">Товары по акциям</label>
      </div>
      <div className={s.radioGroup}>
        <input type="radio" id='radio-2' name='radio' value='2' checked />
        <label htmlFor="radio-2">Рейтинг товаров</label>
      </div>
      <div className={s.radioGroup}>
        <input type="radio" id='radio-3' name='radio' value='3' checked />
        <label htmlFor="radio-3">Магазины</label>
      </div>
      <div className={s.radioGroup}>
        <input type="radio" id='radio-4' name='radio' value='4' checked />
        <label htmlFor="radio-4">Новости</label>
      </div>
    </div>
  );
};

export default NavSearchUl;