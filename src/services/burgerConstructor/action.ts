import { IingredientKey } from '../../services/type/index';

export const UPDATE_INGREDIENT: 'UPDATE_INGREDIENT' = 'UPDATE_INGREDIENT'
export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const CLEAR: 'CLEAR' = 'CLEAR';


export interface IUPDATE_INGREDIENT_Action {
  readonly type: typeof UPDATE_INGREDIENT;
  dragIndex: number;
  hoverIndex: number;
}


export interface IADD_INGREDIENT_Action {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: IingredientKey;
}
export interface IDELETE_INGREDIENT_Action {
  readonly type: typeof DELETE_INGREDIENT;
  readonly id: string | undefined;
}
export interface ICLEAR_Action {
  readonly type: typeof CLEAR;
}

export type TBurgerActions = 
    | IUPDATE_INGREDIENT_Action
  | IDELETE_INGREDIENT_Action
  | IADD_INGREDIENT_Action
  | ICLEAR_Action;