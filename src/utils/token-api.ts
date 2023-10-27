const checkReponse = (res:Response): Promise<any> => {
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


export const fetchWithRefresh = async (options: any) => {

  try {
    const res = await fetch('https://norma.nomoreparties.space/api/auth/user', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: options
      }
    });

    return await checkReponse(res);
  } catch (err:any) {
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

export const fetchWithRefreshPath = async (name:string, email: string, password: string, options:any) => {
  try {
    const res = await fetch('https://norma.nomoreparties.space/api/auth/user', {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: options
      },
      body: JSON.stringify({

        "email": email,
        "password": password,
        "name": name

      })
    })

    return await checkReponse(res);
  } catch (err:any) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken(); //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch('https://norma.nomoreparties.space/api/auth/user', {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: options
        },
        body: JSON.stringify({

          "email": email,
          "password": password,
          "name": name

        })
      }); //повторяем запрос
      return await checkReponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};