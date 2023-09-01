
import React, { useEffect } from 'react';
import datas from './utils/data';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgeConstructor/BurgerConstructor';
import styles from "./App.module.css";

function App() {
  const data = datas();
  //console.log(data);

  const [state, setState] = React.useState({
    productData: null,
    loading: true
  })

  useEffect(() => {
    const getProductData = async () => {
      setState({ ...state, loading: true });
      const res = await fetch('https://norma.nomoreparties.space/api/ingredients/');
      const getData = await res.json();
      setState({ productData: getData.data, loading: false });
    }
    getProductData();
  }, [])


let ingredients;
let constructor;
if(state.loading === false){
  ingredients = <BurgerIngredients data = {state.productData}/>
  constructor = <BurgerConstructor data = {state.productData}/>
  

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
