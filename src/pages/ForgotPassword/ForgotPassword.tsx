import styles from "./ForgotPassword.module.css";
import { Input, ShowIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getForgotPassword } from '../../utils/api';


export const ForgotPassword = () => {

  const [value, setValue] = useState('');

  useEffect(() => {
    localStorage.setItem("flagForgotPassword", 'false');
  }, [])


  const navigate = useNavigate();

  const forgotPassword = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value !== '') {
      
      getForgotPassword(value).then((res) => {
       
        if (res.message === "Reset email sent") {
          localStorage.setItem("flagForgotPassword", 'true');
          navigate('/resset-password')
        }
      });
    }

  }

  return (
    <>
      <div className={styles.box}>
        <div className={styles.headling}>Восстановление пароля</div>
        <form onSubmit={forgotPassword}>
          <Input
            type={'email'}
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
            <Button htmlType="submit" type="primary" size="medium" >
              Восстановить
            </Button>
          </div>
        </form>
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