import {ingredientsReducer} from './ingredients/reduser';
import {BurgerConstructorReducer} from './burgerConstructor/reduser';
import {detailsReducer} from './moreDetails/reduser';
import { combineReducers } from 'redux';
import {orderReducer} from './order/reducer'

export const rootReducer = combineReducers({
  ingredientsReducer,
  BurgerConstructorReducer,
  detailsReducer,
  orderReducer
}) 