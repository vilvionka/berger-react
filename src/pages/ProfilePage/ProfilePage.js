import styles from "./ProfilePage.module.css";
import { Input, Box, EditIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef, useState } from 'react';


export const ProfilePage = () => {

  const [value, setValue] = useState('');
  const [valueP, setValueP] = useState('');
  const [valueM, setValueM] = useState('');

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
            placeholder={'Логин'}
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
        
    </>
  )
}