import { api } from "../../api";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { AxiosError } from "axios";
import { AuthContext } from "../../context/AuthContext";
import { InsertImage } from "../../Global.styles";
import { UserDataDTO } from "../../model/UserDTO";
import { IAuthContext } from "../../model/AuthDTO";
import { FlexComponent } from "../../Global.styles";
import { HeaderComponent, Itens, UserText } from "./Header.styles";
import { useContext, useEffect, useState } from "react";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import Dropdown from "../dropdown/Dropdown";
import { FirstLetterUppercase, handleError } from "../../utils";

const Header = () => {

  const {loginOn} = useContext(AuthContext) as IAuthContext
  const [data, setData] = useState<UserDataDTO>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {    
    userLogged();
  },[loginOn])

  const userLogged = async () => {
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
      userLogged();
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
      <Itens>
        <FlexComponent key={data ? data.userId : null}>
          <FlexComponent>          
            <InsertImage htmlFor="uploadImage" itemType={`data:image/png;base64,${data ? data.profileImage : ''}`}/>
            <input name ="uploadImage" id="uploadImage" type="file" 
              style={{display: 'none'}}
              onChange={(event) => {updateProfileImage(event)}}/>
            <UserText> Olá, {data ? FirstLetterUppercase(data.name) : null}! </UserText>          
          </FlexComponent>               
          <Dropdown />              
        </FlexComponent>
      </Itens>
    </HeaderComponent>
    </>
    ) : null}
    </>
  )
}

export default Header;
