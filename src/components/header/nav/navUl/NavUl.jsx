import React, { useState } from 'react';
import '../../../../index.css'
import s from '../Nav.module.css'
import NavUIMore from './NavUIMore';

const NavUl = () => {
    const [more, setMore] = useState(false)
    return (
        <>
            <ul className={s.NavUl}>
                <li className={s.NavUiItem}>
                    <img className={s.img} src="./img/stock.png" alt="stock" />
                    <a href="#">Акции</a></li>
                <li className={s.NavUiItem}>
                    <img className={s.img} src="./img/star.png" alt="star" />
                    <a href="#">Рейтинг</a></li>
                <li className={s.NavUiItem}>
                    <img className={s.img} src="./img/union.png" alt="stock" />
                    <a href="#">Магазины</a></li>
                <li className={s.NavUiItem}>
                    <img className={s.img} src="./img/exclude.png" alt="stock" />
                    <a href="#">Выручай-карта</a></li>
                <li className={more ? [s.NavUiItemActive] : [s.NavUiItem]}>
                    <img className={s.img} src="./img/more.png" alt="stock" />
                    <a onClick={() => setMore(!more)} href="#">Еще</a>
                </li>
            </ul>
            <NavUIMore more={more} />
        </>

    );
};

export default NavUl;