import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAuthContext } from "../../model/TypesDTO";
import { Div, Nav, Li, Ul, ItemMenu } from "./Dropdown.styles";
import { AuthContext } from "../../context/AuthContext";
import { AiOutlineMenu } from "react-icons/ai";
import { RiLockPasswordFill, RiArrowDropDownLine, RiArrowDropUpLine, RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
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
      {isActive ? <RiArrowDropUpLine onClick={toogleClick} size={60} cursor={"pointer"} color={'#FFFFFF'}/> 
                : <RiArrowDropDownLine onClick={toogleClick} size={60} cursor={"pointer"} color={'#FFFFFF'}/>}        
      </Div>
      <Nav ref={dropDownRef} active={isActive} onClick={toogleClick}>
        <Ul>
          <Li onClick={() => {navigate('/change-password')}}>
            <RiLockPasswordFill />
            <ItemMenu>Alterar senha</ItemMenu> 
          </Li>
          <Li onClick={() => {handleLogout()}}>
            <FiLogOut />
            <ItemMenu>Logout</ItemMenu>        
          </Li>
        </Ul>
      </Nav>
    </Div>
  )

}

export default Dropdown;
