import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { LoginDTO } from "../model/LoginDTO";
import { useNavigate } from "react-router-dom";
import { IAuthContext } from "../model/TypesDTO";
import { createContext, FC, ReactElement, ReactNode, useState } from "react";

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = ({ children }: {children: ReactNode}): ReactElement => {

  const [token, setToken] = useState<string>('');

  const navigate = useNavigate();

  const handleLogin = (values: LoginDTO) => {
    try {
      //requisicao api  //async await      
      setToken('Bearer XXX');
      localStorage.setItem('token', token)
      navigate('/')      
    } catch (error) {
      Notify.failure('Erro ao fazer login. Tente novamente!');
    }
  }

  const isLogged = () => {  
    const logged = localStorage.getItem('token')    
    return (
      !logged ? navigate('/login') : navigate('/')
    )    
  }

  return (
    <AuthContext.Provider value={{handleLogin, token, isLogged}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;