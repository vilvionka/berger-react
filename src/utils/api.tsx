import { getResponseOrder } from "./order-api";

// В проектной работе эта функция будет обращаться к серверу
// и обновлять токены если они уже устарели.

interface IgetRegister{
  name: string;
  email: string;
  password: number;
}

export const getRegister = (name:string, email:string, password:number) => {
  
  return fetch('https://norma.nomoreparties.space/api/auth/register', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": email,
      "password": password,
      "name": name
    })
  }).then(getResponseOrder)
}

export const getForgotPassword = (email: string) => {
  return fetch(' https://norma.nomoreparties.space/api/password-reset', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": email,
    })
  }).then(getResponseOrder)
}

export const getRessetPassword = (password: string, token: string) => {
  return fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "password": password,
      "token": token
    })
  }).then(getResponseOrder)
}


export const login = (email: string, password: string) => {
  return fetch('https://norma.nomoreparties.space/api/auth/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": email,
      "password": password,
    })
  }).then(getResponseOrder)
}

export const logout = (token: string) => {
  return fetch('https://norma.nomoreparties.space/api/auth/logout', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "token": token,
    })
  }).then(getResponseOrder)
}

export const editLoad = (name: string, email: string, password: string, token: string) => {
  return fetch('https://norma.nomoreparties.space/api/auth/user', {
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
  }).then(getResponseOrder)
}


export const api = {
  getRegister,
  login,
  logout,
  getForgotPassword,
  getRessetPassword,
  editLoad
}
