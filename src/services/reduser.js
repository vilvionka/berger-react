import {
  ADD_LOADING
} from './action';

const initialState = {
  ingredient: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOADING:
      return {
        ...state,
        ingredient: action.payload
      };

    default: {
      return state
    }
  }
} 