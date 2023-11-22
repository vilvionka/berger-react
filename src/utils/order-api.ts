import { refreshToken } from "./token-api";
import {Iingredient} from '../services/type/index';
import {IingredientKey} from '../services/type/index';

export const getResponseOrder = (res:Response): Promise<any> => {
  if (res.ok) {
    return res.json()

  }
  return Promise.reject(`Ошибка ${res.status}`);

}
export interface IgetOrderProjectApi{
  name: string;
  order: {
    createdAt: string;
    ingredients: Iingredient[];
    name: string;
    number: number;
    owner:{
      name: string;
      email: string;
      createdAt: string;
      updatedAt:string;
    }
    price: number;
    status: string;
    updatedAt: string;
    _id: string;

  }
}


export const getOrderProject = async (ingredientsObjec:number[], token: any):Promise<IgetOrderProjectApi> => {

  try {
    const res = await fetch('https://norma.nomoreparties.space/api/orders', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
      body: JSON.stringify({
        "ingredients": ingredientsObjec
      })
    });

    return await getResponseOrder(res);
  } catch (err:any) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken(); //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      token.headers.authorization = refreshData.accessToken;
      const res = await fetch('https://norma.nomoreparties.space/api/orders', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: token,
        },
        body: JSON.stringify({
          "ingredients": ingredientsObjec
        })
      });; //повторяем запрос
      return await getResponseOrder(res);
    } else {
      return Promise.reject(err);
    }
  }
};