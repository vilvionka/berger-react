import React from 'react';
import styles from './Ingredients.module.css';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';


function Ingredients({ item }) {
  const [statet, setStatet] = React.useState(false);

  function modalOpen() {
    setStatet(true);
  }
  function modalClose() {
    setStatet(false);
  }

  let modalIngrediits;
  if (statet) {
    modalIngrediits = <Modal >
      <IngredientDetails item={item} modalClose = {modalClose}/>
    </Modal>
  }
  return (
    <>
      <li className={`${styles.tab_box_item} mb-8`} onClick={modalOpen}>
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


export default Ingredients;