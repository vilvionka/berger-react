import { Dispatch } from 'redux';
import { TActionsIngredient } from '../ingredients/action';
import { TActionsOrder } from '../order/action';
import { ThunkAction } from 'redux-thunk';
import type { } from "redux-thunk/extend-redux";
import { Action, ActionCreator } from 'redux';
import { store } from '../store';
import { TBurgerActions } from '../burgerConstructor/action';
import { TActionsRegister } from '../register/action';
import { TWs } from '../websocket/action'
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { rootReducer } from '../reducer';




export interface Iingredient {
  _id: number | string;
  name: string;
  type: string;
  fat: number;
  proteins: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
}
export interface IingredientKey {
  _id: number;
  name: string;
  type: string;
  fat: number;
  proteins: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  key?: string;
}
export interface IData {
  ingredient: Iingredient[];
  loading: boolean;
  error: null | string;
}
export interface IwebsocketOrders {
  success: boolean;
  orders:IwebsocketOrdersOrders[];
  total: string;
  totalToday: string;
}
export interface IwebsocketOrdersOrders{
  _id: string;
  ingredients: string[];
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: string;
}
export interface IwebsocketItemOrder{
  orders: IwebsocketItemOrderOrders[];
  success: boolean;
}

export interface IwebsocketItemOrderOrders{
  createdAt:string;
  ingredients: string[];
  name: string;
  number: number;
  owner: string;
  status:string;
  updatedAt:string;
  __v:number;
  _id:string;
}

export enum WebsocketStatus {
  CONNECTING = 'CONNECTING...',
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE'
}

export type TActionsGlobal =
  TActionsIngredient |
  TActionsOrder |
  TBurgerActions |
  TActionsRegister |
  TWs;

export type RootState = ReturnType<typeof rootReducer>;


export type AppThunk<TReturn = void> = ThunkAction<
  TReturn,
  RootState,
  unknown,
  TActionsGlobal
>;

export type AppDispatch<TReturnType = void> = (action: TActionsGlobal | AppThunk<TReturnType>) => TReturnType;
// Теперь этот хук «знает» структуру хранилища
export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;