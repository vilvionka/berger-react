import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from 'react-redux';
import { DELETE_INGREDIENT, UPDATE_INGREDIENT } from '../../services/burgerConstructor/action';
import styles from './BurgerElement.module.css';
import { useRef } from 'react'



export function BurgerElement({ el, moveCard, index }) {

  const dispatch = useDispatch();

  function handleClose() {
    dispatch({
      type: DELETE_INGREDIENT,
      id: el.key,
    });
  }


  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'card',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      dispatch({
        type: UPDATE_INGREDIENT,
        dragIndex,
        hoverIndex
      });

      item.index = hoverIndex
    },
  })


  const id = el.key;
  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  

  return (
    <div className={styles.block} style={{ opacity }} key={el.key} ref={ref} data-handler-id={handlerId}>
      <div className={"mr-2"} >
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={el.name}
        price={el.price}
        thumbnail={el.image}
        handleClose={handleClose} />
    </div>
  )
}