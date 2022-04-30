
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
min-width: 100vh;
`;

export const CardContainer = styled.div`
min-width: 180vh;
min-height: 3%;
margin: 0px 0px 2px 0px;
background-color: rgba(255, 255, 255, 1);
box-shadow: 0px 20px 60px 0px rgba(241, 244, 248, 0.5);
border: 1px inset #E5E5E5 ;
&:hover{
  background-color: #E5E5E5;
}

`;

export const CardBody = styled.body`
  display: flex;
`;
export const CardHeader = styled.header`
  size: 10px;
`;

export const CardName = styled.h4`
  size: 10px;
  margin: 10px 0 10px 20px;
`;

export const CardText = styled.h5`
margin:  20px 0 0 30px;
width: 80%;
font-size: 20px;
`;

export const CardTags = styled.aside`
 text-align: center;
 width: 20%;
`;

export const CardData = styled.footer`
  size: 10px;
`;

export const TextFooter = styled.small`
padding-top: 10px;
  margin: 10px 0px 10px 30px;
`;

