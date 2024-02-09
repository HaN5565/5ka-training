import React, { useState } from 'react';
import '../../../../../../index.css'
import s from './NavSearchMoreTop.module.css'
import NavInput from './navInput/NavInput';
import NavButtons from './navButtons/NavButtons';

const NavSearchMoreTop = (props) => {
  return (
    <div className={s.NavSearchMoreTop}>
      <NavInput />
      <NavButtons handleVisibility={props.handleVisibility} />
    </div>
  );
};

export default NavSearchMoreTop;