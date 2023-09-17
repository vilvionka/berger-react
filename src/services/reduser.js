import {ingredientsReducer} from './ingredients/reduser';
import {BurgerConstructorReducer} from './burgerConstructor/reduser';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  ingredientsReducer,
  BurgerConstructorReducer
}) 