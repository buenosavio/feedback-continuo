import styled from "styled-components";
import { Theme } from "../../theme";
import {IPropsDTO} from "../../model/IPropsDTO"

export const Nav = styled.nav<IPropsDTO>`
  outline: 0;
  border: 0;
  opacity: 0;
  display: none;
  margin-right: 20px;
  position: absolute;
  top: 0; left:0;
  ${({ active }) => active && `    
    opacity: 1;
    display: block;
    position: absolute;
    top: 40%;
    left: -310%;    
  `}
`;

export const Div = styled.div`
  margin-right: 20px;
  position: relative;
  top: 0; left: 0;
`;

export const Ul = styled.ul`
  background:${Theme.color.Secondary}; 
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border: 1px solid ${Theme.color.Primary};
  width: 85%;
`

export const ItemMenu = styled.a`  
  margin-left: 5px;
`

export const Li = styled.li`
  width: 250px;
  font-size: 20px;
  color: white;  
  background-color: ${Theme.color.Primary}; ;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  margin: 10px 10px 10px -30px;  
  transition: 2s;
  :hover {    
    cursor: pointer;
    transition: 2s;
    transform: scale(1.05);
  }
  
`
