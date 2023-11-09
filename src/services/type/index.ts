import { Dispatch } from 'redux';
import { TActionsIngredient } from '../ingredients/action';
import { TActionsOrder } from '../order/action';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import {store} from '../store';
import {TBurgerActions} from '../burgerConstructor/action';
import {TActionsRegister} from '../register/action';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';




export interface Iingredient {
  _id: string;
  name: string;
  type: string;
  fat: number;
  proteins: number;
  carbohydrates: number;
  calories: number;
  price: string;
  image: string;
  image_mobile: string;
  image_large: string;
}
export interface IingredientKey {
  _id: string;
  name: string;
  type: string;
  fat: number;
  proteins: number;
  carbohydrates: number;
  calories: number;
  price: string;
  image: string;
  image_mobile: string;
  image_large: string;
  key: string;
}
export interface IData {
  ingredient: Iingredient[];
  loading: boolean;
  error: null | string;
}

export type TActionsGlobal =
  TActionsIngredient |
  TActionsOrder |
  TBurgerActions |
  TActionsRegister;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TActionsGlobal>>;

export type AppDispatch = Dispatch<TActionsGlobal>; 
// Теперь этот хук «знает» структуру хранилища
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook; 
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>(); 