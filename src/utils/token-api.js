const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const refreshToken = () => {
  return fetch(`https://norma.nomoreparties.space/api/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(checkReponse);
};


export const fetchWithRefresh = async (options) => {
  console.log(options)
  try {
    const res = await fetch('https://norma.nomoreparties.space/api/auth/user', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: options
      }
    });
    console.log(options)
    return await checkReponse(res);
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken(); //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch('https://norma.nomoreparties.space/api/auth/user', {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: options
        }
      }); //повторяем запрос
      return await checkReponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};