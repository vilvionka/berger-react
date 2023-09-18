import {ORDER} from './action';

const initialState = {
  order: null
 }

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER:
      return{
        ...state,
        order: action.key
      }
    default: {
      return state
    }
  }
} 