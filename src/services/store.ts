import { rootReducer } from "./reduser";
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";





export const configureStore = ()  => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
  return store;
}
export const store = createStore(rootReducer); 




