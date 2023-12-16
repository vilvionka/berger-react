import {RootState} from '../type/index'

export const getBurgerSelectorIngredients = (store:RootState) => store.BurgerConstructorReducer.burgerConstructor;
export const getBurgerSelectorBun = (store:RootState) => store.BurgerConstructorReducer.bun;
export const getBurgerSelector = (store:RootState) => store.BurgerConstructorReducer;