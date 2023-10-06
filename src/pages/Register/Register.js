import styles from "./Register.module.css";
import { Input, Box, ShowIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRegistration } from '../../services/register/action';


export const Register = () => {

  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');

  const inputRef = useRef(null)
  const dispatch = useDispatch();

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }

  const register = () =>{
    if(valueName!== '' && valueEmail !== '' ){
      if(valuePassword !== ''){
         //@ts-ignore
        dispatch(getRegistration(valueName, valueEmail, valuePassword))
      }
    }

  }

  return (
    <>
      <div className={styles.box}>
        <div className={styles.headling}>Регистрация</div>
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
          <Button htmlType="submit" type="primary" size="medium" onClick={register}>
            Зарегистрироваться
          </Button>
        </div>
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