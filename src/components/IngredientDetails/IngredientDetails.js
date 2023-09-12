import React from 'react';
import PropTypes from 'prop-types';
import styles from './IngredientDetails.module.css';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function IngredientDetails({item}) {

  return (
    <>
      <div className={`${styles.modal_header} mt-10`}>
        <h5 className={'text text_type_main-large'}>Детали ингредиента</h5>
      </div>
      <div className={styles.img}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={`${styles.modal_name} text text_type_main-medium mt-4 mb-8`}>{item.name}</div>
      <div className={`${styles.discription} mb-15`}>
        <div>
          <p className={'text text_type_main-default'}>Калории,ккал</p>
          <span>{item.calories}</span>
        </div>
        <div>
          <p className={'text text_type_main-default'}>Белки, г</p>
          <span>{item.proteins}</span>
        </div>
        <div>
          <p className={'text text_type_main-default'}>Жиры, г</p>
          <span>{item.fat}</span>
        </div>
        <div>
          <p className={'text text_type_main-default'}>Углеводы, г</p>
          <span>{item.carbohydrates}</span>
        </div>
      </div>
    </>
  )
}

IngredientDetails.propTypes = {
  item: PropTypes.object.isRequired
}

export default IngredientDetails;