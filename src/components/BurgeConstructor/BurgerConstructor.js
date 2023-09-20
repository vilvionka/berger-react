import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useMemo, useCallback } from 'react';
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ADD_INGREDIENT, UPDATE_INGREDIENT } from '../../services/burgerConstructor/action';
import {ORDER} from '../../services/order/action';
import { BurgerElement } from '../BurgerElement/BurgerElement';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import styles from './BurgerConstructor.module.css';




function BurgerConstructor() {
  const [state, setState] = React.useState(false);
  const data = useSelector(store => store.BurgerConstructorReducer.burgerConstructor);
  const dataBun = useSelector(store => store.BurgerConstructorReducer.bun);
  const burgersData = useSelector(store => store.BurgerConstructorReducer);

   //console.log(data);
  // console.log(dataBun);


  const dispatch = useDispatch();

  const [, dropTarget] = useDrop({
    accept: "animal",
    drop(item) {
      dispatch({
        type: ADD_INGREDIENT,
        payload: { ...item, key: uuidv4() }
      });
    },
  });

  function modalOpen() {
    setState(true);
    dispatch({
      type: ORDER,
       key: uuidv4()
    });
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

 // const arr = [1,2,3,4,5];
 //  arr.splice(2, 0, arr.splice(3, 1)[0]);
 //  console.log(arr);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    console.log(dragIndex, hoverIndex);
    dispatch({
      type: UPDATE_INGREDIENT,
      dragIndex,
      hoverIndex
    });
  }, [])


  const totalPrice = useMemo(() => {
    let sum = 0;
    if (data.length > 0) {
      let value = 0
      sum = data.reduce((accumulator, item) => {
        return accumulator + Number(item.price)
      }, value)
    }
    let sumBun = 0;
    if (Object.keys(dataBun).length > 0) {
      sumBun = dataBun.price * 2;
    }
   return sum + sumBun;
  }, [burgersData])


  return (
    <>
      <div className={styles.box} ref={dropTarget}>

        <div className={styles.box_burger}>
          <div className={styles.box_constructor_bun} >
            {Object.keys(dataBun).length > 0 && <ConstructorElement
              key={dataBun.key}
              type={'top'}
              isLocked={true}
              text={dataBun.name + '(верх)'}
              price={dataBun.price}
              thumbnail={dataBun.image} />

            }
          </div>
          <div className={`${styles.box_constructor} custom-scroll`} >
            {data.length > 0 && data.map((el, index) =>
              <BurgerElement el={el} key={el.key} moveCard={moveCard} index={index}/>
            )}
          </div>
          <div className={styles.box_constructor_bun}>
            {Object.keys(dataBun).length > 0 &&
              <ConstructorElement
                key={dataBun.key}
                type={'bottom'}
                isLocked={true}
                text={dataBun.name + '(низ)'}
                price={dataBun.price}
                thumbnail={dataBun.image} />
            }
          </div>
        </div>


        <div className={`${styles.price} mt-10`}>
          <div className={`${styles.price_box} mr-10`}>
            <p className={'text text_type_digits-medium mr-2'}>{totalPrice}</p>
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




export default BurgerConstructor;