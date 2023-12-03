import {RootState} from '../type/index'

export const getRegisterSelector = (store:RootState) => store.reducerRegister.user;
export const getRegisterSelectorUser = (store:RootState) => store.reducerRegister;
export const getRegisterSelectorIsAuthChecked = (store:RootState) => store.reducerRegister.isAuthChecked;