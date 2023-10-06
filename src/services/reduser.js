import {ingredientsReducer} from './ingredients/reduser';
import {BurgerConstructorReducer} from './burgerConstructor/reduser';
import { combineReducers } from 'redux';
import {orderReducer} from './order/reducer';
import {reduserRegister} from './register/reduser';

export const rootReducer = combineReducers({
  ingredientsReducer,
  BurgerConstructorReducer,
  reduserRegister,
  orderReducer
}) 