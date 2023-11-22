import styles from './FeedOrders.module.css';
import { FeedOrdersItem } from '../FeedOrdersItem/FeedOrdersItem';

export const FeedOrders = () =>{
  return(
    <>
    <div className={`${styles.box} custom-scroll `}>
     {<FeedOrdersItem/>}
     {<FeedOrdersItem/>}
     {<FeedOrdersItem/>}
     {<FeedOrdersItem/>}
     {<FeedOrdersItem/>}
    </div>
    </>
  )
}