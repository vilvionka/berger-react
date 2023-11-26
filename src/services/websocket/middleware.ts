import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { Middleware } from "redux";
import { RootState } from "../type";
import { refreshToken } from '../../utils/token-api';



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
  return ((store) => {
    let socket: WebSocket | null = null;

    return next => (action) => {
      const { dispatch } = store;
      const { connect, disconnect, open, close, message, error, connecting } = wsActions;
      if (connect.match(action)) {
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
          if (data.message == 'Invalid or missing token') {
            //@ts-ignore
            dispatch(refreshToken());
          } else {
            dispatch(message(parsedData));
          }

        };

        socket.onclose = event => {
          dispatch(close());
        };

        if (disconnect.match(action)) {
          socket.close();
          socket = null;
        }
      }

      next(action);
    };
  });
};