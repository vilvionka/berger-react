import { useEffect } from 'react';
import BurgerIngredients from '../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../components/BurgeConstructor/BurgerConstructor';
import styles from "./Home.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { loadIngredients } from '../services/ingredients/action';
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import {getIngrediensSelectorMain} from '../services/ingredients/selector';


export const Home = () => {

  const { loading, error, ingredient } = useSelector(getIngrediensSelectorMain);

  const dispatсh = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatсh(loadIngredients())
  }, []);


  if (loading) {
    return <p>Загрузка...</p>
  }
  if (!loading && error) {
    return <p>{`Ошибка: ${error}`}</p>
  }

  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <div className={styles.container}>
          {ingredient.length > 0 && <BurgerIngredients />}
          {ingredient.length > 0 && <BurgerConstructor />}
        </div>
      </DndProvider>
    </main>
  )
}