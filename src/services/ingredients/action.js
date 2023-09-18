import { getProjectIngredients } from '../../utils/ingredient-api';

export const ADD_LOADING = 'ADD_LOADING';
export const ADD_COUNTER = 'ADD_COUNTER'
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';



export const loadIngredients = () => (dispatch) => {
 dispatch({ type: LOADING })
  getProjectIngredients().then(res => {
    dispatch({
      type: ADD_LOADING,
      payload: res.data
    })
  })
  .catch(error =>{
    dispatch({
      type: ERROR,
      payload: error.message
    })
  })
}