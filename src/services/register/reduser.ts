import { SET_AUTH_CHECKED, SET_USER } from './action';
import {TActionsRegister, IUser} from './action'


interface IinitialState{
  user: null | IUser;
  isAuthChecked:boolean;
}

const initialState:IinitialState = {
    user: null,
    isAuthChecked: false,
};

export const reduserRegister = (state = initialState, action:TActionsRegister):IinitialState => {
  switch (action.type) {
    case SET_AUTH_CHECKED:
      return {
        ...state,
        isAuthChecked: action.payload
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};

