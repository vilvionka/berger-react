import styles from './FeedOrders.module.css';
import { FeedOrdersItem } from '../FeedOrdersItem/FeedOrdersItem';
import { useSelector } from "react-redux";

export const FeedOrders = () =>{

  const {orders} = useSelector(store => store.wsReducer);

  return(
    <>
    <div className={`${styles.box} custom-scroll `}>
      {orders.orders.map((el, index) =>
        <FeedOrdersItem el={el} key = {index}/>
      )}
    </div>
    </>
  )
}