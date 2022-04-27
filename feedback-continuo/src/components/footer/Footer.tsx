import { useContext, useEffect, useState } from "react";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";

const Footer = () => {
  

  const {loginOn} = useContext(AuthContext) as IAuthContext
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  

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
    
    <h1>Footer</h1>
    ) : null}
</>

  )
}

export default Footer;