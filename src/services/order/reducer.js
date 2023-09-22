import { ADD_LOADING_ORDER, LOADING_ORDER, ERROR_ORDER } from './action';

const initialState = {
  order: [],
  loading: false,
  error: null
}

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_ORDER:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case LOADING_ORDER:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ADD_LOADING_ORDER:
      return {
        ...state,
        loading: false,
        order: action.payload
      }
   
    default: {
      return state
    }
  }
} 