import { api } from "../../api";
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { useContext, useEffect, useState } from "react";
import Loading from "../loading/Loading";
import Error from "../error/Error";
// import { UserDataDTO } from "../../model/UserDTO";


const Header = () => {

  type UserDataDTO = {
  userId: string,
  name: string,
  email: string,
  profileImage?: string
  }

  const {loginOn,loginOff, handleLogout,isLogged} = useContext(AuthContext) as IAuthContext
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
    isLogged();
  },[])

  const userFeedback = async () => {
    try {
      const {data} = await api.get('/user/user-loged')
      setData(data)
      setLoading(true)
    } catch (error) {
      setError(true)
      setLoading(false)
      console.log(error)
    }
  }

  if (loading) {
    return(
      <Loading/>
    ) 
  }
  if (error) {
    return(
      <Error />
    ) 
  }
  return (
    <>
    {loginOn && (
    <>
        <header>
      <div key={data.userId}>
    <img src={data.profileImage} alt="" />
    <h4>Olá, {data.name}!</h4>
    </div>
    </header>
    <button onClick={() => {handleLogout()}}>Logout</button>
    </>
    )}
    </>
  )
}

export default Header;