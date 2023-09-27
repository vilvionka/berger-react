import {MORE_DETAILS} from './action';

const initialState = {
 details: null
}

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MORE_DETAILS:
      return{
        ...state,
        details: action.payload
      }
    default: {
      return state
    }
  }
} 