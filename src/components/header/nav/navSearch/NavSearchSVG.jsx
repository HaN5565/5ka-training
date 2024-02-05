import React from 'react';
import '../../../../index.css'
import s from './NavSearch.module.css'
import Magnifier from '../../../../UI/svg/Magnifier';
import Profile from '../../../../UI/svg/Profile';

const NavSearchSVG = (props) => {
  return (
    <>
      <Magnifier onClickLogic={props.onClickLogic} svgClass={s.magnifier} pathClass={s.black} />
      <div className={s.profile}>
        <Profile svgClass={s.profileSvg} />
      </div>
    </>
  );
};

export default NavSearchSVG;