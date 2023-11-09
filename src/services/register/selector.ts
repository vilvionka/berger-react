import {RootState} from '../type/index'

export const getRegisterSelector = (store:RootState) => store.reduserRegister.user;
export const getRegisterSelectorUser = (store:RootState) => store.reduserRegister;
export const getRegisterSelectorIsAuthChecked = (store:RootState) => store.reduserRegister.isAuthChecked;