
import React, { useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgeConstructor/BurgerConstructor';
import styles from "./App.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { loadIngredients } from '../../services/ingredients/action';
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";



function App() {
  //@ts-ignore
  const { loading, error, ingredient } = useSelector(store => store.ingredientsReducer)
 // console.log(ingredient)

  const dispatсh = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatсh(loadIngredients())
    //  getProductData();
  }, []);


  if (loading) {
    return <p>Загрузка...</p>
  }
  if (!loading && error) {
    return <p>{`Ошибка: ${error}`}</p>
  }

  return (
    <>
      <AppHeader />
      <main>
        <DndProvider backend={HTML5Backend}>
          <div className={styles.container}>
            {ingredient.length > 0 && <BurgerIngredients />}
            {ingredient.length > 0 && <BurgerConstructor />}
          </div>
        </DndProvider>
      </main>
    </>
  );
}

export default App;
