import {BurgerIngredients} from '../../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../../components/BurgeConstructor/BurgerConstructor';
import styles from "./Home.module.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import {getIngrediensSelectorMain} from '../../services/ingredients/selector';
import { useSelector } from '../../services/type/index';



export const Home = ():JSX.Element => {

  const { ingredient } = useSelector(getIngrediensSelectorMain);
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