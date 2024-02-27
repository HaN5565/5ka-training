import React from 'react';
import '../../../index.css'
import s from './Titile.module.css'

const Title = ({ text }) => {
  return (
    <div className={s.title}>
      {text}
    </div>
  );
};

export default Title;