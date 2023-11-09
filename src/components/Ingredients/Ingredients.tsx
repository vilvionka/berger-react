import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './Ingredients.module.css';
import Typography from '@ya.praktikum/react-developer-burger-ui-components';
import Box from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from "react-dnd";
import { useSelector } from 'react-redux';
import { getBurgerSelectorIngredients } from '../../services/burgerConstructor/selector';
import { getBurgerSelectorBun } from '../../services/burgerConstructor/selector';
import { useLocation, Link } from 'react-router-dom';
import { Iingredient } from '../../services/type/index';
import { type } from '@testing-library/user-event/dist/type';

interface IIngredientsProps {
  item: Iingredient;
}

function Ingredients(props:IIngredientsProps): JSX.Element {

  const {item} = props;

  const data: Iingredient[] = useSelector(getBurgerSelectorIngredients);
  const dataBun = useSelector(getBurgerSelectorBun);


  let counterUpdate = 0
  const counterUpdatee = useMemo(() => data.filter(element => element._id === item._id).length, [data])
  dataBun?._id === item._id ? counterUpdate = 2 : counterUpdate = 0




  const [{ isDrag }, dragRef] = useDrag({
    type: "animal",
    item: item,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });


  const location = useLocation();
  const ingredientId = item['_id'];



  return (


    <Link
      key={ingredientId}
      to={`/ingredients/${ingredientId}`}
      state={{ background: location }}
      className={`${styles.tab_box_item} mb-8`}>
      <li className={styles.tab_box_item_li} ref={dragRef} >
        <div className={styles.curent}>
          {item.type !== 'bun' && counterUpdatee !== 0 && <Counter count={counterUpdatee} size="default" extraClass="m-1" />}
          {item.type === 'bun' && counterUpdate !== 0 && <Counter count={counterUpdate} size="default" extraClass="m-1" />}
        </div>
        <img src={item.image} alt={item.name} />
        <div className={`${styles.price} mt-1 mb-4`}>
          <p className={'text text_type_digits-default mr-2'}>{item.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <span className={`${styles.name} mt-1 text text_type_main-default`}>{item.name}</span>
      </li>

    </Link>


  )
}




export default Ingredients;