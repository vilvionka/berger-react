import React from 'react';
import datas from './utils/data';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerIngredients/BurgerIngredients';
import BurgerIngredients from '../BurgeConstructor/BurgerConstructor';
import styles from "./App.module.css";

function App() {
  const data = datas();
  return (
    <>
      <AppHeader />
      <main>
        <div className={styles.container}>
          <BurgerConstructor data = {data}/>
          <BurgerIngredients data = {data}/>
        </div>
      </main>
    </>

  );
}

export default App;
