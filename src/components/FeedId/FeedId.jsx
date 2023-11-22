import styles from './FeedId.module.css';
import bun from '../../images/bun-01.png';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';


export const FeedId = () => {

  return (
    <>
      <div className={styles.box}>
        <div className={`${styles.number} text text_type_digits-default`}>#034533</div>
        <h3 className='text text_type_main-medium mb-3 mt-10'>Black Hole Singularity острый бургер</h3>
        <p className='text text_type_main-default text_color_inactive mb-15'>Выполнен</p>
        <p className='text text_type_main-medium mb-6'>Состав:</p>
        <div className={`${styles.ingredient} custom-scroll`}>
          <div className={styles.item}>
            <div className={styles.flex}>
              <div className={styles.img}>
                <img src={bun} alt="img" />
              </div>
              <p className="text text_type_main-default ml-4">Филе Люминесцентного тетраодонтимформа</p>
            </div>
            <div className={styles.discription}>
              <p className='text text_type_digits-default mr-2'>1</p>
              <p className="text text_type_digits-default mr-2">x</p>
              <p className="text text_type_digits-default mr-2">400</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.flex}>
              <div className={styles.img}>
                <img src={bun} alt="img" />
              </div>
              <p className="text text_type_main-default ml-4">Филе Люминесцентного тетраодонтимформа</p>
            </div>
            <div className={styles.discription}>
              <p className='text text_type_digits-default mr-2'>1</p>
              <p className="text text_type_digits-default mr-2">x</p>
              <p className="text text_type_digits-default mr-2">400</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.flex}>
              <div className={styles.img}>
                <img src={bun} alt="img" />
              </div>
              <p className="text text_type_main-default ml-4">Филе Люминесцентного тетраодонтимформа</p>
            </div>
            <div className={styles.discription}>
              <p className='text text_type_digits-default mr-2'>1</p>
              <p className="text text_type_digits-default mr-2">x</p>
              <p className="text text_type_digits-default mr-2">400</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.flex}>
              <div className={styles.img}>
                <img src={bun} alt="img" />
              </div>
              <p className="text text_type_main-default ml-4">Филе Люминесцентного тетраодонтимформа</p>
            </div>
            <div className={styles.discription}>
              <p className='text text_type_digits-default mr-2'>1</p>
              <p className="text text_type_digits-default mr-2">x</p>
              <p className="text text_type_digits-default mr-2">400</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
        <div className={`${styles.bottom} mt-10`}>
          <p className='text text_type_main-default text_color_inactive'>Вчера, 13:50</p>
          <div className={styles.total}>
            <p className='text text_type_digits-default mr-2'>1200</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </>
  )
}