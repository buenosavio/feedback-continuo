import styled from "styled-components";

export const CardContainer = styled.div`
width: 100vh;
height: 5vh;
`;


export const CardImg = styled.div<{background: string}>`
  background-image: url(${({ background }) => background});
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