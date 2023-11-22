import styles from './FeedOrdersItem.module.css';
import bun from '../../images/bun-01.png'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useMatch } from 'react-router-dom';


export const FeedOrdersItem = () => {
  return (
    <>
      <NavLink to="/feed/:id" className={`${styles.box} p-6 mb-4`}>
        <div className={styles.top}>
          <p className="text text_type_digits-default">#034535</p>
          <p className='text text_type_main-default text_color_inactive'>Сегодня, 13:20</p>
        </div>
        <div className='text text_type_main-medium mt-6'>Death Star Starship Main бургер</div>
        <div className={`${styles.box_ingredient} mt-6`}>
          <div className={`${styles.ingredient}`}>
             <div className={styles.img}>
              <img src={bun} alt="img" />
             </div>
             <div className={styles.img}>
              <img src={bun} alt="img" />
             </div>
             <div className={styles.img}>
              <img src={bun} alt="img" />
             </div>
             <div className={styles.img}>
              <img src={bun} alt="img" />
             </div>
             <div className={styles.img}>
              <img src={bun} alt="img" />
             </div>
             <div className={styles.img}>
              <img src={bun} alt="img" />
             </div>
          </div>
          <div className={styles.price}>
            <p className='text text_type_digits-default mr-2'>480</p>
          <CurrencyIcon type="primary" />
          </div>
        </div>
      </NavLink>
    </>
  )
}