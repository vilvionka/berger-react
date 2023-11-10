import { getOrderProject } from '../../utils/order-api';
import { AppThunk, IingredientKey } from '../type/index';
import { AppDispatch } from '../type/index';
import {IgetOrderProjectApi} from '../../utils/order-api';

export const ADD_LOADING_ORDER: 'ADD_LOADING_ORDER' = 'ADD_LOADING_ORDER';
export const LOADING_ORDER: 'LOADING_ORDER' = 'LOADING_ORDER';
export const ERROR_ORDER: 'ERROR_ORDER' = 'ERROR_ORDER';

interface IAddLoadingOrderAction {
  readonly type: typeof ADD_LOADING_ORDER;
  readonly payload: IgetOrderProjectApi;
}
interface ILoadingOrderAction {
  readonly type: typeof LOADING_ORDER;
}
interface IErrorOrderAction {
  readonly type: typeof ERROR_ORDER;
  readonly payload: string;
}
export type TActionsOrder =
  IAddLoadingOrderAction |
  ILoadingOrderAction |
  IErrorOrderAction;


export const loadOrder = (ingredientsObject: IingredientKey, token: string):AppThunk => (dispatch) => {
  dispatch({ type: LOADING_ORDER })
  getOrderProject(ingredientsObject, token).then(res => {
    dispatch({
      type: ADD_LOADING_ORDER,
      payload: res
    })
  })
    .catch(error => {
      dispatch({
        type: ERROR_ORDER,
        payload: error.message
      })
    })
}