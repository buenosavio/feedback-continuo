import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';
import NotFound from './pages/not-found/NotFound';
import AuthProvider from './context/AuthContext';
import RegisterUser from './pages/register-user/RegisterUser';
import RegisterFeedback from './pages/register-feedback/RegisterFeedback';
import Header from './components/header/Header';

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
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default Routers;