import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { useContext, useEffect } from "react";

const Home = () => {

  const {isLogged, handleLogout} = useContext(AuthContext) as IAuthContext

  useEffect(() => {
    isLogged()
  },[])

  return(
    <>
      <h1>Home</h1>
      <button onClick={() => {handleLogout()}}>Logout</button>
    </>
  )
}

export default Home;