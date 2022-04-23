import { api } from "../../api";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { useContext, useEffect, useState } from "react";

const Home = () => {

  const {isLogged,handleLogout} = useContext(AuthContext) as IAuthContext
  const [data, setData] = useState<any>({});

  useEffect(() => {
    isLogged();
    setup()
  },[])

  const setup = async () => {
    try {
      const {data} = await api.get('/user/list-all-users');
      console.log(data)
      setData(data)
    } catch (error) {
      Notify.failure('Erro ao fazer req. Tente novamente!');
    }
  }
  return(
    <>
      <h1>Home</h1>
      <div>
      <button onClick={() => {handleLogout()}}>Logout</button>
      </div>
    </>
  )
}

export default Home;