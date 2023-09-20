import { ADD_LOADING, LOADING, ERROR } from './action';

const initialState = {
  ingredient: [],
  loading: false,
  error: null
}

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ADD_LOADING:
      return {
        ...state,
        loading: false,
        ingredient: action.payload
      }
   
    default: {
      return state
    }
  }
} 