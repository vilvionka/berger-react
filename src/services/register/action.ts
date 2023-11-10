import { api } from "../../utils/api";
import { fetchWithRefresh } from "../../utils/token-api";
import { fetchWithRefreshPath } from "../../utils/token-api";
import {AppDispatch, AppThunk} from '../type/index'


export const SET_AUTH_CHECKED: 'SET_AUTH_CHECKED' = 'SET_AUTH_CHECKED';
export const SET_USER: 'SET_USER' = 'SET_USER';

export interface IUser{
  name: string;
  email: string;
}
interface ISetAuthCheckedAction {
  readonly type: typeof SET_AUTH_CHECKED;
  readonly payload: boolean;
}

interface ISetUserAction {
  readonly type: typeof SET_USER;
  readonly payload: IUser | null;
}
export type TActionsRegister =
  ISetAuthCheckedAction |
  ISetUserAction;

export const setAuthChecked = (value: boolean) => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user: IUser | null) => ({
  type: SET_USER,
  payload: user,
});

export const getRegistration = (name: string, email: string, password: string):AppThunk => {
  return (dispatch) => {
    return api.getRegister(name, email, password).then((res) => {
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      dispatch(setUser(res.user));
      dispatch(setAuthChecked(true));
    });
  };
};

export const getUser = ():AppThunk => {
  return (dispatch) => {
    return fetchWithRefresh(localStorage.getItem('accessToken')).then((res) => {
      dispatch(setUser(res.user));
    })
  }
}





export const login = (email: string, password: string):AppThunk => {
  return (dispatch) => {
    return api.login(email, password).then((res) => {
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      dispatch(setUser(res.user));
      dispatch(setAuthChecked(true));
    });
  };
};

export const checkUserAuth = ():AppThunk => {
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

export const editLoad = (name:string, email:string, password:string, token:string):AppThunk => {
  return (dispatch) => {
    return fetchWithRefreshPath(name, email, password, token).then((res) => {
      console.log(res)
      dispatch(setUser(res.user));
    })
  }
}


export const logout = (token:string):AppThunk => {
  return (dispatch:) => {
    return api.logout(token).then((res) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      dispatch(setUser(null));
    });
  };
};
