import React from 'react';
import PropTypes from 'prop-types';
import styles from './Ingredients.module.css';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';


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
    modalIngrediits = <Modal modalClose={modalClose} >
      <IngredientDetails item={item} modalClose={modalClose} />
    </Modal>
  }
  return (
    <>
      <li className={`${styles.tab_box_item} mb-8`} onClick={modalOpen}>
        <div className={styles.curent}>
          <Counter count={1} size="default" extraClass="m-1" />
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