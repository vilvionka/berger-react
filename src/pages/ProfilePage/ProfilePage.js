import styles from "./ProfilePage.module.css";
import { Input, Box, EditIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRegisterSelector } from '../../services/register/selector';
import {editLoad} from '../../services/register/action';


export const ProfilePage = () => {
  const { name, email } = useSelector(getRegisterSelector);


  const [value, setValue] = useState(name);
  const [valueP, setValueP] = useState('');
  const [valueM, setValueM] = useState(email);

  const inputRef1 = useRef(null)

  const onIconClick1 = () => {
    setTimeout(() => inputRef1.current.focus(), 0)
    alert('Icon Click Callback')
  }
  const inputRef2 = useRef(null)

  const onIconClick2 = () => {
    setTimeout(() => inputRef2.current.focus(), 0)
    alert('Icon Click Callback')
  }
  const inputRef3 = useRef(null)

  const onIconClick3 = () => {
    setTimeout(() => inputRef3.current.focus(), 0)
    alert('Icon Click Callback')
  }

  let display = 'none';
  if (value !== name || valueM !== email) {
    display = 'block';
  }
 const token = localStorage.getItem('accessToken');
  const dispatch = useDispatch();
  const edit = () => {
    if (valueP !== '' && valueM !== '') {
      if (valueP !== '') {
        dispatch(editLoad(value, valueM, valueP, token))
      }
    }
  }

  return (
    <>

      <Input
        type={'text'}
        placeholder={'Имя'}
        onChange={e => setValue(e.target.value)}
        icon={'EditIcon'}
        ref={inputRef1}
        onIconClick={onIconClick1}
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
        onIconClick={onIconClick2}
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
        onIconClick={onIconClick3}
        name={'name'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass="mt-6"
        value={valueP}
      />
      <div className={`${styles.hidden_button} mt-6`} style={{ display }}>
        <Button htmlType="submit" type="primary" size="medium" onClick={edit}>
          Сохранить
        </Button>
        <Button htmlType="reset" type="primary" size="medium" extraClass="ml-6" >
          Отменя
        </Button>
      </div>

    </>
  )
}