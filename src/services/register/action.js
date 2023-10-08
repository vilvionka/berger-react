import { api } from "../../utils/api";
import { fetchWithRefresh } from "../../utils/token-api";
import { fetchWithRefreshPath } from "../../utils/token-api";


export const SET_AUTH_CHECKED = 'SET_AUTH_CHECKED';
export const SET_USER = 'SET_USER';



export const setAuthChecked = (value) => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const getRegistration = (name, email, password) => {
  return (dispatch) => {
    return api.getRegister(name, email, password).then((res) => {
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      dispatch(setUser(res.user));
      dispatch(setAuthChecked(true));
    });
  };
};

export const getUser = () => {
  return (dispatch) => {
    return fetchWithRefresh(localStorage.getItem('accessToken')).then((res) => {
      dispatch(setUser(res.user));
    })
  }
}

 



export const login = (email, password) => {
  return (dispatch) => {
    return api.login(email, password).then((res) => {
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      dispatch(setUser(res.user));
      dispatch(setAuthChecked(true));
    });
  };
};

export const checkUserAuth = () => {
  return (dispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUser())
        .catch(() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          dispatch(setUser(null));
        })
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
    }
  };
};

export const editLoad = (name, email, password, token) => {
  return (dispatch) => {
    return fetchWithRefreshPath(name, email, password, token).then((res) => {
      console.log(res)
      dispatch(setUser(res.user));
    })
  }
}


export const logout = (token) => {
  return (dispatch) => {
    return api.logout(token).then((res) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      dispatch(setUser(null));
    });
  };
};
