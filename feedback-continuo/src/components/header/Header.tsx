import { api } from "../../api";
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { useContext, useEffect, useState } from "react";


const Header = () => {

  const {loginOn,loginOff, handleLogout} = useContext(AuthContext) as IAuthContext
  const [data, setData] = useState<any>({});

  useEffect(() => {
    userFeedback();
  },[])

  const userFeedback = async () => {
    try {
      // const {data} = await api.get('/user/user-loged')
      // setData(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    {loginOn && (
    <>
    <header>
      {/* <div key={data.userId}>
        <img src={data.profileImage} alt="" />
        <h4>Olá, {data.name}!</h4>
      </div> */}
    </header>
    <button onClick={() => {handleLogout()}}>Logout</button>
    </>
    )}
    </>
  )
}

export default Header;