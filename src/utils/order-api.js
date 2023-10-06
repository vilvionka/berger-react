
export const getResponseOrder = (res) => {
  if (res.ok) {
    return res.json()

  }
  return Promise.reject(`Ошибка ${res.status}`);

}
//@ts-ignore
export const getOrderProject = (ingredientsObjec) => {
  return fetch('https://norma.nomoreparties.space/api/orders', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "ingredients": ingredientsObjec
    })
  }).then(getResponseOrder)
}