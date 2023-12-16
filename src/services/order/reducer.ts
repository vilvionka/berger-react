import { ADD_LOADING_ORDER, LOADING_ORDER, ERROR_ORDER } from './action';
import {TActionsOrder} from './action';
import {IgetOrderProjectApi} from '../../utils/order-api';

interface IinitialState{
 order: null | IgetOrderProjectApi;
 loading: boolean;
 error: null | string;
}

const initialState:IinitialState = {
  order: null,
  loading: false,
  error: null
}

export const orderReducer = (state = initialState, action:TActionsOrder):IinitialState => {
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