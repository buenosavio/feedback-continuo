import { useContext, useState } from "react";
import Loading from "../loading/Loading";
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { FooterComponent, SmallText } from "./Footer.styles";

const Footer = () => {
  
  const {loginOn} = useContext(AuthContext) as IAuthContext
  const [loading, setLoading] = useState<boolean>(false);  
  
  if (loading && loginOn) {
    return(
      <Loading/>
    ) 
  }
  return (
    <>
    {(loginOn) ? (
      <FooterComponent>
        <SmallText>Desenvolvido por Vem Ser DBC - 2022</SmallText>
      </FooterComponent>
    ) : null}
</>

  )
}

export default Footer;