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

import { FlexComponent,  } from "../../Global.styles";
import { HeaderComponent, UserText, MinorButton, EditImage } from "./Header.styles";
import convertBase64 from "../../utils/ConvertBase64";
import { useNavigate } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import FirstLetterUppercase from "../../utils/FirstLetterUppercase";

const Header = () => {

  type UserDataDTO = {
    userId: string,
    name: string,
    email: string,
    profileImage?: string
  }

  const navigate = useNavigate()
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

  const updateProfileImage = async (event: any) => {
    const formData = new FormData();
    formData.append('profileImage', event.target.files[0]);
    try {      
      const {data} = await api.put(`/user/update-profile-image`, formData, 
      {headers:{'Content-Type': 'multipart/form-data'}})
      userFeedback();
      Notify.success('Imagem atualizada com sucesso!');
    } catch (error) {
      const errorData = error as AxiosError 
      handleError(errorData)
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
    <HeaderComponent>
      <FlexComponent key={data.userId}>
        <FlexComponent>          
          <EditImage htmlFor="uploadImage" itemType={`data:image/png;base64,${data.profileImage}`}/>
          <input name ="uploadImage" id="uploadImage" type="file" 
            style={{display: 'none'}}
            onChange={(event) => {updateProfileImage(event)}}/>
          <UserText> Olá, {FirstLetterUppercase(data.name)}! </UserText>          
        </FlexComponent>               
        <Dropdown />              
      </FlexComponent>
    </HeaderComponent>
    </>
    ) : null}
    </>
  )
}

export default Header;
