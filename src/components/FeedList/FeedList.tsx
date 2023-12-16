import styles from './FeedList.module.css';
import { useSelector } from '../../services/type/index';


export const FeedList = () => {
  const { orders } = useSelector(store => store.wsReducer);
  const doneOrder = orders?.orders.filter(elem => { return elem.status == 'done' })


  return (
    <>
      <div className={styles.box}>
        <div className={styles.ready_noready}>
          <h3 className='text text_type_main-medium mb-6'>Готовы:</h3>
          <div className={styles.ready}>
            {doneOrder?.map((el, index) =>
              <p key={index} className='text text_type_digits-default text_color_inactive mb-2 mr-2'>{el.number}</p>
            )}
          </div>

        </div>
        <div className={styles.readyall}>
          <h3 className='text text_type_main-medium mt-15'> Выполнено за все время: </h3>
          <p className='text text_type_digits-large'>{orders?.total}</p>
        </div>
        <div className={styles.readyall}>
          <h3 className='text text_type_main-medium mt-15'>Выполнено за сегодня: </h3>
          <p className='text text_type_digits-large'>{orders?.totalToday}</p>
        </div>
      </div>
    </>
  )
}