import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredients.module.css';
import Ingredients from '../Ingredients/Ingredients';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import TabBox from '../TabBox/TabBox';
import {useSelector} from 'react-redux';



function BurgerIngredients() {
  //@ts-ignore
 // const { datas } = useSelector(state => ({ datas: store.ingredient.data}));
  const datas = useSelector(state => state.ingredient.data);
  console.log(datas);
  
 
  
    
    const  arrBun = datas.filter(el => el.type === 'bun');
    const  arrSause = datas.filter(el => el.type === 'sauce');
    const  arrMain = datas.filter(el => el.type === 'main');
   
  


  return (
     <div className={styles.box}>
      <TabBox />
      <div className={`${styles.card} custom-scroll`}>
        <h3 className="mb-6 text text_type_main-medium">Булки</h3>
        <ul className={styles.tab_box_wrap}>
          {arrBun.map(el =>
            <Ingredients key={el._id} item={el} />
          )}
        </ul>
        <h3 className="mb-6 mt-2 text text_type_main-medium">Соусы</h3>
        <ul className={styles.tab_box_wrap}>
          {arrSause.map(el =>
            <Ingredients key={el._id} item={el} />
          )}
        </ul>
        <h3 className="mb-6 mt-2 text text_type_main-medium">Начинки</h3>
        <ul className={styles.tab_box_wrap}>
          {arrMain.map(el =>
            <Ingredients key={el._id} item={el} />
          )}
        </ul>
      </div>
    </div> 
  )
}

//BurgerIngredients.propTypes = {
 //datam: PropTypes.array.isRequired
//}



export default BurgerIngredients;