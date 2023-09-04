
import React, { useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgeConstructor/BurgerConstructor';
import styles from "./App.module.css";
import { watch } from 'fs';

function App() {
  const [state, setState] = React.useState({
    productData: null,
    loading: true
  })

  const getProductData = () => {
    setState({ ...state, loading: true });
    fetch('https://norma.nomoreparties.space/api/ingredients/')
      .then(res => res.json())
      .then(data => setState({ productData: data.data, loading: false }))
      .catch(e => {
        return Promise.reject('Произощла ошибка');
      });
  };
  

  useEffect(() => {
    getProductData();

  }, [])


  let ingredients;
  let constructor;
  if (state.productData !== null && state.loading === false) {
    ingredients = <BurgerIngredients data={state.productData} />
    constructor = <BurgerConstructor data={state.productData} />
  }

  return (
    <>
      <AppHeader />
      <main>
        <div className={styles.container}>
          {ingredients}
          {constructor}
        </div>
      </main>
    </>
  );
}

export default App;
