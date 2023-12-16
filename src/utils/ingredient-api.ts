import {Iingredient} from '../services/type/index';
import {IwebsocketItemOrder} from '../services/type/index'
import {BASE_URL} from './api'



const getResponse = (res:Response):Promise<any> => {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка ${res.status}`);

}

export interface IingredientApi{
  data: Iingredient[];
  success: boolean;
}

export const getProjectIngredients = ():Promise<Array<Iingredient>> => {
    return fetch(`${BASE_URL}/ingredients/`).then(getResponse);
  
}
export const getProjectOrder = (number:string):Promise<IwebsocketItemOrder> => {
  return fetch(`${BASE_URL}/orders/${number}`).then(getResponse);

}

