import React from 'react';
import '../../../../index.css'
import s from '../Nav.module.css'

const NavUIMore = () => {
    return (
        <ul className={s.moreActive} >
            <li><a href="#">Сервис пакет</a></li>
            <li><a href="#">В вашу пользу</a></li>
            <li><a href="#">Новости пятерочки</a></li>
            <li><a href="#">Обратная связь</a></li>
            <li><a href="#">Доставка</a></li>
            <li><a href="#">Больше баллов</a></li>
            <li><a href="#">Еженедельные акции</a></li>
            <li><a href="#">Держим низкие цены</a></li>
            <li><a href="#">Правовая информация</a></li>
        </ul >
    );
};

export default NavUIMore;