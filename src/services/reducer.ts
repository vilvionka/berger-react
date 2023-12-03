import {ingredientsReducer} from './ingredients/reducer';
import {BurgerConstructorReducer} from './burgerConstructor/reducer';
import { combineReducers } from 'redux';
import {orderReducer} from './order/reducer';
import {reducerRegister} from './register/reducer';
import { wsReducer } from './websocket/reducer';

export const rootReducer = combineReducers({
  ingredientsReducer,
  BurgerConstructorReducer,
  reducerRegister,
  orderReducer,
  wsReducer,
}) 