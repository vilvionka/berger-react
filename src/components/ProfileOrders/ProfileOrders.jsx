import styles from './ProfileOrders.module.css';
import { FeedOrdersItem } from '../FeedOrdersItem/FeedOrdersItem';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getIngrediensSelector } from '../../services/ingredients/selector';
import { connect, disconnect } from "../../services/websocket/action";

let accessToken = '';
const accessTokenKey = localStorage.getItem('accessToken');
if (accessTokenKey) {
  accessToken = accessTokenKey.replace(/^.{7}/, '')
}

export const urlWebSocket = `wss://norma.nomoreparties.space/orders?token=${accessToken}`;

export const ProfileOrders = () => {

  const dispatch = useDispatch();

  const { orders } = useSelector(store => store.wsReducer);
  const { ingredient } = useSelector(getIngrediensSelector)

  useEffect(() => {
    dispatch(connect(urlWebSocket));
    return () => {
      dispatch(disconnect);
    }
  }, []);

  if (ingredient !== [] && orders.success === true) {

    return (
      <>
        <div className={`${styles.box} custom-scroll `}>
          {orders.orders.map((el, index) =>
            <FeedOrdersItem el={el} key={index} />
          )}
        </div>
      </>
    )
  } else {
    return (
      <>
        <p>Загрузка...</p>
      </>
    )
  }
}