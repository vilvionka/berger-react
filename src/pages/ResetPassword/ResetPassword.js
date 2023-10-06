import styles from "../ForgotPassword/ForgotPassword.module.css";
import { Input, Box, ShowIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import {getRessetPassword} from '../../services/register/action'


export const ResetPassword = () => {

  const [value, setValue] = useState('');
  const [valueP, setValueP] = useState('');

  const inputRef = useRef(null)

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }

  const dispatch = useDispatch();

  const ressetPassword = () =>{
    if(value!== '' && valueP !== '' ){
         //@ts-ignore
        dispatch(getRessetPassword(value, valueP))
    }

  }

  return (
    <>
      <div className={styles.box}>
        <div className={styles.headling}>Восстановление пароля</div>
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
          <Button htmlType="button" type="primary" size="medium" onClick={ressetPassword}>
          Сохранить
          </Button>
        </div>
        <div className={`${styles.register} mt-20`}>
          <p className={`${styles.text} `}>Вспомнили пароль?</p>
          <p className={`${styles.link} ml-2`}>Войти</p>
        </div>
      </div>
    </>
  )
}