import { api } from '../api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { UserDTO } from '../model/UserDTO';
import { LoginDTO } from "../model/LoginDTO";
import { IAuthContext } from "../model/TypesDTO";
import { useNavigate } from "react-router-dom";
import { createContext, ReactElement, ReactNode, useEffect, useState } from "react";

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
      navigate('/')      
    } catch (error) {
      setLoginOn(false);
      setLoginOff(false);
      Notify.failure('Erro ao fazer login. Tente novamente!');
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setLoginOff(false);
    setLoginOn(false);
    navigate('/login')
  }

  const isLogged = () => {  
    const logged = localStorage.getItem('token')  
    if (!logged) {
      setLoginOn(false);
      setLoginOff(false);
      navigate('/login')
    }  
  }

  const isNotLogged = () => {
    const logged = localStorage.getItem('token')
    if (logged) {
      setLoginOff(false);
      navigate('/')
    }  
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      api.defaults.headers.common['Authorization'] = token;      
    }
    isLogged();
  },[]);

  return (
    <AuthContext.Provider value={{handleLogin, handleLogout, token, isLogged, isNotLogged, loginOn,loginOff}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;