import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import NotFound from './pages/not-found/NotFound';
import RegisterFeedback from './pages/register-feedback/RegisterFeedback';
import RegisterUser from './pages/register-user/RegisterUser';

const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/' element={<Home/>} />      
      <Route path='/login' element={<Auth/>} />      
      <Route path='/register-feedback' element={<RegisterFeedback/>} />
      <Route path='/register-user' element={<RegisterUser/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Routers;