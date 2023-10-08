import styles from "../ForgotPassword/ForgotPassword.module.css";
import { Input, Box, ShowIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef, useEffect } from 'react';
import { getRessetPassword } from '../../utils/api'
import { useNavigate, Link } from "react-router-dom";


export const RessetPassword = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("flagForgotPassword") !== 'true') {
      navigate('/');
    }
  }, []);


  const [value, setValue] = useState('');
  const [valueP, setValueP] = useState('');

  const inputRef = useRef(null)

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    inputRef.current.type === 'text' ? inputRef.current.type = 'password' : inputRef.current.type = 'text'
  }

  const ressetPassword = (e) => {
    e.preventDefault();
    if (value !== '' && valueP !== '') {
      //@ts-ignore
      getRessetPassword(value, valueP).then((res) => {
        if (res.message === "Password successfully reset") {
          navigate('/')
        }
      });
    }

  }

  return (
    <>
      <div className={styles.box}>
        <div className={styles.headling}>Восстановление пароля</div>
        <form onSubmit={ressetPassword}>
          <Input
            type={'text'}
            placeholder={'Введите новый пароль'}
            onChange={e => setValue(e.target.value)}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mt-6"
            ref={inputRef}
            icon={'ShowIcon'}
            onIconClick={onIconClick}
            value={value}
          />
          <Input
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={e => setValueP(e.target.value)}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mt-6"
            value={valueP}
          />
          <div className={`${styles.button} mt-6`}>
            <Button htmlType="submit" type="primary" size="medium" >
              Сохранить
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