import React from 'react';
import '../../../../index.css'
import s from './NavLogo.module.css'

const NavLogo = () => {
    return (
        <div className={s.NavLogo}>
            <img src="./img/logo.png" alt="logo" />
            <span>Москва</span>
        </div>
    );
};

export default NavLogo;