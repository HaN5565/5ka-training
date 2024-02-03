import React from 'react';
import '../../../index.css'
import s from './Nav.module.css'
import NavLogo from './NavLogo';
import NavUl from './navUl/NavUl';
import NavSearch from './NavSearch';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <NavLogo />
            <NavUl />
            <NavSearch />
        </nav>
    );
};

export default Nav;