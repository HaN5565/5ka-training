import React from 'react';
import '../../../../index.css'
import s from './CompilationItem.module.css'

const CompilationItem = () => {

  const state = [
    { id: 0, img: './img/item1.png', span1: 'Лучшее по акции', span2: 'Находи со скидкой' },
    { id: 1, img: './img/item2.png', span1: 'Лидеры рейтинга', span2: 'Топ-100 товаров' },
    { id: 2, img: './img/item3.png', span1: 'Только в  «Пятёрочке»', span2: 'Товары СТМ' },
    { id: 3, img: './img/item4.png', span1: 'Каталог', span2: 'Проверьте рейтинг' },
  ]

  const stateItems = state.map(item =>
    <div key={item.id} className={s.CompilationItem}>
      <div className={s.imgBlock}>
        <img className={s.img} src={item.img} alt="" />
      </div>
      <div className={s.bottom}>
        <span className={s.span1}>{item.span1}</span>
        <span className={s.span2}>{item.span2}</span>
      </div>
    </div>
  )

  return (
    <>{stateItems}</>
  );
};

export default CompilationItem;