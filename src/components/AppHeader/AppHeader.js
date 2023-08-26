import styles from "./AppHeader.module.css";
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
  return (
    <header>
      <div className={styles.container} >
        <div className={styles.container_button}>
          <div className={styles.header_constructor}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default">Конструктор</p>
          </div>
          <div className={styles.header_feed}>
          <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
          </div>
        </div>
        <div className="header_logo">
          <Logo />
        </div>
        <div className={styles.header_profile}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
        </div>
      </div>
    </header >
  )
}



export default AppHeader;