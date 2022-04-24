import { api } from "../../api";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserDataDTO } from "../../model/UserDTO";

import Tabs from '../../components/tabs'
import Tab from "../../components/tabs/Tab";


const Home = () => {

  const {isLogged,handleLogout} = useContext(AuthContext) as IAuthContext
  const [data, setData] = useState<any>({});
  const [received, setReceived] = useState<any>({});

  useEffect(() => {
    isLogged();
    getGivedFeedback();
    getReceveidFeedback();
  },[])

  
  const getGivedFeedback = async () => {
    try {

      const {data} = await api.get('/feedback/gived')
      console.log('este',data)
      setData(data)
    } catch (error) {
      Notify.failure('Erro ao fazer req. Tente novamente!');
    }
  }

  const getReceveidFeedback = async () =>{
    try {
      const{data} = await api.get('/feedback/receveid')
      console.log('aquele',data)
      setReceived(data)
    } catch (error) {
      Notify.failure('Erro ao fazer req. Tente novamente!');
    }
  }


  return(
    <>
      <h1>Home</h1>

      <Link to='/register-feedback'>Register Feedback</Link>

      <>
      <Tabs>
      <Tab title="Concedidos">
        <>
        {/* {data.map ((feedback:any) =>(
            <div key={feedback.createdAt}>
              <img src={feedback.profileUserImage} alt="" />
              <p>{feedback.userName}</p>
              <p>{feedback.message}</p>
              <p>{feedback.tags}</p>
            </div>
        ))} */}
        </>
      </Tab>
      <Tab title="Recebidos">Recebidos</Tab>
    </Tabs>
      </>
      <div>
       <button onClick={() => {handleLogout()}}>Logout</button>
      </div>
    </>
  )
}

export default Home;