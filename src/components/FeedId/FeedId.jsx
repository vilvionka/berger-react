import styles from './FeedId.module.css';
import bun from '../../images/bun-01.png';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { getIngrediensSelectorMain } from '../../services/ingredients/selector';
import { getProjectOrder } from '../../utils/ingredient-api';


export const FeedId = () => {
  const [order, setOrder] = useState('');
  const { ingredient } = useSelector(getIngrediensSelectorMain);

  const { feedId } = useParams();

  const Data = new Date();
  const Day = Data.getDate();

  useEffect(() => {
    getProjectOrder(feedId).then((res) => {
      setOrder(res.orders[0]);
    });
  }, []);


  
  if (order == '') {
    return (
      <>
        <p>Загрузка...</p>
      </>
    )
  } else {


    const priceArr = [];
    for (let i = 0; i < order.ingredients.length; i++) {
      let elems = order.ingredients[i]
      ingredient.map(j => j._id == elems && priceArr.push(j.price))
    }
    const sum = priceArr.reduce((acc, number) => acc + number, 0);
    const dateOrder = order.updatedAt.slice(0, -8);

    const duplicates = order.ingredients.filter((number, index, numbers) => {
      return numbers.indexOf(number) !== index;
    });
    const resObject = order.ingredients.reduce((acc, i) => {
      if (acc.hasOwnProperty(i)) {
        acc[i] += 1;
      } else {
        acc[i] = 1;
      }
      return acc;
    }, {})
    const ordersObject = Object.entries(resObject)
    for (let i = 0; i < ordersObject.length; i++) {
      let elems = ordersObject[i]
      ingredient.map(j => j._id == elems[0] && elems.push(j.price))
    }
    for (let i = 0; i < ordersObject.length; i++) {
      let elems = ordersObject[i]
      ingredient.map(j => j._id == elems[0] && elems.push(j.image_mobile))
    }
    for (let i = 0; i < ordersObject.length; i++) {
      let elems = ordersObject[i]
      ingredient.map(j => j._id == elems[0] && elems.push(j.name))
    }

    return (
      <>
        <div className={styles.box}>
          <div className={`${styles.number} text text_type_digits-default pt-8`}>#{order.number}</div>
          <h3 className='text text_type_main-medium mb-3 mt-10'>{order.name}</h3>
          <p className='text text_type_main-default text_color_inactive mb-15'>{order.status === 'done' ? 'Выполнен' : 'Готовиться'}</p>
          <p className='text text_type_main-medium mb-6'>Состав:</p>
          <div className={`${styles.ingredient} custom-scroll`}>
            {ordersObject.map((item, index) =>
              <div className={styles.item} key={index}>
              <div className={styles.flex}>
                <div className={styles.img}>
                  <img src={item[3]} alt="img" />
                </div>
                <p className="text text_type_main-default ml-4">{item[4]}</p>
              </div>
              <div className={styles.discription}>
                <p className='text text_type_digits-default mr-2'>{item[1]}</p>
                <p className="text text_type_digits-default mr-2">x</p>
                <p className="text text_type_digits-default mr-2">{item[2]*item[1]}</p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
            )}
          </div>
          <div className={`${styles.bottom} mt-10 pb-8`}>
            <p className='text text_type_main-default text_color_inactive'>{dateOrder.slice(8, 10) == Day ? 'Сегодня' : (dateOrder.slice(8, 10) - Day) > 1 ? (dateOrder.slice(8, 10) - Day) + "дня(-ей) назад" : "Вчера"}, {dateOrder.slice(11)}</p>
            <div className={styles.total}>
              <p className='text text_type_digits-default mr-2'>{sum}</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      </>
    )
  }
}