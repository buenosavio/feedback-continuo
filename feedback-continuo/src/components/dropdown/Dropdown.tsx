import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAuthContext } from "../../model/TypesDTO";
import { Div, Nav, Li, Ul, ItemMenu } from "./Dropdown.styles";
import { AuthContext } from "../../context/AuthContext";
import { AiOutlineMenu } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";


const Dropdown = () => {

  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const toogleClick = () => setIsActive(!isActive);
  const navigate = useNavigate();
  const {handleLogout} = useContext(AuthContext) as IAuthContext

  return (
    <Div>          
      <Div>
        <AiOutlineMenu onClick={toogleClick} size={40} cursor={"pointer"}/>          
      </Div>
      <Nav ref={dropDownRef} active={isActive} onClick={toogleClick}>
        <Ul>
          <Li>
            <RiLockPasswordFill />
            <ItemMenu onClick={() => {navigate('/change-password')}}>Alterar senha</ItemMenu> 
          </Li>
          <Li>
            <FiLogOut />
            <ItemMenu onClick={() => {handleLogout()}}>Logout</ItemMenu>        
          </Li>
        </Ul>
      </Nav>
    </Div>
  )

}

export default Dropdown;
