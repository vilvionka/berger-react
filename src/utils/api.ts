import { checkResponse } from "./order-api";
import {Iingredient} from '../services/type/index';


interface IgetRegisterApi{
  accessToken: string;
  refreshToken: string;
  success: boolean;
  user:{
    email: string;
    name: string;
  }

}
export const BASE_URL:string = 'https://norma.nomoreparties.space/api';

export const getRegister = (name:string, email:string, password:string):Promise<IgetRegisterApi> => {
  
  return fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": email,
      "password": password,
      "name": name
    })
  }).then(checkResponse)
}

interface IgetForgotPasswordApi{
  message: string;
  success: boolean;
}

export const getForgotPassword = (email: string):Promise<IgetForgotPasswordApi> => {
  return fetch(`${BASE_URL}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": email,
    })
  }).then(checkResponse);
}

export const getRessetPassword = (password: string, token: string):Promise<IgetForgotPasswordApi> => {
  return fetch(`${BASE_URL}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "password": password,
      "token": token
    })
  }).then(checkResponse);
}


export const login = (email: string, password: string):Promise<IgetRegisterApi> => {
  return fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": email,
      "password": password,
    })
  }).then(checkResponse);
}

export const logout = (token: string) => {
  return fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "token": token,
    })
  }).then(checkResponse);
}

export const editLoad = (name: string, email: string, password: string, token: string):Promise<Iingredient> => {
  return fetch(`${BASE_URL}/auth/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'authorization': token,
    },
    body: JSON.stringify({
      "name": name,
      "email": email,
      "password": password,
    })
  }).then(checkResponse);
}


export const api = {
  getRegister,
  login,
  logout,
  getForgotPassword,
  getRessetPassword,
  editLoad
}
