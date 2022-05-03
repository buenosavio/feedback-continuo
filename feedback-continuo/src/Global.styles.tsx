import { Theme } from './theme';
import { IPropsDTO } from './model/IPropsDTO'

import styled from 'styled-components/'

export const Container = styled.div<IPropsDTO>`
  background: ${Theme.color.GreyClear};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const ContainerForm = styled.div`
  background: ${Theme.color.BackgroundGradientBlur};
  backdrop-filter: blur(24px);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCenter = styled.div<IPropsDTO>`
  background: ${Theme.color.GreyClear};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form<IPropsDTO>`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin-top: ${props => props.marginLeft || '0px'} ;
`;

export const CardForm = styled.div<IPropsDTO>`
  background-color: rgba(255, 255, 255, 1);
  margin: auto;
  width: ${props => props.widht};
  max-width: ${props => props.widht};
  height: ${props => props.height};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  text-align: center;
  align-items: center;
  position: relative;
`;

export const CardFormRegister = styled.div`
  background-color:  ${Theme.color.White};
  overflow: hidden;
  margin: auto;
  width: ${Theme.Container.widhtRegister};
  height: ${Theme.Container.heightRegister};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: ${Theme.fontSize.small}; ;
  text-align: center;
  align-items: center;
`;

export const TextDanger = styled.p<IPropsDTO>`  
  margin: 0;
  margin-left: ${props => props.marginLeft || '20px'};	
  padding: 0;
  font-size: 14px;
  color: ${Theme.color.RedWarning};
  font-weight: bolder;
  width: 100%;
  text-align: start;
`;

export const TitlePrincipal = styled.h1`
  font-size: 25px;
  color: #000000;
  font-weight: 400;
  text-align: center;
  align-items: center;
`;

export const TitleForm = styled.label`
  font-size: 15px;
  color: #000000;
  font-weight: 300;
  text-align: left;
  margin: 5px 0px 7px 20px;
`;

export const ShowPassword = styled.a`
  text-align: center;
  position: absolute;
  margin: 15px 0 0 120px;
  cursor: pointer;
`;

export const MostrarSenha = styled.div`
  position: absolute;
  top: -21%; right:-15%;
  margin-right: 5%;
  margin-top: 5%;
  background:transparent;
  outline:none;
  border:none;
`;

export const Senha = styled.div`
  position: relative;
  text-align: center;
`;

export const MinorButton = styled.button<IPropsDTO>`    
  width: 150px;
  padding: 10px 0;
  margin: auto;
  align-items: center;
  text-align: center;
  font-size: 15px;
  color: ${Theme.color.White};
  margin-left: ${props => props.marginLeft || 0};
  color: ${(props) => Theme.color.White};
  background-color: ${props => props.backgroundColor} ;
  font-weight: 500;
  border: 0;
  border-radius: 8px;
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

export const FlexButton = styled.div<IPropsDTO>`
  display: flex;  
  justify-content: space-evenly;
  width: ${props => props.widht};  //380
  position: absolute;
  margin-left: ${props => props.marginLeft || 0}; //4%
  top: ${props => props.top}; //93%
`; 

export const Input = styled.input<IPropsDTO>`
  padding: 0.5em;
  margin: 5px 10px 5px 20px;
  background: #FFF;
  border: 1px solid #d1d1d1;
  border-radius: 8px;
  width: 172%;
  height: 35px;
  height: 25px;
  ::placeholder,
  ::-webkit-input-placeholder {
      font-size: 14px;    
      color: rgba(164, 166, 179, 1);
  }
  :focus {
        box-shadow: 0 0 0 0;
        outline: 0;
        transition: 2s;    
        border: 1px solid ${Theme.color.BlueClear};
    }
`;
export const InsertImage = styled.label<IPropsDTO>`
  margin-left: ${props => props.marginLeft || 0};
  width: 100px;
  height: 100px; 
  border-radius: 50%;
  border: 1px solid white;
  background-image: url(${props => props.itemType});
  background-size: 100% 100%; 
  :hover {    
    opacity: 0.7; 
    ::before {
      display: flex;
      text-align: center;      
      font-weight: bold;           
      margin-top: 25%;
      content: 'Selecionar Imagem';            
      background-color: white;
      color: black; 
      border-radius: 10px;      
    }
  }  
`;
