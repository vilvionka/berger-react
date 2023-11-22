import styles from "./ProfilePage.module.css";
import { Input, EditIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from '../../services/type/index';
import { getRegisterSelector } from '../../services/register/selector';
import { editLoad } from '../../services/register/action';
import Box from '@ya.praktikum/react-developer-burger-ui-components';


export const ProfilePage = () => {
  const user = useSelector(getRegisterSelector);

  const name = user!.name;
  const email = user!.email;

  const [value, setValue] = useState(name);
  const [valueP, setValueP] = useState('');
  const [valueM, setValueM] = useState(email);

  const inputRef1 = useRef<HTMLInputElement>(null)

  const onIconClickName = () => {
    setTimeout(() => inputRef1.current!.focus(), 0)
  }
  const inputRef2 = useRef<HTMLInputElement>(null)

  const onIconClickEmail = () => {
    setTimeout(() => inputRef2.current!.focus(), 0)
  }
  const inputRef3 = useRef<HTMLInputElement>(null)

  const onIconClickPassword = () => {
    setTimeout(() => inputRef3.current!.focus(), 0)
  }

  let display = 'none';
  if (value !== name || valueM !== email) {
    display = 'block';
  }
  const token = localStorage.getItem('accessToken');
  const dispatch = useDispatch();

  const edit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (valueP !== '' && valueM !== '') {
      if (valueP !== '') {
        //@ts-ignore
        dispatch(editLoad(value, valueM, valueP, token))
      }
    }
  }

  const reset = () => {
    setValue(name)
    setValueM(email);

  }

  return (
    <>
      <form onSubmit={edit} className={styles.form}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={e => setValue(e.target.value)}
          icon={'EditIcon'}
          ref={inputRef1}
          onIconClick={onIconClickName}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          value={value}
        />
        <Input
          type={'text'}
          placeholder={'Email'}
          onChange={e => setValueM(e.target.value)}
          icon={'EditIcon'}
          ref={inputRef2}
          onIconClick={onIconClickEmail}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mt-6"
          value={valueM}
        />
        <Input
          type={'text'}
          placeholder={'Пароль'}
          icon={'EditIcon'}
          onChange={e => setValueP(e.target.value)}
          ref={inputRef3}
          onIconClick={onIconClickPassword}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mt-6"
          value={valueP}
        />
        <div className={`${styles.hidden_button} mt-6`} style={{ display }}>
          <Button htmlType="submit" type="primary" size="medium" >
            Сохранить
          </Button>
          <Button htmlType="reset" type="primary" size="medium" extraClass="ml-6" onClick={reset}>
            Отмена
          </Button>
        </div>
      </form>

    </>
  )
}