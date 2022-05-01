
import styled from "styled-components";

export const Image = styled.img`
  border-radius: 50%;
  border: 2px solid white;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const GlobalCard = styled.div`
justify-content: center;
align-items: center;
display: flex;
min-width: 120vh;
min-width: 100vh;
max-width: 1200px;
max-height: 1200px;
margin: auto;
`;

export const CardContainer = styled.div`
min-width: 100%;
max-width: 1200px;
min-height: 100%;
max-height: 1200px;
margin: auto;
background-color: rgba(255, 255, 255, 1) ;
box-shadow: 0px 20px 60px 0px rgba(241, 244, 248, 0.5);
border: 1px inset #E5E5E5 ;
&:hover{
 background-color: #E5E5E5;
}
`;

export const CardBody = styled.div`
  display: flex;
  background-color:rgba(255, 255, 255, 1) ;
  white-space: normal;
  &:hover{
 background-color: #E5E5E5;
}
`;
export const CardHeader = styled.div`
  size: 10px;
`;

export const CardName = styled.h4`
size: 10px;
margin: 10px 0 10px 20px;
font-size: 22px;
color: #000000;
font-weight: 400;
text-align: justify;
`;

export const CardText = styled.h5`
margin:  20px 10px 0 30px;
max-width: 100%;
width: 80%;
font-size: 20px;
white-space: normal;
word-wrap:break-word;
font-size: 22px;
color: #000000;
font-weight: 400;
text-align: justify;
`;

export const CardTags = styled.div`
text-align: center;
max-width: 100%;
width: 20%;
font-size: 16px;
color: #000000;
font-weight: 350;
`;

export const CardData = styled.div`
  size: 10px;
`;

export const TextFooter = styled.small`
padding-top: 10px;
  margin: 10px 0px 10px 30px;
  
`;

