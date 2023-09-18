
import { ADD_INGREDIENT, DELETE_INGREDIENT, UPDATE_INGREDIENT } from './action';

const initialState = {
  bun: {},
  burgerConstructor: []
}


export const BurgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        bun: action.payload.item.type === 'bun' ? action.payload : state.bun,
        burgerConstructor: action.payload.item.type !== 'bun' ? [...state.burgerConstructor, action.payload] : state.burgerConstructor
      };
    case DELETE_INGREDIENT:
      return {
        ...state,
        burgerConstructor: state.burgerConstructor.filter(el => el.key !== action.id)
      }
    case UPDATE_INGREDIENT:
      return {
        ...state,
        burgerConstructor: []
      }
    default: {
      return state
    }
  }
}