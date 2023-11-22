import React, { useEffect } from 'react';
import { useDispatch } from '../../services/type/index';
import PropTypes from 'prop-types';
import styles from './OrderDetails.module.css';
import Typography  from '@ya.praktikum/react-developer-burger-ui-components';
import Box  from '@ya.praktikum/react-developer-burger-ui-components';
import icon from '../../images/done.svg'
import { useSelector } from 'react-redux';
import { getOrderSelector } from '../../services/order/selector';
import { CLEAR } from '../../services/burgerConstructor/action';


function OrderDetails() {
  const { order, loading } = useSelector(getOrderSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: CLEAR,
    });
  }, []);

  if (order === null && loading === true) {
    return (
      <>
        <div className={styles.stub}>
          <p className={`${styles.text}  text text_type_main-medium`}>Заказ собирается...</p>
        </div>
      </>
    )
  }

  return (
    <>

      <div className={`${styles.id} mt-30 mb-8 text text_type_digits-large`}>{order !== null && order.order.number}</div>
      <div className={`${styles.discription} text text_type_main-medium`}>идентификатор заказа</div>
      <div className={styles.icon}>
        <img src={icon} alt={'icon'} />
      </div>
      <p className={`${styles.text} mb-2 text text_type_main-default`}>Ваш заказ начали готовить</p>
      <p className={`${styles.text} mb-30 text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
    </>
  )
}



export default OrderDetails;