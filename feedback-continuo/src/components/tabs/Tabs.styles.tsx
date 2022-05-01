import styled from "styled-components";
import { Theme } from "../../theme";

export const ButtonTab = styled.button<TabsProps>`
 width: 240px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #E7E7E7;
  color: rgba(24, 24, 24, 1);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  &.is-selected {
  cursor: pointer;
  display: block;
}
&:focus{
  box-shadow: 0 0 0 2px rgba(0, 0, 255, .5);
  transform: scaleY(1.1);
  background: ${Theme.color.Azulclaro};
  color: #FFFFFF;
  border: 0;
  cursor: pointer;
  display: block;
  outline: none;
  }
`;

export const LiTab = styled.li<TabsProps>`
display: flex;

`;

export const UlTab = styled.ul`
display: flex;
margin: 0 0 1px -40px;
`;

interface TabsProps{
  setSelectedTab?:string
}