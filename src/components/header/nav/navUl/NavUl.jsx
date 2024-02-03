import React, { useState } from 'react';
import '../../../../index.css'
import s from '../Nav.module.css'
import NavUIMore from './NavUIMore';
import { motion, AnimatePresence } from 'framer-motion'

const NavUl = () => {
    const [isVisible, setVisible] = useState(false)
    const handleVisibility = () => setVisible(!isVisible)
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
                <li className={isVisible ? [s.NavUiItemActive] : [s.NavUiItem]}>
                    <img className={s.img} src="./img/more.png" alt="stock" />
                    <a onClick={handleVisibility} href="#">Еще</a>
                </li>
            </ul>
            <AnimatePresence>
                {
                    isVisible && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <NavUIMore />
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>

    );
};

export default NavUl;