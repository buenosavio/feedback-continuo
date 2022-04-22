import {AuthContext} from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { ChangeEvent, useContext, useEffect, useState } from "react";

const RegisterFeedback = () => {

  const {isLogged} = useContext(AuthContext) as IAuthContext

  useEffect(() => {
    isLogged()
  },[])

  return (
    <h1>Register Feedback</h1>
  )
}

export default RegisterFeedback;