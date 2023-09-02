import React from 'react';
import styles from './BurgerIngredients.module.css';
import Ingredients from '../Ingredients/Ingredients';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import TabBox from '../TabBox/TabBox';


function BurgerIngredients({ data }) {
  const [state, setState] = React.useState(false);
  const arrBun = data.filter(el => el.type === 'bun');
  const arrSause = data.filter(el => el.type === 'sauce');
  const arrMain = data.filter(el => el.type === 'main');

  function modalOpen(){
    setState(true);
    console.log(state);
  }

  return (
    <div className={styles.box}>
      <TabBox />
      <div className={`${styles.card} custom-scroll`}>
        <h3 className="mb-6 text text_type_main-medium">Булки</h3>
        <ul className={styles.tab_box_wrap}>
          {arrBun.map(el =>
            <Ingredients key={el._id} item={el} onOpen = {modalOpen} />
          )}
        </ul>
        <h3 className="mb-6 mt-2 text text_type_main-medium">Соусы</h3>
        <ul className={styles.tab_box_wrap}>
          {arrSause.map(el =>
            <Ingredients key={el._id} item={el} onOpen = {modalOpen} />
          )}
        </ul>
        <h3 className="mb-6 mt-2 text text_type_main-medium">Начинки</h3>
        <ul className={styles.tab_box_wrap}>
          {arrMain.map(el =>
            <Ingredients key={el._id} item={el} onOpen = {modalOpen}/>
          )}
        </ul>
      </div>
    </div>
  )
}


export default BurgerIngredients;