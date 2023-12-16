import {RootState} from '../type/index'

export const getIngrediensSelector = (store:RootState) => store.ingredientsReducer.ingredient;
export const getIngrediensSelectorMain = (store:RootState) => store.ingredientsReducer;