import React from 'react';
import '../../index.css'
import s from './Header.module.css'
import Nav from './nav/Nav';

const Header = () => {
    return (
        <header className={s.header}>
            <div className="header-container">
                <Nav />
            </div>
        </header>
    );
};

export default Header;