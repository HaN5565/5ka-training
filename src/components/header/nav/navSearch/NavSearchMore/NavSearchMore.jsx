import React from 'react';
import '../../../../../index.css'
import s from './NavSearchMore.module.css'
import NavSearchMoreTop from './navSearchMoreTop/NavSearchMoreTop';
import NavSearchUl from './navSearchMoreBottom/NavSearchUl';

function NavSearchMore(props) {
  return (
    <div className={s.overlay}>
      <div className={s.NavSearchMore}>
        <div className={s.wrapper}>
          <NavSearchMoreTop handleVisibility={props.handleVisibility} />
          <NavSearchUl />
        </div>
      </div>
    </div>
  );
}

export default NavSearchMore;