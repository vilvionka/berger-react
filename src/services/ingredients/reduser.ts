import { ADD_LOADING, LOADING, ERROR } from './action';
import {TActionsIngredient} from './action';
import {Iingredient} from '../type/index'

interface IinitialState {
  ingredient: Iingredient[];
  loading: boolean;
  error: string | null;
}

const initialState:IinitialState = {
  ingredient: [],
  loading: false,
  error: null
}

export const ingredientsReducer = (state = initialState, action:TActionsIngredient):IinitialState => {
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