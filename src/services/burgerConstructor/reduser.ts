import {TBurgerActions} from './action';
import { ADD_INGREDIENT, DELETE_INGREDIENT, UPDATE_INGREDIENT, CLEAR } from './action';
import {IingredientKey} from '../type/index';

interface IinitialState{
  bun: null| IingredientKey;
  burgerConstructor: IingredientKey[]
}
const initialState = {
  bun: null,
  burgerConstructor: []
}


export const BurgerConstructorReducer = (state = initialState, action:TBurgerActions):IinitialState => {

  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        bun: action.payload.type === 'bun' ? action.payload : state.bun,
        burgerConstructor: action.payload.type !== 'bun' ? [...state.burgerConstructor, action.payload] : state.burgerConstructor
      };
    case DELETE_INGREDIENT:
      return {
        ...state,
         //@ts-ignore
        burgerConstructor: state.burgerConstructor.filter(el => el.key !== action.id)
      }
    case UPDATE_INGREDIENT:
      const ingredients = [...state.burgerConstructor];
      ingredients.splice(action.hoverIndex, 0, ingredients.splice(action.dragIndex, 1)[0]);
      return {
        ...state,
        burgerConstructor: ingredients
      };
    case CLEAR:
      return {
        bun: null,
        burgerConstructor: []
      };
    default: {
      return state
    }
  }
}