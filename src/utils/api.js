import { getResponseOrder } from "./order-api";

// В проектной работе эта функция будет обращаться к серверу
// и обновлять токены если они уже устарели.

export const getRegister = (name, email, password) => {
  console.log(name, email, password)
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

export const getForgotPassword = (email) => {
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

export const getRessetPassword = (password, token) => {
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


export const login = (email, password) => {
  console.log(email, password)
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

export const logout = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

export const api = {
  getRegister,
  login,
  logout,
  getForgotPassword,
  getRessetPassword
};
