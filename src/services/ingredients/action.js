import {getProjectIngredients} from '../../utils/ingredient-api';

export const ADD_LOADING = 'ADD_LOADING';



export const loadIngredients = () => (dispatch) => {
   getProjectIngredients().then(res =>{
    dispatch({
      type: ADD_LOADING,
      payload: res
    })
  })
}