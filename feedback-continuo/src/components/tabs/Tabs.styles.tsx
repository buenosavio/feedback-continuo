import styled from "styled-components";

export const ButtonTab = styled.button`
 width: 240px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #E7E7E7;
  color: rgba(24, 24, 24, 1);
  border-radius: 4px;

 &:hover{
  transform: scaleY(1.2);
  background: linear-gradient(180deg, #0166FE 0%, #295ba7 100%);
  color: #FFFFFF;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
}
`;

export const LiTab = styled.li`
display: flex;
`;

export const UlTab = styled.ul`
display: flex;
margin: 0 0 1px -40px;
&:active{
}
`;
