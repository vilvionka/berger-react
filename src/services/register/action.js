import { api } from "../../utils/api";
import { fetchWithRefresh } from "../../utils/token-api";


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
    return fetchWithRefresh(localStorage.getItem('accessToken'))
  }
}

;

export const getForgotPassword = (email) => {
  return (dispatch) => {
    return api.getForgotPassword(email).then((res) => {
     if(res.message === "Reset email sent"){
      console.log('yes')
     }
    });
  }
}

export const getRessetPassword = (password, token) => {
  return (dispatch) => {
    return api.getRessetPassword(password, token).then((res) => {
      if(res.message === "Password successfully reset"){
        console.log('yes')
       }
    });
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


export const logout = () => {
  return (dispatch) => {
    return api.logout().then(() => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      dispatch(setUser(null));
    });
  };
};
