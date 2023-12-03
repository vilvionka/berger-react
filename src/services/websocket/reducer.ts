import { createReducer } from '@reduxjs/toolkit';
import {IwebsocketOrders, WebsocketStatus} from '../type/index';
import { connecting, open, close, error, message } from './action';


interface IinitialState{
  status: string;
  orders: IwebsocketOrders | null ;
  webSocketError: string;
}

const initialState:IinitialState = {
    status: WebsocketStatus.OFFLINE,
    orders: null,
    webSocketError: '',
   
};


export const wsReducer = createReducer(initialState, (builder) => {
  builder
   .addCase(connecting, (state) => {
    state.status = WebsocketStatus.CONNECTING;
   })
   .addCase(open, (state) => {
    state.status = WebsocketStatus.ONLINE;
    state.webSocketError = '';
   })
   .addCase(close, (state) => {
    state.status = WebsocketStatus.OFFLINE;
   })
   .addCase(error, (state, action) => {
    state.webSocketError = action.payload;
   })
   .addCase(message, (state, action) => {
    state.orders = action.payload;
   })
})