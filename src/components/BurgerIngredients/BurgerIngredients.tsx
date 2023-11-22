import React, { useState, useEffect } from 'react';
import styles from './BurgerIngredients.module.css';
import Ingredients from '../Ingredients/Ingredients';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import  Typography  from '@ya.praktikum/react-developer-burger-ui-components';
import  Box  from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../services/type/index';
import { useInView } from 'react-intersection-observer';
import {getIngrediensSelector} from '../../services/ingredients/selector';
import {Iingredient} from '../../services/type/index';






export function BurgerIngredients():JSX.Element{
  const [current, setCurrent] = useState('Булки');
  const datas:Iingredient[] = useSelector(getIngrediensSelector);
 

  const arrBun = datas.filter(el => el.type === 'bun');
  const arrSause = datas.filter(el => el.type === 'sauce');
  const arrMain = datas.filter(el => el.type === 'main');

  const [ref, inView] = useInView({
    threshold: 0.1
  });
  const [ref1, inView1] = useInView({
    threshold: 0.1
  });
  const [ref2, inView2] = useInView({
    threshold: 0.1
  });
  
  useEffect(() => {
    if (inView && inView1) {
      setCurrent('Булки')
    }
    if (!inView && inView1) {
      setCurrent('Соусы')
    }
    if (!inView1 && inView2) {
      setCurrent('Начинки')
    }

  }, [inView, inView1, inView2])


  return (
    <div className={styles.box}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={`${styles.tab} mb-10`}>
        <div className={styles.boxTab}>
          <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
      </div>
      <div className={`${styles.card} custom-scroll `}>
        <h3 className="mb-6 text text_type_main-medium">Булки</h3>
        <ul className={styles.tab_box_wrap} ref={ref}>
          {arrBun.map(el =>
            <Ingredients key={el._id} item={el} />
          )}
        </ul>
        <h3 className="mb-6 mt-2 text text_type_main-medium">Соусы</h3>
        <ul className={styles.tab_box_wrap} ref={ref1} >
          {arrSause.map(el =>
            <Ingredients key={el._id} item={el} />
          )}
        </ul>
        <h3 className="mb-6 mt-2 text text_type_main-medium">Начинки</h3>
        <ul className={styles.tab_box_wrap} ref={ref2}>
          {arrMain.map(el =>
            <Ingredients key={el._id} item={el} />
          )}
        </ul>
      </div>
    </div>
  )
}



