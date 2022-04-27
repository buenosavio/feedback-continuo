import { api } from "../../api";
import { Link } from "react-router-dom";
import { Notify } from "notiflix";
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { GivedFeedbackDTO } from "../../model/FeedbackDTO";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import {AxiosError} from "axios"

import Tabs from '../../components/tabs'
import Tab from "../../components/tabs/Tab";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import Card from "../../components/cards/Card";
import handleError from '../../utils/Error'

const Home = () => {

  const {isLogged} = useContext(AuthContext) as IAuthContext
  const [gived, setGived] = useState<any>({});
  const [received, setReceived] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [currentPageReceived, setCurrentPageReceveid] = useState<number>(0);
  const [currentPageGived, setCurrentPageGived] = useState<number>(0);
  const [totalPagesReceived, setTotalPagesReceived] = useState(0);
  const [totalPagesGived, setTotalPagesGived] = useState(0);
  const [btnDisabledReceived, setBtnDisabledReceived] = useState<boolean>(false);
  const [btnDisabledGived, setBtnDisabledGived] = useState<boolean>(false);
  const [btnDisabledReceivedPrevious, setBtnDisabledReceivedPrevious] = useState<boolean>(true);
  const [btnDisabledGivedPrevious, setBtnDisabledGivedPrevious] = useState<boolean>(true);
 
  useEffect(() => {
    isLogged();
    getGivedFeedback();    
  },[currentPageGived, currentPageReceived])

  const getGivedFeedback = async () => {
    try {
      const {data} = await api.get(`/feedback/gived?page=${currentPageGived}`)          
      setGived(data.content)  
      setTotalPagesGived(data.totalPages)
      if (data.totalPages <= 1){
        setBtnDisabledGived(true)
        setBtnDisabledReceived(true)
        setBtnDisabledReceivedPrevious(true)
        setBtnDisabledGivedPrevious(true)
      }
      getReceveidFeedback();
    } catch (error) {
      setLoading(false)
      setError(true)
      const errorData = error as AxiosError 
      handleError(errorData)
    }
  }

  const nextPageGived = () => {
    setCurrentPageGived(currentPageGived + 1);
    setBtnDisabledGivedPrevious(false)
    if (currentPageGived + 1 >= totalPagesGived-1) {
      setBtnDisabledGived(true);
    }        
  }

  const nextPageReceived = () => {
    setCurrentPageReceveid(currentPageReceived + 1);
    setBtnDisabledReceivedPrevious(false)
    if (currentPageReceived+1 >= totalPagesReceived-1) {
      setBtnDisabledReceived(true)      
    }
  }

  const previousPageGived = () => {
    setBtnDisabledGived(false);
    setCurrentPageGived(currentPageGived - 1);
    if (currentPageGived <= 1) {
      setBtnDisabledGivedPrevious(true);
    }      
  }

  const previousPageReceived = () => {
    setBtnDisabledReceived(false)     
    setCurrentPageReceveid(currentPageReceived - 1); 
    if (currentPageReceived <= 1) {
      setBtnDisabledReceivedPrevious(true)       
    }
  }

  const getReceveidFeedback = async () =>{
    try {
      const{data} = await api.get(`/feedback/receveid?page=${currentPageReceived}`)  
      setReceived(data.content)
      setTotalPagesReceived(data.totalPages)
      if (data.totalPages === 1){
        setBtnDisabledReceived(true)
        setBtnDisabledReceivedPrevious(true)
      }
      setLoading(false)
    } catch (error) {
      const errorData = error as AxiosError 
      handleError(errorData)
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
          <div key={feedback.feedbackId}>
              <Card  profileUserImage= {feedback.profileUserImage}userName={feedback.userName} message={feedback.message} tags={formatTags(feedback.tags)} createdAt={moment(feedback.createdAt).format('DD MM YYYY')}/>  
            </div>
        )) : "Nenhum feedback recebido!"}     
        <button disabled={btnDisabledReceivedPrevious} onClick={() => previousPageReceived()}>Previous</button> 
        <button disabled={btnDisabledReceived} onClick={() => nextPageReceived()}>Next</button>
        </>
      </Tab>
      <Tab title="Enviados">
        <>
        <h1>Enviados</h1>
        {gived ? gived.map ((feedback:GivedFeedbackDTO) =>(
            <div key={feedback.feedbackId}>
                <Card  profileUserImage= {feedback.profileUserImage}userName={feedback.userName} message={feedback.message} tags={formatTags(feedback.tags)} createdAt={moment(feedback.createdAt).format('DD MM YYYY')}/>          
            </div>
        )): "Nenhum feedback enviado!"}
        <button disabled={btnDisabledGivedPrevious} onClick={() => previousPageGived()}>Previous</button>
        <button disabled={btnDisabledGived} onClick={() => nextPageGived()}>Next</button>
       </>
      </Tab>
    </Tabs>
      </>      
    </>
  )
}

export default Home;


