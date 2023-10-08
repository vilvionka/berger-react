import { getOrderProject } from '../../utils/order-api';

export const ADD_LOADING_ORDER = 'ADD_LOADING_ORDER';
export const LOADING_ORDER = 'LOADING_ORDER';
export const ERROR_ORDER = 'ERROR_ORDER';



export const loadOrder = (ingredientsObject, token) => (dispatch) => {
 dispatch({ type: LOADING_ORDER })
 getOrderProject(ingredientsObject, token).then(res => {
    dispatch({
      type: ADD_LOADING_ORDER,
      payload: res
    })
  })
  .catch(error =>{
    dispatch({
      type: ERROR_ORDER,
      payload: error.message
    })
  })
}