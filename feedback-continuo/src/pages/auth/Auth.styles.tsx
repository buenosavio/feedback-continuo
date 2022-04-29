import styled from "styled-components";

export const CardForm = styled.div`
  background-color: rgba(255, 255, 255, 1);
  overflow: hidden;
  margin: auto;
  width: 380px;
  height: 600px;
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
  margin: 10px 0 5px 20px;
`;

export const LinkForm = styled.a`
  margin: auto;

`;

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

export const SimpleText = styled.p`
  display: inline;
  font-size: 15px;  
  margin: 0px 3px;  
  font-weight: ${props => props.itemType || 300} ;
`