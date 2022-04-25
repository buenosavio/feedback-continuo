import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserDataDTO } from "../../model/UserDTO";
import { api } from "../../api";
import {Notify} from "notiflix";

import Tabs from '../../components/tabs'
import Tab from "../../components/tabs/Tab";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";


const Home = () => {

  const {isLogged,handleLogout} = useContext(AuthContext) as IAuthContext
  const [data, setData] = useState<any>({});
  const [received, setReceived] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    isLogged();
    getGivedFeedback();    
  },[])

  
  const getGivedFeedback = async () => {
    try {
      const {data} = await api.get('/feedback/gived')
      console.log('enviados',data)
      setData(data)
      getReceveidFeedback();
    } catch (error) {
      setLoading(false)
      setError(true)
      Notify.failure('Erro ao carregar feedbacks. Tente novamente!');
    }
  }

  const getReceveidFeedback = async () =>{
    try {
      const{data} = await api.get('/feedback/receveid')
      console.log('recebidos',data)
      setReceived(data)
      setLoading(false)
    } catch (error) {
      Notify.failure('Erro ao carregar feedbacks. Tente novamente!');
    }
  }

  const formatTags = (tagList: string[]) => {
    let response = "";

    tagList.map((tag) => {
      response = response + " # " + tag
    }); 
    return response;
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
  return(
    <>
      <h1>Home</h1>

      <Link to='/register-feedback'>Register Feedback</Link>

      <>
      <Tabs>
      <Tab title="Recebidos">
        <>
        <h1>Recebidos</h1>
        {received ? received.map ((feedback:any) =>(
            <div key={feedback.createdAt}>
              <img src={feedback.profileUserImage} alt="" />
              <p>{feedback.userName}</p>
              <p>{feedback.message}</p>
              <p>{formatTags(feedback.tags)}</p>
            </div>
        )) : "Nenhum feedback recebido!"}
        </>
      </Tab>
      <Tab title="Enviados">
        <>
        <h1>Enviados</h1>
        {data ? data.map ((feedback:any) =>(
            <div key={feedback.feedbackId}>
              <img src={feedback.profileUserImage} alt="" />
              <p>{feedback.userName}</p>
              <p>{feedback.message}</p>
              <p>{formatTags(feedback.tags)}</p>
            </div>
        )): "Nenhum feedback enviado!"}
       </>
      </Tab>
    </Tabs>
      </>
      <div>
       <button onClick={() => {handleLogout()}}>Logout</button>
      </div>
    </>
  )
}

export default Home;