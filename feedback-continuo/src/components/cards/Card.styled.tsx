import styled from "styled-components";

export const CardContainer = styled.div`
width: 100vh;
height: 5vh;
display: flex;
margin: 100px 10px 10px 10px;
`;


export const CardImage = styled.img`
 border-radius: 50%;
  border: 2px solid blue;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const CardName = styled.h4`
  size: 10px;
`;

export const CardText = styled.h5`
size: 10px;
`;

export const CardTags = styled.div`
align-items: flex-end;
`;

export const CardData = styled.footer`
  size: 10px;
`;