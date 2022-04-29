import styled from "styled-components";

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
padding-top: 10px;
padding-bottom: 10px;
display: grid;
`;

export const TitleLogin = styled.h1`
font-size: 25px;
color: rgba(164, 166, 179, 1);
font-weight: bold;
text-align: center;
align-items: center;
`;

export const Input = styled.input`
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
    color: rgba(164, 166, 179, 1);
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

export const RegisterForm = styled.p`
text-align: center;
`;

export const ImgLogin = styled.img`
  width: 120px;
  border-radius: 50%;
  text-align: center;
`;