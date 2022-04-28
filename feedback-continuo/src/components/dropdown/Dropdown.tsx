import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MinorButton } from "../../Global.styles";
import { IAuthContext } from "../../model/TypesDTO";
import { Div, Nav } from "./Dropdown.styles";
import { useOutsideClick } from "./useOutsideClick";
import { AuthContext } from "../../context/AuthContext";

const Dropdown = () => {

  const dropDownRef = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const navigate = useNavigate();
  const {handleLogout} = useContext(AuthContext) as IAuthContext
  return (
    <Div>
      <i onClick={onClick}>        
        <img width='10%' src="https://flyclipart.com/thumb2/mobile-menu-icon-png-40149.png" alt="Menu" />
      </i>
      <Nav ref={dropDownRef} active={isActive}>
        <ul>
          <li>
            <a onClick={() => {handleLogout()}}>Logout</a>        
          </li>
          <li>
            <a onClick={() => {navigate('/change-password')}}>Alterar senha</a> 
          </li>
        </ul>
      </Nav>
    </Div>
  )

}

export default Dropdown;
