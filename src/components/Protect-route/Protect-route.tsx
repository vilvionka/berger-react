import { useSelector } from '../../services/type/index';
import { Navigate, useLocation } from "react-router-dom";
import { Interface } from "readline";
import {getRegisterSelector} from '../../services/register/selector';
import {getRegisterSelectorIsAuthChecked} from '../../services/register/selector'

interface IProtectedProps {
  onlyUnAuth?: false| true;
  component: JSX.Element;
}

const Protected = ({ onlyUnAuth = false, component }:IProtectedProps):JSX.Element|null => {
  // isAuthChecked это флаг, показывающий что проверка токена произведена
  // при этом результат этой проверки не имеет значения, важно только,
  // что сам факт проверки имел место.
  const isAuthChecked = useSelector(getRegisterSelectorIsAuthChecked);
  const user = useSelector(getRegisterSelector);
  const location = useLocation();

  if (!isAuthChecked) {
    // Запрос еще выполняется
    // Выводим прелоадер в ПР
    // Здесь возвращается просто null для экономии времени
    return null;
  }

  if (onlyUnAuth && user) {
    // Пользователь авторизован, но роут предназначен для неавторизованного пользователя
    // Делаем редирект на главную страницу или на тот адрес, что записан в location.state.from
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // !onlyUnAuth && user Пользователь авторизован и роут для авторизованного пользователя

  return component;
};

export const OnlyAuth = Protected;

interface IOnlyUnAuthProps{
  component:JSX.Element;
}
export const OnlyUnAuth = ({ component }: IOnlyUnAuthProps):JSX.Element => (
  <Protected onlyUnAuth={true} component={component} />
);
