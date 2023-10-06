import styles from "./Profile.module.css";
import { Outlet, NavLink } from "react-router-dom";


export const Profile = () => {



  return (
    <>
      <div className={styles.box}>
        <div className={styles.box_left}>
          <NavLink to='/profile' end className={({ isActive }) => isActive ? 'activeProfile' : 'noactiveProfile'}>
            <p className={styles.tab}>Профиль</p>
          </NavLink>
          <NavLink to='/profile/orders' className={({ isActive }) => isActive ? 'activeProfile' : 'noactiveProfile'}>
            <p className={styles.tab}>История заказов</p>
          </NavLink>
          <p className={styles.tab}>Выход</p>
          <p className={`${styles.text} mt-20`}>В этом разделе вы можете
            изменить свои персональные данные</p>
        </div>
        <div className={styles.box_right}>
          <Outlet />
        </div>
      </div>
    </>
  )
}