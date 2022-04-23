import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const {isLogged,handleLogout} = useContext(AuthContext) as IAuthContext
  
  useEffect(() => {
    isLogged();
  },[])

  return(
    <>
      <h1>Home</h1>
      <Link to='/register-feedback'>Register Feedback</Link>  
      <br />
      <button onClick={() => {handleLogout()}}>Logout</button>      
    </>
  )
}

export default Home;