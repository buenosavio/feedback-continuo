import styled from "styled-components";

interface IProps {
  active?: boolean;  
}

export const Nav = styled.nav<IProps>`
  width: 100%;
  outline: 0;
  border: 0;
  opacity: 0;
  ${({ active }) => active && `    
    opacity: 1;
    visibility: visible;
  `}
`;

export const Div = styled.div`
  
`;
