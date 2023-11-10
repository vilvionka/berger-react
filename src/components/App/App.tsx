import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import AppHeader from '../AppHeader/AppHeader';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import {useSelector, useDispatch} from '../../services/type/index';
import { loadIngredients } from '../../services/ingredients/action';
import { getIngrediensSelectorMain } from '../../services/ingredients/selector';
import { useEffect } from 'react';
import { Login } from '../../pages/Login/Login';
import { Register } from '../../pages/Register/Register';
import { ForgotPassword } from '../../pages/ForgotPassword/ForgotPassword';
import { RessetPassword } from '../../pages/RessetPassword/RessetPassword';
import { Profile } from '../../pages/Profile/Profile';
import { Orders } from '../../pages/Orders/Orders';
import {ProfilePage} from '../../pages/ProfilePage/ProfilePage';
import {checkUserAuth} from '../../services/register/action';
import { OnlyAuth, OnlyUnAuth } from "../Protect-route/Protect-route";
import { IData } from '../../services/type/index';



function App():JSX.Element {

  const { loading, error, ingredient }: IData = useSelector(getIngrediensSelectorMain);

  const dispatсh = useDispatch();

  useEffect(() => {
    
    dispatсh(loadIngredients());
   
    dispatсh(checkUserAuth());
    
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    navigate(-1);
  };

  if (loading) {
    return <p>Загрузка...</p>
  }
  if (!loading && error) {
    return <p>{`Ошибка: ${error}`}</p>
  }
  if (ingredient.length > 0) {
    return (
      <>
        <AppHeader />
        <Routes location={background || location}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<OnlyUnAuth component={<Login/>}/>} />
          <Route path='/register' element={<OnlyUnAuth component={<Register/>}/>} />
          <Route path='/forgot-password' element={<OnlyUnAuth component={<ForgotPassword/>}/>} />
          <Route path='/resset-password' element={<OnlyUnAuth component={<RessetPassword/>}/>} />
          <Route path='/profile' element={<OnlyAuth component={<Profile/>} />}>
            <Route index element = {<ProfilePage/>}/>
            <Route path='orders' element = {<Orders/>}/>
          </Route>
          <Route path='/ingredients/:ingredientId'
            element={<IngredientDetails />} />
        </Routes>

        {background && (
          <Routes>
            <Route
              path='/ingredients/:ingredientId'
              element={
                <Modal modalClose={handleModalClose}>
                  <IngredientDetails />
                </Modal>
              }
            />
          </Routes>
        )}
      </>
    );
  } else {
    return (
      <p>Ждемс...</p>
    )
  }
}

export default App;
