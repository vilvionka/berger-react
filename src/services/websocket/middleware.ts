import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { Middleware } from "redux";
import { RootState } from "../type";



export type TWsActionTypes = {
  connect: ActionCreatorWithPayload<string>,
  disconnect: ActionCreatorWithoutPayload,
  sendMessage?: ActionCreatorWithPayload<any>,
  connecting: ActionCreatorWithoutPayload,
  open: ActionCreatorWithoutPayload, 
  close: ActionCreatorWithoutPayload,
  message: ActionCreatorWithPayload<any>,
  error: ActionCreatorWithPayload<string>,
}


export const socketMiddleware = (wsActions: TWsActionTypes): Middleware<{}, RootState> => {
  console.log('2');
  return ((store) => {
    let socket: WebSocket | null = null;

    return next => (action) => {
      console.log(action);
      const {dispatch} = store;
      const { connect, disconnect, open, close, message, error, connecting } = wsActions;
      if (connect.match(action)) {
        console.log('3');
        socket = new WebSocket(action.payload);
        dispatch(connecting());
      }
      if (socket) {
        socket.onopen = event => {
          dispatch(open());
        };

        socket.onerror = event => {
          dispatch(error('Error'));
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch(message(parsedData));
        };

        socket.onclose = event => {
          dispatch(close());
        };
        
        if(disconnect.match(action)){
          socket.close();
          socket = null;
        }
      }

      next(action);
    };
  });
};