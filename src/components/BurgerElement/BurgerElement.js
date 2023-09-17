import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from "react-dnd";




import styles from './BurgerElement.module.css';

export function BurgerElement({ el }) {

  function handleClose(id) {
    console.log(id)
    //  dispatch({
    //    type: DELETE_INGREDIENT,
    //    id
    // });
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
        thumbnail={el.item.image} />
    </div>
  )
}