import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderDetails.module.css';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import icon from '../../images/done.svg'

function OrderDetails({ modalClose }) {

  return (
    <>
      <div className={styles.close} onClick={modalClose}>
        <CloseIcon type="primary" />
      </div>
      <div className={`${styles.id} mt-30 mb-8 text text_type_digits-large`}>034536</div>
      <div className={`${styles.discription} text text_type_main-medium`}>идентификатор заказа</div>
      <div className={styles.icon}>
        <img src={icon} alt={'icon'}/>
      </div>
      <p className={`${styles.text} mb-2 text text_type_main-default`}>Ваш заказ начали готовить</p>
      <p className={`${styles.text} mb-30 text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
    </>
  )
}

OrderDetails.propTypes = {
  modalClose: PropTypes.func.isRequired
}

export default OrderDetails;