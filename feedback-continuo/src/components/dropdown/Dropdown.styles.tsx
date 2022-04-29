import styled from "styled-components";
import { Theme } from "../../theme";

interface IProps {
  active?: boolean;  
}

export const Nav = styled.nav<IProps>`
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
    left: -265%;    
  `}
`;

export const Div = styled.div`
  margin-right: 20px;
  position: relative;
  top: 0; left: 0;
`;

export const Ul = styled.ul`
  background:${Theme.color.backgroundGradient};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
  border: 1px solid ${Theme.color.primary};
  width: 120%;
`

export const ItemMenu = styled.a`  
  margin-left: 5px;
`

export const Li = styled.li`
  font-size: 20px;
  color: white;  
  background-color: ${Theme.color.secondary}; ;
  
  border-radius: 10px;
  padding: 5px;
  display: flex;
  align-items: center;
  margin: 10px 10px 10px -30px;  
  transition: 2s;
  :hover {
    background-color: #858282cc;
    cursor: pointer;
    transition: 2s;
    transform: scale(1.05);
  }
  
`
