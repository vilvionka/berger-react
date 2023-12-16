import React from 'react';
import PropTypes from 'prop-types';
import styles from './IngredientDetails.module.css';
import Typography  from '@ya.praktikum/react-developer-burger-ui-components';
import  Box  from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../services/type/index';
import { getIngrediensSelector } from '../../services/ingredients/selector';
import { useParams } from 'react-router-dom';
import { getIngrediensSelectorMain } from '../../services/ingredients/selector';
import { useEffect } from 'react';
import { loadIngredients } from '../../services/ingredients/action';
import { useDispatch } from '../../services/type/index';
import { Iingredient } from '../../services/type/index';



function IngredientDetails() {

  let { ingredientId } = useParams<{ingredientId: string ;}>();
  const data = useSelector(getIngrediensSelector);
  const elem = data.find(el => el._id === ingredientId);



  return (
    <>
      <div className={`${styles.modal_header} mt-10`}>
        <h5 className={'text text_type_main-large'}>Детали ингредиента</h5>
      </div>
      <div className={styles.img}>
        <img src={elem!.image} alt={elem!.name} />
      </div>
      <div className={`${styles.modal_name} text text_type_main-medium mt-4 mb-8`}>{elem!.name}</div>
      <div className={`${styles.discription} mb-15`}>
        <div>
          <p className={'text text_type_main-default'}>Калории,ккал</p>
          <span>{elem!.calories}</span>
        </div>
        <div>
          <p className={'text text_type_main-default'}>Белки, г</p>
          <span>{elem!.proteins}</span>
        </div>
        <div>
          <p className={'text text_type_main-default'}>Жиры, г</p>
          <span>{elem!.fat}</span>
        </div>
        <div>
          <p className={'text text_type_main-default'}>Углеводы, г</p>
          <span>{elem!.carbohydrates}</span>
        </div>
      </div>
    </>
  )
}



export default IngredientDetails;