import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';
import NotFound from './pages/not-found/NotFound';
import AuthProvider from './context/AuthContext';
import RegisterUser from './pages/register-user/RegisterUser';
import RegisterFeedback from './pages/register-feedback/RegisterFeedback';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ChangePassword from './pages/change-password/ChangePassword';


const Routers = () => {

  return (
    <BrowserRouter>
    <AuthProvider>
      <Header/>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Home/>} />      
        <Route path='/login' element={<Auth/>} />      
        <Route path='/register-feedback' element={<RegisterFeedback/>} />
        <Route path='/register-user' element={<RegisterUser/>} />
        <Route path='/change-password' element={<ChangePassword/>} />
      </Routes>
      <Footer/>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default Routers;