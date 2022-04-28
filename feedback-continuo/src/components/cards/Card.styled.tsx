import styled from "styled-components";

export const GlobalCard = styled.div`
justify-content: center;
align-items: center;
display: flex;
min-width: 100vh;
`;

export const CardContainer = styled.div`
width: 90%;
min-height: 3%;
margin: 50px 10px 10px 10px;
background-color: aqua;
;
border-radius: 20px;
box-shadow: 0px 20px 60px 0px rgba(241, 244, 248, 0.5);

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