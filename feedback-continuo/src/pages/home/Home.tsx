import { api } from "../../api";
import { Link } from "react-router-dom";
import { Image } from "../../Global.styles";
import { Notify } from "notiflix";
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { GivedFeedbackDTO } from "../../model/FeedbackDTO";
import { useContext, useEffect, useState } from "react";

import Tabs from '../../components/tabs'
import Tab from "../../components/tabs/Tab";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import Card from "../../components/cards/Card";

const Home = () => {

  const {isLogged} = useContext(AuthContext) as IAuthContext
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
      response = response + " #" + tag
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
        {received ? received.map ((feedback:GivedFeedbackDTO) =>(
            <div key={feedback.createdAt}>
              <Image src={feedback.profileUserImage} alt="" width="80px" height="80px"/>
              <p>{feedback.userName}</p>
              <p>{feedback.message}</p>
              <p>{formatTags(feedback.tags)}</p>  
              {/* <Card key={feedback.createdAt} profileUserImage= {feedback.profileUserImage}userName={feedback.userName} message={feedback.message} tags={formatTags(feedback.tags)}/>  */} 
        </div> 
            
        )) : "Nenhum feedback recebido!"}
        </>
      </Tab>
      <Tab title="Enviados">
        <>
        <h1>Enviados</h1>
        {data ? data.map ((feedback:GivedFeedbackDTO) =>(
            <div key={feedback.feedbackId}>
              <Image src={feedback.profileUserImage} alt="" width="80px" height="80px"/>
              <p>{feedback.userName}</p>
              <p>{feedback.message}</p>
              <p>{formatTags(feedback.tags)}</p>
            </div>
        )): "Nenhum feedback enviado!"}
       </>
      </Tab>
    </Tabs>
      </>      
    </>
  )
}

export default Home;