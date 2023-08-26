import styles from './BurgerConstructor.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import bun1 from '../../images/bun-01.png';


function BurgerConstructor() {

  return (
    <div className={styles.box}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={styles.tab}>
        <div style={{ display: 'flex' }}>
          <Tab >Булки</Tab>
          <Tab >Соусы</Tab>
          <Tab >Начинки</Tab>
        </div>
      </div>
      <div className= {styles.tab_box}>
        <h3 className="mb-6 mt-10 text text_type_main-medium">Булки</h3>
        <div className={styles.tab_box_wrap}>
          <div className= {styles.tab_box_wrap_item}>
            <img alt='img' src= {bun1}/>
            <div className= {styles.price}>
              <span>20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default BurgerConstructor;