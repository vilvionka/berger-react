import styles from './FeedList.module.css';


export const FeedList = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.ready_noready}>
          <div className={styles.ready}>
            <h3 className='text text_type_main-medium mb-6'>Готовы:</h3>
            <p className='text text_type_digits-default text_color_inactive mb-2'>034533</p>
            <p className='text text_type_digits-default text_color_inactive mb-2'>034533</p>
            <p className='text text_type_digits-default text_color_inactive mb-2'>034533</p>
            <p className='text text_type_digits-default text_color_inactive mb-2'>034533</p>
            <p className='text text_type_digits-default text_color_inactive mb-2'>034533</p>
            <p className='text text_type_digits-default text_color_inactive mb-2'>034533</p>
          </div>
          <div className={styles.ready}>
            <h3 className='text text_type_main-medium mb-6'>В работе:</h3>
            <p className='text text_type_digits-default  mb-2'>034533</p>
            <p className='text text_type_digits-default  mb-2'>034533</p>
            <p className='text text_type_digits-default  mb-2'>034533</p>
          </div>
        </div>
        <div className={styles.readyall}>
          <h3 className='text text_type_main-medium mt-15'> Выполнено за все время: </h3>
          <p className='text text_type_digits-large'>28 752</p>
        </div>
        <div className={styles.readyall}>
          <h3 className='text text_type_main-medium mt-15'>Выполнено за сегодня: </h3>
          <p className='text text_type_digits-large'>138</p>
        </div>
      </div>
    </>
  )
}