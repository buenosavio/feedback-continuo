import { api } from '../api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { UserDTO } from '../model/UserDTO';
import { LoginDTO } from "../model/LoginDTO";
import { IAuthContext } from "../model/TypesDTO";
import { useNavigate } from "react-router-dom";
import { createContext, ReactElement, ReactNode, useEffect, useState } from "react";
import { AxiosError } from 'axios';
import handleError from '../utils/Error';

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = ({ children }: {children: ReactNode}): ReactElement => {

  const [token, setToken] = useState<string>('');
  const navigate = useNavigate();
  const [loginOn, setLoginOn] = useState(false);
  const [loginOff, setLoginOff] = useState(true);
  
  const handleLogin = async (values: LoginDTO) => {
    try {
      const {data} = await api.post('/auth/sign-in/', values)      
      localStorage.setItem('token', data)
      api.defaults.headers.common['Authorization'] = data;
      setLoginOn(true);
      setToken(data);
      navigate('/')      
    } catch (error) {
      setLoginOn(false);
      setLoginOff(true);
      const errorData = error as AxiosError 
      handleError(errorData)            
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setLoginOff(true);
    setLoginOn(false);
    navigate('/login')
  }

  const isLogged = async () => {      
    const logged = localStorage.getItem('token');
    if (logged) {
      api.defaults.headers.common['Authorization'] = logged;
      setLoginOn(true)
    }    
    if (!logged) {
      setLoginOn(false);
      setLoginOff(true);
      navigate('/login')
    }
  }

  const isNotLogged = () => {
    const logged = localStorage.getItem('token')
    if (logged) {
      setLoginOff(true);
      navigate('/')
    }  
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      api.defaults.headers.common['Authorization'] = token;      
    }
    //isLogged();
  },[]);

  return (
    <AuthContext.Provider value={{handleLogin, handleLogout, token, isLogged, isNotLogged, loginOn,loginOff}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;