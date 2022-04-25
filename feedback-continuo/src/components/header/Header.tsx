import { api } from "../../api";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { AuthContext } from "../../context/AuthContext";
import { UserDataDTO } from "../../model/UserDTO";
import { IAuthContext } from "../../model/TypesDTO";
import { useContext, useEffect, useState } from "react";

import Loading from "../loading/Loading";
import Error from "../error/Error";

const Header = () => {

  type UserDataDTO = {
  userId: string,
  name: string,
  email: string,
  profileImage?: string
  }

  const {loginOn, loginOff, handleLogout,isLogged} = useContext(AuthContext) as IAuthContext
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<UserDataDTO>({
    userId: '',
    name: '',
    email: '',
    profileImage:'',
  });

  useEffect(() => {    
    userFeedback();
    //isLogged();
  },[loginOn])

  const userFeedback = async () => {
    if (loginOn) {
      try {
        const {data} = await api.get('/user/user-loged')      
        setData(data)
        setError(false)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
        Notify.failure('Erro carregar dados do usuário logado. Tente novamente!');
      }
    }    
  }

  if (error) {
    return(
      <Error />
    ) 
  }

  if (loading && loginOn) {
    return(
      <Loading/>
    ) 
  }
  
  return (
    <>
    {(loginOn) ? (
    <>
    <header>
      <div key={data.userId}>
        <img src={data.profileImage} alt="Imagem do perfil" />
        <h4>Olá, {data.name}!</h4>
      </div>
    </header>
    <button onClick={() => {handleLogout()}}>Logout</button>
    </>
    ) : null}
    </>
  )
}

export default Header;