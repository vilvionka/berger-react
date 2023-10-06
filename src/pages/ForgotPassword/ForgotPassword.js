import styles from "./ForgotPassword.module.css";
import { Input, Box, ShowIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import {getForgotPassword} from '../../services/register/action';


export const ForgotPassword = () => {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const forgotPassword = () =>{
    if(value!== ''  ){
         //@ts-ignore
        dispatch(getForgotPassword(value))
    }

  }

  return (
    <>
      <div className={styles.box}>
        <div className={styles.headling}>Восстановление пароля</div>
        <Input
          type={'text'}
          placeholder={'Укажите e-mail'}
          onChange={e => setValue(e.target.value)}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mt-6"
          value={value}
        />
        <div className={`${styles.button} mt-6`}>
          <Button htmlType="button" type="primary" size="medium" onClick={forgotPassword}>
            Восстановить
          </Button>
        </div>
        <div className={`${styles.register} mt-20`}>
          <p className={`${styles.text} `}>Вспомнили пароль?</p>
          <Link to='/login' className={styles.link}>
            <p className={`${styles.link} ml-2`}>Войти</p>
          </Link>
        </div>
      </div>
    </>
  )
}