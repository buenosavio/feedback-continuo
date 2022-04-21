import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { LoginDTO } from "../model/LoginDTO";
import { useNavigate, useParams } from "react-router-dom";
import { IAuthContext } from "../model/TypesDTO";
import { createContext, FC, ReactElement, ReactNode, useState } from "react";
import axios from 'axios';
import { UserDTO } from '../model/UserDTO';

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = ({ children }: {children: ReactNode}): ReactElement => {

  const [token, setToken] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = (values: LoginDTO) => {
    try {
      //requisicao api  //async await      
      setToken('Bearer XXX');
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = token;
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

  const registerUser = (values: UserDTO) => {
    try {
      //requisicao post na api //async await // validar se email já existe na base
      console.log(values)
    } catch (error) {
      Notify.failure('Erro ao fazer login. Tente novamente!');
    }
  }

  return (
    <AuthContext.Provider value={{handleLogin, token, isLogged, isNotLogged, registerUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;