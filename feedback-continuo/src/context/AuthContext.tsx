import { api } from '../api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { UserDTO } from '../model/UserDTO';
import { LoginDTO } from "../model/LoginDTO";
import { IAuthContext } from "../model/TypesDTO";
import { useNavigate } from "react-router-dom";
import { createContext, ReactElement, ReactNode, useState } from "react";


export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = ({ children }: {children: ReactNode}): ReactElement => {

  const [token, setToken] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async (values: LoginDTO) => {
    try {
      const {data} = await api.post('/auth/sign-in/', values)      
      localStorage.setItem('token', data)
      api.defaults.headers.common['Authorization'] = data;
      navigate('/')      
    } catch (error) {
      Notify.failure('Erro ao fazer login. Tente novamente!');
    }
  }

  const isLogged = () => {  
    const logged = localStorage.getItem('token')    
    return (
      !logged ? navigate('/login') : null
    )    
  }

  const isNotLogged = () => {
    const logged = localStorage.getItem('token')      
    return (
      logged ? navigate('/') : null
    )  
  }

  const registerUser = async (values: UserDTO) => {
    try {
      const {data} = await api.post('auth/sign-up/', values)
      localStorage.setItem('token', data)
      api.defaults.headers.common['Authorization'] = data;
      navigate('/')
    } catch (error) {
      Notify.failure('Erro realizar cadastro. Tente novamente!');
    }
  }

  return (
    <AuthContext.Provider value={{handleLogin, token, isLogged, isNotLogged, registerUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;