import { FC, ReactElement, ReactNode, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";

const RegisterUser = () => {

  const {isLogged} = useContext(AuthContext) as IAuthContext

  useEffect(() => {
    isLogged()
  },[])

  return(
    <h1>RegisterUsuario</h1>
  )
}

export default RegisterUser;