import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';



function BurgerConstructor({ data }) {
  const [state, setState] = React.useState(false);

  function modalOpen() {
    setState(true);
  }
  function modalClose() {
    setState(false);
  }
  let modalBurger;
  if (state) {
    modalBurger = <Modal modalClose={modalClose}>
      <OrderDetails />
    </Modal>
  }

  return (
    <>
      <div className={styles.box}>
        <div className={styles.box_burger}>
          <div className={styles.box_constructor_bun}>
            <ConstructorElement
              key={data[0]._id}
              type={'top'}
              isLocked={true}
              text={data[0].name + '(верх)'}
              price={data[0].price}
              thumbnail={data[0].image}
            />
          </div>
          <div className={`${styles.box_constructor} custom-scroll`}>
            {data.map(el =>
              el.type !== "bun" &&
              <div className={styles.block} key={el._id}>
                <div className={"mr-2"} >
                  <DragIcon type="primary" />
                </div>
                <ConstructorElement
                  text={el.name}
                  price={el.price}
                  thumbnail={el.image}
                />
              </div>
            )}
          </div>
          <div className={styles.box_constructor_bun}>
            <ConstructorElement
              key={data[0]._id}
              type={'bottom'}
              isLocked={true}
              text={data[0].name + '(низ)'}
              price={data[0].price}
              thumbnail={data[0].image}
            />
          </div>
        </div>
        <div className={`${styles.price} mt-10`}>
          <div className={`${styles.price_box} mr-10`}>
            <p className={'text text_type_digits-medium mr-2'}>610</p>
            <CurrencyIcon type="primary" />
          </div>
          <div className={styles.price_buuton} onClick={modalOpen}>
            <Button htmlType="button" type="primary" size="medium" >
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>
      {modalBurger}
    </>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.array.isRequired
}


export default BurgerConstructor;