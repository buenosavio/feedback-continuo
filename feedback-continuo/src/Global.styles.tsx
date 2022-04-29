import styled from 'styled-components/'
import { Theme } from './theme';


import Deafult from './images/feedbacklogo.png'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

export const ContainerLogin = styled.div`
 background-color: ${Theme.color.background};
  min-height: ${Theme.Container.minHeigh};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardFormRegister = styled.div`
background-color: ${Theme.color.branco};
overflow: hidden;
margin: auto;
width: ${Theme.Container.widhtRegister};
height: ${Theme.Container.heightRegister};
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
border-radius: ${Theme.fontSize.extraSmall};
text-align: center;
align-items: center;
`;

export const CardHeader = styled.header`
padding-top: 10px;
padding-bottom: 10px;
display: grid;
`;


export const TextDanger = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: ${Theme.color.vermelhoWarning};
  font-weight: bolder;
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
  top:0; right:0;
  margin-right: 5%;
  margin-top: 5%;
  background:transparent;
  outline:none;
  border:none;
`

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
  font-size: ${Theme.fontSize.small};
  font-weight: 700;
  color: ${(props) => Theme.color.branco};
  background-color: ${props => props.itemType} ;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const FlexComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const MyComponent = styled.div`
  color: ${props => props.theme.colors.main};
`;


export const GlobalInput = styled.input`
padding: 0.5em;
margin: 5px 10px 5px 20px;
background: #FFF;
border: none;
border-radius: 8px;
width: 40vh;
height: 35px;

::placeholder,
  ::-webkit-input-placeholder {
    font-family: 'Mulish', sans-serif;
    font-size: 14px;
    color: #495ac7;
  }
  
`;

/* background-image: url(${Deafult});
background-repeat: no-repeat;
background-size: 30%;
height: 30vh;
width: 30vh;
border: solid 5px; */


// declare module 'styled-components' {
//   export interface DefaultTheme{
//     borderRadius: string;

//     colors: {
//       main: any;
//       secondary: any;
//     }
//   }
// }

// const myTheme: DefaultTheme = {
//   borderRadius: '5px',

//   colors: {
//     main: 'cyan',
//     secondary: 'magenta',
//   },
// };

