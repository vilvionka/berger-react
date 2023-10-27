import { refreshToken } from "./token-api";

export const getResponseOrder = (res) => {
  if (res.ok) {
    return res.json()

  }
  return Promise.reject(`Ошибка ${res.status}`);

}
//@ts-ignore
//export const getOrderProject = (ingredientsObjec, token) => {
// return fetch('https://norma.nomoreparties.space/api/orders', {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     authorization: token,
//   },
//   body: JSON.stringify({
//     "ingredients": ingredientsObjec
//   })
// }).then(getResponseOrder)
//}

export const getOrderProject = async (ingredientsObjec, token) => {

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
  } catch (err) {
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