
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
        bun: action.payload.type === 'bun' ? action.payload : state.bun,
        burgerConstructor: action.payload.type !== 'bun' ? [...state.burgerConstructor, action.payload] : state.burgerConstructor
      };
    case DELETE_INGREDIENT:
      return {
        ...state,
        burgerConstructor: state.burgerConstructor.filter(el => el.key !== action.id)
      }
    case UPDATE_INGREDIENT:
      function correctArr(arr, param) {
        return [arr[param[1]] = arr.splice(param[0], 1, arr[param[1]])[0]]
      }
      const arr = [...state.burgerConstructor]
      return {
        ...state,burgerConstructor: correctArr(arr, [action.dragIndex, action.hoverIndex])
       //arr.splice(action.dragIndex, 0, arr.splice(action.hoverIndex, 1)[0])

      }
    default: {
      return state
    }
  }
}