import { createContext,ReactNode , ReactElement, useState, useEffect } from "react";

import { api } from '../api';
import { AuthContext } from "./AuthContext";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const FeedbackContext = createContext


const FeedbackProvider = ({children}: {children: ReactNode}): any => {


  const getGivedFeedback = async (values:any) => {
    try {

      const {data} = await api.get('/feedback/gived')
      console.log(data)
      localStorage.setItem('Gived',data)
    } catch (error) {
      Notify.failure('Erro ao fazer req. Tente novamente!');
    }
  }

  const getReceveidFeedback = async (values:any) =>{
    try {
      const{data} = await api.get('/feedback/receveid')
      console.log('aquele',data)
      localStorage.setItem('Receveid',data)
    } catch (error) {
      Notify.failure('Erro ao fazer req. Tente novamente!');
    }
  }
// return(
//   <FeedbackContext.Provider value={{getReceveidFeedback,getGivedFeedback}}>
//       {children}
//   </FeedbackContext.Provider>
// )
}