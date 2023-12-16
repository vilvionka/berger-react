import styles from "./Register.module.css";
import { getRegistration } from '../../services/register/action';
import Box from '@ya.praktikum/react-developer-burger-ui-components';
import { Input, ShowIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from '../../services/type/index';;



export const Register = () => {

  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');

  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch();

  const onIconClick = () => {
    setTimeout(() => inputRef.current!.focus(), 0)
    inputRef.current!.type === 'text' ? inputRef.current!.type = 'password' : inputRef.current!.type = 'text'
  }

  const register = (e:React.SyntheticEvent) => {
    e.preventDefault();
    if (valueName !== '' && valueEmail !== '') {
      if (valuePassword !== '') {
        //@ts-ignore
        dispatch(getRegistration(valueName, valueEmail, valuePassword))
      }
    }

  }

  return (
    <>
      <div className={styles.box}>
        <div className={styles.headling}>Регистрация</div>
        <form onSubmit={register}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={e => setValueName(e.target.value)}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mt-6"
            value={valueName}
          />
          <Input
            type={'text'}
            placeholder={'E-mail'}
            onChange={e => setValueEmail(e.target.value)}
            name={'email'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mt-6"
            value={valueEmail}
          />
          <Input
            type={'text'}
            placeholder={'Пароль'}
            icon={'ShowIcon'}
            onChange={e => setValuePassword(e.target.value)}
            ref={inputRef}
            onIconClick={onIconClick}
            name={'password'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mt-6"
            value={valuePassword}
          />
          <div className={`${styles.button} mt-6`}>
            <Button htmlType="submit" type="primary" size="medium">
              Зарегистрироваться
            </Button>
          </div>
        </form>
        <div className={`${styles.register} mt-20`}>
          <p className={`${styles.text} `}>Уже зарегистрированы?</p>
          <Link to='/login' className={styles.link}>
            <p className={`${styles.link} ml-2`}>Войти</p>
          </Link>
        </div>
      </div>
    </>
  )
}