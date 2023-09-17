
import React, { useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgeConstructor/BurgerConstructor';
import styles from "./App.module.css";
import { useDispatch } from 'react-redux';
import { loadIngredients } from '../../services/ingredients/action';
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";



function App() {
  const [state, setState] = React.useState({
    productData: null,
    loading: true
  })

  const getProductData = () => {
    setState({ ...state, loading: true });
    fetch("https://norma.nomoreparties.space/api/ingredients/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })

      .then((data) => setState({ productData: data.data, loading: false }))
      .catch((e) => {
        console.error(e)
      });
  };
  const dispatсh = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatсh(loadIngredients())
    getProductData();
  }, []);


  let ingredient;
  let constructor;
  if (state.productData !== null && state.loading === false) {
    ingredient = <BurgerIngredients />
    constructor = <BurgerConstructor />
  }

  return (
    <>
      <AppHeader />
      <main>
      <DndProvider backend={HTML5Backend}>
        <div className={styles.container}>
          {ingredient}
          {constructor}
        </div>
        </DndProvider>
      </main>
    </>
  );
}

export default App;
