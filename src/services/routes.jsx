import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../components/AppContext';



export const MainRoutes = () => {
    const {isLoggedIn} = useContext(AppContext);

    return(
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home/:id' element={isLoggedIn ? <Home/> : <Login/>} />
        </Routes>
    )
}