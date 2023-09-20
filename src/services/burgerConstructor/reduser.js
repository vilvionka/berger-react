
import { ADD_INGREDIENT, DELETE_INGREDIENT, UPDATE_INGREDIENT } from './action';

const initialState = {
  bun: null,
  burgerConstructor: []
}


export const BurgerConstructorReducer = (state = initialState, action) => {

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
        burgerConstructor: state.burgerConstructor.filter(el => el.key !== action.id)
      }
      case UPDATE_INGREDIENT:
        const ingredients = [...state.burgerConstructor];
        ingredients.splice(action.hoverIndex, 0, ingredients.splice(action.dragIndex, 1)[0]);
  
        return {
          ...state,
          burgerConstructor: ingredients
        };
    default: {
      return state
    }
  }
}