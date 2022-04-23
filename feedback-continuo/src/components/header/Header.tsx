import { api } from "../../api";
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { useContext, useEffect, useState } from "react";


const Header = () => {

  const {loginOn, handleLogout} = useContext(AuthContext) as IAuthContext
  const [data, setData] = useState<any>({});

  useEffect(() => {
    
  },[])
  return (
    <>
    {loginOn && (
    <header>
    <h1>Header</h1>

    <button onClick={() => {handleLogout()}}>Logout</button>
    </header>
    
    )}
    </>
  )
}

export default Header;