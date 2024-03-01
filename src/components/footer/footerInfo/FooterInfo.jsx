import React from 'react';
import '../../../index.css'
import s from './FooterInfo.module.css'
import FooterInfoBlock from '../../../UI/components/footerInfoBlock/FooterInfoBlock';

const FooterInfo = () => {
  return (
    <div className={s.FooterInfo}>
      <FooterInfoBlock 
        title='Покупателям'
        li1='Каталог акций'
        li2='Магазины'
        li3='Акции партнеров'
        off4={s.off}
      />
      <FooterInfoBlock 
        title='О Пятёрочке'
        li1='Новости компании'
        li2='Обратная связь'
        li3='Горячая линия по этике'
        li4='О компании'
      />
      <FooterInfoBlock 
        title='Карьера'
        li1='Вакансии в магазине'
        li2='Стажировка для студентов'
        off3={s.off}
        off4={s.off}
      />
      <FooterInfoBlock 
        title='Партнерам'
        li1='Поставщикам'
        li2='Аренда площадей'
        li3='Франшиза'
        off4={s.off}
      />
      <FooterInfoBlock 
        title='Детский клуб'
        li1='Преимущества клуба'
        li2='Партнеры клуба'
        li3='Акции клуба'
        li4='Статьи'
      />
    </div>
  );
};

export default FooterInfo;