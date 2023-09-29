import React from 'react';
import PropTypes from 'prop-types';
import styles from './IngredientDetails.module.css';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {useSelector} from 'react-redux';
import {getDetalsSelector} from '../../services/moreDetails/selector';

function IngredientDetails() {

  const {details} = useSelector(getDetalsSelector);
  console.log(details)

  return (
    <>
      <div className={`${styles.modal_header} mt-10`}>
        <h5 className={'text text_type_main-large'}>Детали ингредиента</h5>
      </div>
      <div className={styles.img}>
        <img src={details.image} alt={details.name} />
      </div>
      <div className={`${styles.modal_name} text text_type_main-medium mt-4 mb-8`}>{details.name}</div>
      <div className={`${styles.discription} mb-15`}>
        <div>
          <p className={'text text_type_main-default'}>Калории,ккал</p>
          <span>{details.calories}</span>
        </div>
        <div>
          <p className={'text text_type_main-default'}>Белки, г</p>
          <span>{details.proteins}</span>
        </div>
        <div>
          <p className={'text text_type_main-default'}>Жиры, г</p>
          <span>{details.fat}</span>
        </div>
        <div>
          <p className={'text text_type_main-default'}>Углеводы, г</p>
          <span>{details.carbohydrates}</span>
        </div>
      </div>
    </>
  )
}



export default IngredientDetails;