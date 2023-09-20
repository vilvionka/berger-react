import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from "react-dnd";
import { useDispatch } from 'react-redux';
import { DELETE_INGREDIENT } from '../../services/burgerConstructor/action';
import styles from './BurgerElement.module.css';
import { DELETE_COUNTER } from '../../services/ingredients/action';



export function BurgerElement({ el }) {

  const dispatch = useDispatch();

  function handleClose() {
    dispatch({
      type: DELETE_INGREDIENT,
      id: el.key,
    });
  }

  const [{ isDrag }, dragRef] = useDrag({
    type: "animal",
    item: { el },
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  return (
    <div className={styles.block} key={el.key} ref={dragRef} >
      <div className={"mr-2"} >
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={el.item.name}
        price={el.item.price}
        thumbnail={el.item.image} 
        handleClose = {handleClose}/>
    </div>
  )
}