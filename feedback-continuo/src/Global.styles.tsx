import styled, {DefaultTheme} from 'styled-components/'
import {theme} from './theme';
import { Link } from 'react-router-dom';



interface IProps {
  marginLeft?: string;  
}

export const Container = styled.div<{minHeight:string}>`
background: linear-gradient(to bottom right, #295ba7, #78b454);
min-height: ${props => props.minHeight};
display: flex;
justify-content: center;
align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

export const ContainerLogin = styled.div`
 background-color: ${theme.color.background};
  min-height: ${theme.Container.minHeight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardFormRegister = styled.div`
background-color:  ${theme.color.branco};
overflow: hidden;
margin: auto;
width: ${theme.Container.widhtRegister};
height: ${theme.Container.heightRegister};
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
border-radius: ${theme.fontSize.small}; ;
text-align: center;
align-items: center;
`;

export const CardHeader = styled.header`
padding-top: 10px;
padding-bottom: 10px;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
`;



export const TextDanger = styled.p<IProps>`  
  margin: 0;
  margin-left: ${props => props.marginLeft || 0};	
  padding: 0;
  font-size: 14px;
  color: ${theme.color.vermelhoWarning};
  font-weight: bolder;
  width: 100%;
  text-align: start;
`

export const TitleForm = styled.label`
font-size: 15px;
color: rgba(164, 166, 179, 1);
font-weight: bold;
text-align: left;
margin: 10px 0 5px 20px;
`;


export const Image = styled.img`
  border-radius: 50%;
  border: 2px solid white;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const ShowPassword = styled.a`
text-align: center;
position: absolute;
margin: 15px 0 0 120px;
cursor: pointer;
`;

export const MostrarSenha = styled.div`
  position: absolute;
  top: -8%; right:-15%;
  margin-right: 5%;
  margin-top: 5%;
  background:transparent;
  outline:none;
  border:none;
`

export const BackArrow = styled(Link)`
  color: black;
`;

export const Senha = styled.div`
  position: relative;
  text-align: center;
`

export const MinorButton = styled.button`
  display: block;
  width: 90%;
  padding: 10px 0;
  margin: 20px 0 10px 100px;
  text-align: center;
  font-size: ${theme.fontSize.small};
  color: ${theme.color.branco};
  background-color: ${theme.color.Azulclaro} ;
  font-weight: 500;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -1px);
  }
`;

export const FlexComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const MyComponent = styled.div`
  color: ${theme.color.background};
`;

export const GlobalInput = styled.input`
  padding: 0.5em;
  margin: 5px 10px 5px 20px;
  background: #FFF;
  border: 1px solid #d1d1d1;
  border-radius: 8px;
  width: 172%;
  height: 35px;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 14px;    
    color: rgba(164, 166, 179, 1);
  }
  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    transition: 2s;
    border-color: #aeaeb1 ; 
  }
`;



declare module 'styled-components' {
  export interface DefaultTheme{
    color:{
      AzulForte: string;
      Azulmeioforte: string;
      Azulclaro: string;
      Azulmuitoclaro:string;
      cinzaforte: string;
      cinzafraco:string;
      branco: string;
      vermelhoWarning:string;
      background: string;
    },
    fontSize:{
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
      superLarge: string;
    },
    Container:{
      minHeight: string;
      widthLogin:string;
      heightLogin: string;
      widhtRegister: string;
      heightRegister:string;
    }
}
}