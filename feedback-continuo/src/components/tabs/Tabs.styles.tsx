import styled from "styled-components";
import { Theme } from "../../theme";

export const ButtonTab = styled.button<TabsProps>`
 width: 240px;
  height: 40px;
  background: rgba(66, 123, 209, 1);
  border: 1px solid rgba(66, 123, 209, 1);
  color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  &.is-selected {
  cursor: pointer;
  display: block;
}
&:focus{
  box-shadow: 0 0 0 2px rgba(0, 0, 255, .5);
  background: ${Theme.color.Azulclaro};
  color: white;
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
margin: 0 0 1px 0px;
align-items: center;
justify-content: center;
border-bottom: 1px solid #7e7e7e;
`;

interface TabsProps{
  setSelectedTab?:string
}