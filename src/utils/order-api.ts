import { refreshToken } from "./token-api";
import {Iingredient} from '../services/type/index';
import {BASE_URL} from './api';

export const checkResponse = (res:Response): Promise<any> => {
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
    const res = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
      body: JSON.stringify({
        "ingredients": ingredientsObjec
      })
    });

    return await checkResponse(res);
  } catch (err:any) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken(); //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      token.headers.authorization = refreshData.accessToken;
      const res = await fetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: token,
        },
        body: JSON.stringify({
          "ingredients": ingredientsObjec
        })
      });; //повторяем запрос
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};