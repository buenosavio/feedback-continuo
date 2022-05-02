import styled from "styled-components";
import {IPropsDTO} from '../../model/IPropsDTO' 

export const RegisterForm = styled.div`
  text-align: center;
  margin-top: 60px;
`;

export const ImgLogin = styled.img`
  width: 120px;
  border-radius: 50%;
  margin-left: 30px;
  margin-top: 20px;
`;

export const SimpleText = styled.p<IPropsDTO>`
  display: inline;
  font-size: ${props => props.width || '15px'};
  margin: 0px 3px;  
  font-weight: ${props => props.itemType || 300} ;  
`