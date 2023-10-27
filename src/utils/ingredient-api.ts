import {Iingredient} from '../services/ingredients/type';



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
    return fetch('https://norma.nomoreparties.space/api/ingredients/').then(getResponse)
  
}

