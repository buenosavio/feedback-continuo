import { api } from "../../api";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { useContext, useEffect, useState } from "react";
import { Image } from "../../Global.styles";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import handleError from '../../utils/Error'
import { AxiosError } from "axios";

const Header = () => {

  type UserDataDTO = {
  userId: string,
  name: string,
  email: string,
  profileImage?: string
  }

  const {loginOn, handleLogout} = useContext(AuthContext) as IAuthContext
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
        const errorData = error as AxiosError 
      handleError(errorData)
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
        <Image src={data.profileImage} width="80px" height="80px" alt="Imagem do perfil" />
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