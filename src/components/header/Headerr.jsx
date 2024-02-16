import React from 'react';
import '../../index.css'
import s from './Header.module.css'
import Nav from './nav/Nav';
import Slider from './slider/Slider';

const Header = () => {
    return (
        <header className={s.header}>
            <div className="header-container">
                <Nav />
                <Slider />
            </div>
        </header>
    );
};

export default Header;