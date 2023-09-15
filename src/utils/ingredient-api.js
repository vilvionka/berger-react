const getResponse = (res) => {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка ${res.status}`);

}

export const getProjectIngredients = () => {
    return fetch('https://norma.nomoreparties.space/api/ingredients/')
   .then(getResponse)
  
}

