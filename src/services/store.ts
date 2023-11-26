import { rootReducer } from "./reduser";
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";
import { socketMiddleware } from '../services/websocket/middleware';
import {
  connect as liveConnect,
  disconnect as liveDisconnect,
  connecting as liveConnecting,
  open as liveOpen,
  close as liveClose,
  message as liveMessage,
  error as liveError
} from '../services/websocket/action';


const liveSocketMiddleware = socketMiddleware({
  connect: liveConnect,
  disconnect: liveDisconnect,
  connecting: liveConnecting,
  open: liveOpen,
  close: liveClose,
  message: liveMessage,
  error: liveError
})


export const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, liveSocketMiddleware))
  )
  return store;
}
export const store = createStore(rootReducer);




