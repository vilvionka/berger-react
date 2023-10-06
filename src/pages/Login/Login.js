import styles from "./Login.module.css";
import { Input, Box, ShowIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from '../../services/register/action';


export const Login = () => {

  const [value, setValue] = useState('');
  const [valueP, setValueP] = useState('');

  const inputRef = useRef(null)
  const dispatch = useDispatch();

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }

  const loginCheck = () =>{
    if(value!== '' && valueP !== '' ){
         //@ts-ignore
        dispatch(login(value, valueP))
    }

  }

  return (
    <>
      <div className={styles.box}>
        <div className={styles.headling}>Вход</div>
        <Input
          type={'text'}
          placeholder={'E-mail'}
          onChange={e => setValue(e.target.value)}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mt-6"
          value={value}
        />
        <Input
          type={'text'}
          placeholder={'Пароль'}
          icon={'ShowIcon'}
          onChange={e => setValueP(e.target.value)}
          ref={inputRef}
          onIconClick={onIconClick}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mt-6"
          value={valueP}
        />
        <div className={`${styles.button} mt-6`}>
          <Button htmlType="button" type="primary" size="medium" onClick={loginCheck}>
            Войти
          </Button>
        </div>
        <div className={`${styles.register} mt-20`}>
          <p className={`${styles.text} `}>Вы — новый пользователь?</p>
          <Link to='/register' className={styles.link}>
            <p className={`${styles.link} ml-2`}>Зарегистрироваться</p>
          </Link>
        </div>
        <div className={`${styles.register} mt-2`}>
          <p className={`${styles.text} `}>Забыли пароль?</p>
          <Link to='/forgot-password' className={styles.link}>
            <p className={`${styles.link} ml-2`}>Восстановить пароль</p>
          </Link>
        </div>
      </div>
    </>
  )
}