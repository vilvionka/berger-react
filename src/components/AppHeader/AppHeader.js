import styles from "./AppHeader.module.css";
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink, useMatch } from 'react-router-dom';

function AppHeader() {

  const constructorFlag = useMatch('/')
  const lentaFlag = useMatch('/profile/orders')
  const profileFlag = useMatch('/profile')
  
  return (
    <header>
      <div className={styles.container} >
        <div className={styles.container_button}>
          <div className={styles.header_constructor}>
            <NavLink to="/" className={styles.header_profile_link}>
              <BurgerIcon type={constructorFlag !== null ?"secondary" : "primary"} />
              <p className="text text_type_main-default">Конструктор</p>
            </NavLink>
          </div>
          <div className={styles.header_feed}>
            <NavLink to="/profile/orders" className={styles.header_profile_link}>
              <ListIcon type={lentaFlag !== null ?"secondary" : "primary"} />
              <p className="text text_type_main-default ">Лента заказов</p>
            </NavLink>
          </div>
        </div>
        <div className="header_logo">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div className={styles.header_profile}>
          <NavLink to="/profile" className={styles.header_profile_link}>
            <ProfileIcon type={profileFlag !== null ?"secondary" : "primary"} />
            <p className="text text_type_main-default">Личный кабинет</p>
          </NavLink>
        </div>
      </div>
    </header >
  )
}



export default AppHeader;