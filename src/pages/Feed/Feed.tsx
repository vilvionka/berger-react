import styles from "./Feed.module.css";
import { FeedOrders } from '../../components/FeedOrders/FeedOrders';
import { FeedList } from '../../components/FeedList/FeedList';
import Typography from '@ya.praktikum/react-developer-burger-ui-components'
import Box from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from '../../services/type/index'
import { useSelector } from '../../services/type/index';
import { store } from "../../services/store";
import { connect, disconnect } from "../../services/websocket/action";
import { useEffect } from 'react';
import { getIngrediensSelector } from '../../services/ingredients/selector'

export const urlWebSocket = 'wss://norma.nomoreparties.space/orders/all';

export const Feed = () => {
  const dispatch = useDispatch();

  const {orders} = useSelector(store => store.wsReducer);
  const data  = useSelector(getIngrediensSelector)

  useEffect(() => {
    dispatch(connect(urlWebSocket));
    return()=>{
      dispatch(disconnect());
    }
  }, []);
 
  if ( data.length> 0  && orders?.success === true ) {

    return (
      <>
        <div className={styles.container} >
          <h1 className="text text_type_main-large mb-5 mt-10">Лента заказов</h1>
          <div className={styles.box}>
            <div className={styles.left}>{<FeedOrders />}</div>
            <div className={styles.left}>{<FeedList />}</div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <p>Загрузка...</p>
    )
  }
}