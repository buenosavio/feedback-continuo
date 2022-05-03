import { api } from '../api';
import { Theme } from '../theme';
import { LoginDTO } from "../model/LoginDTO";
import { AxiosError } from 'axios';
import { handleError } from '../utils';
import { useNavigate } from "react-router-dom";
import { IAuthContext } from "../model/AuthDTO";
import { IChangePasswordDTO } from '../model/ChangePasswordDTO';
import { createContext, ReactElement, ReactNode, useEffect, useState } from "react";
import Notiflix, { Notify } from 'notiflix';

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
    Notiflix.Confirm.show(
      'Logout',
      'Tem certeza que deseja sair do sistema?',
      'Sim',
      'Não',
      function okCb() {
        localStorage.removeItem('token')
        setLoginOff(true);
        setLoginOn(false);
        navigate('/login')
      },
      function cancelCb() { 
        return     
      },
      {
        width: '320px',
        borderRadius: '8px',
        fontFamily: 'Roboto',
        titleColor: 'black',
        okButtonBackground: '#858282cc',
        cancelButtonBackground: Theme.color.BlueClear,        
      },
    );    
  }

  const changePassword = async (values: IChangePasswordDTO) => {
    const valuesFormatted = {
      newPassword: values.newPassword,
      oldPassword: values.oldPassword
    }
    try {
      await api.put(`/user/update-password?newPassword`, valuesFormatted)
      Notify.success('Senha alterada com sucesso!')
      navigate('/')
    } catch (error) {
      const errorData = error as AxiosError
      handleError(errorData)
    }
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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      api.defaults.headers.common['Authorization'] = token;      
    }
     isLogged(); 
  },[]);

  return (
    <AuthContext.Provider value={{handleLogin, handleLogout, token, isLogged, loginOn, loginOff, changePassword}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;