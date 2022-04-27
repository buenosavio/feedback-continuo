import styled from "styled-components";


export const ContainerLogin = styled.div`
background-color:rgba(54, 55, 64, 1);
height: 100vh;
`;

export const CardForm = styled.div`
background-color: rgba(255, 255, 255, 1);
overflow: hidden;
margin: auto;
width: 380px;
height: 582px;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
border-radius: 8px;
text-align: center;
align-items: center;
`;

export const CardHeader = styled.header`
padding-top: 32px;
padding-bottom: 32px;
display: grid;
`;

export const TitleLogin = styled.h1`
font-size: 19px;
color: rgba(164, 166, 179, 1);
font-weight: bold;
text-align: center;
align-items: center;
`;

export const Input = styled.input`
padding: 0.5em;
margin: 0.5em;
background: rgba(164, 166, 179, 1);
border: none;
border-radius: 3px;
width: 316px;
height: 42px;
::placeholder,
  ::-webkit-input-placeholder {
    color: blue;
  }
  :-ms-input-placeholder {
     color: blue;
  }
`;

export const TitleForm = styled.label`
font-size: 15px;
color: rgba(164, 166, 179, 1);
font-weight: bold;
text-align: left;
margin: 10px 0 5px 20px;
`;

export const LinkForm = styled.a`
  margin: auto;

`;