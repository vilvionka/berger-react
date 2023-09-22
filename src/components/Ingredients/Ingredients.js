import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './Ingredients.module.css';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';
import { MORE_DETAILS } from '../../services/moreDetails/action';
import {getBurgerSelectorIngredients} from '../../services/burgerConstructor/selector';
import {getBurgerSelectorBun} from '../../services/burgerConstructor/selector';


function Ingredients({ item }) {
  const [state, setStatet] = React.useState(false);
  const data = useSelector(getBurgerSelectorIngredients);
  const dataBun = useSelector(getBurgerSelectorBun);
  

  const dispatch = useDispatch();
  let counterUpdate = 0
  const counterUpdatee = useMemo(() => data.filter(element => element._id === item._id).length, [data])
  dataBun?._id === item._id ? counterUpdate = 2 : counterUpdate = 0
  

  function modalOpen() {
    setStatet(true);
    dispatch({
      type: MORE_DETAILS,
      payload: { ...item }
    });
  }

  function modalClose() {
    setStatet(false);
  }
  const [{ isDrag }, dragRef] = useDrag({
    type: "animal",
    item: item ,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });



  let modalIngrediits;
  if (state) {
    modalIngrediits = <Modal modalClose={modalClose} >
      <IngredientDetails modalClose={modalClose} />
    </Modal>
  }
  return (
    !isDrag &&
    <>
      <li className={`${styles.tab_box_item} mb-8`} onClick={modalOpen} ref={dragRef} >
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
      {modalIngrediits}
    </>

  )
}

Ingredients.propTypes = {
  item: PropTypes.object.isRequired
}


export default Ingredients;