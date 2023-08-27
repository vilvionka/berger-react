import React from 'react';
import styles from './BurgerConstructor.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';


function BurgerConstructor({ data }) {
  const [current, setCurrent] = React.useState('Булки');
  const arrBun = data.filter(el => el.type === 'bun');
  const arrSause = data.filter(el => el.type === 'sauce');
  const arrMain = data.filter(el => el.type === 'main');
  return (
    <div className={styles.box}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={styles.tab}>
        <div style={{ display: 'flex' }}>
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
      <div className={styles.tab_box}>
        <h3 className="mb-6 mt-10 text text_type_main-medium">Булки</h3>
        <ul className={styles.tab_box_wrap}>
          {arrBun.map(el =>
            <li key={el._id} className={`${styles.tab_box_item} mb-8`}>
                <img src={el.image} alt={'img'} />
                <div className={`${styles.price} mt-1 mb-4`}>
                  <p className={'text text_type_digits-default mr-2'}>{el.price}</p>
                  <CurrencyIcon type="primary" />
                </div>
                <span className={`${styles.name} mt-1 text text_type_main-default`}>{el.name}</span>
            </li>
          )}
        </ul>
        <h3 className="mb-6 mt-10 text text_type_main-medium">Соусы</h3>
        <ul className={styles.tab_box_wrap}>
          {arrSause.map(el =>
            <li key={el._id} className={`${styles.tab_box_item} mb-8`}>
                <img src={el.image} alt={'img'} />
                <div className={`${styles.price} mt-1 mb-4`}>
                  <p className={'text text_type_digits-default mr-2'}>{el.price}</p>
                  <CurrencyIcon type="primary" />
                </div>
                <span className={`${styles.name} mt-1 text text_type_main-default`}>{el.name}</span>
            </li>
          )}
        </ul>
        <h3 className="mb-6 mt-10 text text_type_main-medium">Начинки</h3>
        <ul className={styles.tab_box_wrap}>
          {arrMain.map(el =>
            <li key={el._id} className={`${styles.tab_box_item} mb-8`}>
                <img src={el.image} alt={'img'} />
                <div className={`${styles.price} mt-1 mb-4`}>
                  <p className={'text text_type_digits-default mr-2'}>{el.price}</p>
                  <CurrencyIcon type="primary" />
                </div>
                <span className={`${styles.name} mt-1 text text_type_main-default`}>{el.name}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}


export default BurgerConstructor;