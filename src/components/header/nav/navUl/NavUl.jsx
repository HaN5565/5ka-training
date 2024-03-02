import React, { useState } from 'react';
import '../../../../index.css'
import s from './NavUI.module.css'
import NavUIMore from './NavUIMore';
import { motion, AnimatePresence } from 'framer-motion'

const NavUl = () => {
    const [isVisible, setVisible] = useState(false)
    const handleVisibility = () => setVisible(!isVisible)
    return (
        <>
            <ul className={s.NavUl}>
                <li className={s.item}>
                    <a href="#">
                        <img className={s.img} src="./img/stock.png" alt="stock" />
                        <span>Акции</span>
                    </a>
                </li>
                <li className={s.item}>
                    <a href="#">
                        <img className={s.img} src="./img/star.png" alt="star" />
                        <span>Рейтинг</span>
                    </a>
                </li>
                <li className={s.item}>
                    <a href="#">
                        <img className={s.img} src="./img/union.png" alt="stock" />
                        <span>Магазины</span>
                    </a>
                </li>
                <li className={s.item}>
                    <a href="#">
                        <img className={s.img} src="./img/exclude.png" alt="stock" />
                        <span>Выручай-карта</span>
                    </a>
                </li>
                <li className={isVisible ? [s.itemActive] : [s.item]}>
                    <a onClick={handleVisibility} href="#">
                        <img className={s.img} src="./img/more.png" alt="stock" />
                        <span>Еще</span>
                    </a>
                </li>
            </ul>
            <AnimatePresence>
                {
                    isVisible && (
                        <motion.div>
                            <NavUIMore />
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>

    );
};

export default NavUl;