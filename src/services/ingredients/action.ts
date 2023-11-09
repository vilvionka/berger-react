import { getProjectIngredients } from '../../utils/ingredient-api';
import { Iingredient } from '../type/index';
import { AppDispatch } from '../type/index';
import { AppThunk } from '../type/index';

export const ADD_LOADING: 'ADD_LOADING' = 'ADD_LOADING';
export const LOADING: 'LOADING' = 'LOADING';
export const ERROR: 'ERROR' = 'ERROR';



export interface IADD_LOADING_Action {
  readonly type: typeof ADD_LOADING;
  readonly payload: Iingredient[]
}
export interface ILOADING_Action {
  readonly type: typeof LOADING;
}
export interface IERROR_Action {
  readonly type: typeof ERROR;
  readonly payload: string;
}
export type TActionsIngredient =
  IADD_LOADING_Action |
  ILOADING_Action |
  IERROR_Action;

  

export const loadIngredients:AppThunk = () => (dispatch:AppDispatch) => {
  dispatch({ type: LOADING })
  getProjectIngredients().then(res => {
    dispatch({
      type: ADD_LOADING,
      //@ts-ignore
      payload: res.data
    })
  })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error.message
      })
    })
}