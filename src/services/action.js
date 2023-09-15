import {getProjectIngredients} from '../utils/ingredient-api';

export const ADD_LOADING = 'ADD_LOADING';

export const GET_FEED = 'GET_FEED';
export const GET_FEED_FAILED = 'GET_FEED_FAILED';
export const GET_FEED_SUCCESS = 'GET_FEED_SUCCESS';

export const loadIngredients = () => (dispatch) => {
   getProjectIngredients().then(res =>{
    dispatch({
      type: ADD_LOADING,
      payload: res
    })
  })
}