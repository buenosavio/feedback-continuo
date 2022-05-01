
import styled from "styled-components";
import { Theme } from "../../theme";

export const Image = styled.img`
  border-radius: 50%;
  border: 2px solid white;
  width: ${props => props.width};
  height: ${props => props.height};
  margin-left: 20px;
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
  border-bottom: 1px solid #E5E5E5 ;
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  background-color:rgba(255, 255, 255, 1) ;
  white-space: normal;
  padding-top: 10px;
  &:hover{
    background-color: #E5E5E5;
}
`;


export const CardName = styled.h4`
  size: 10px;
  margin: 10px 0 0px 25px;
  font-size: 22px;
  color: #000000;
  font-weight: 400;
  text-align: justify;
`;

export const CardText = styled.h5`
  margin:  20px 10px 0 30px;
  max-width: 800px;
  width: 800px;
  font-size: 18px;
  white-space: normal;
  word-wrap:break-word;
  color: #000000;
  font-weight: 300;
  text-align: justify;
`;

export const CardTags = styled.div`
  text-align: left;
  max-width: 800px;
  width: 800px;
  font-size: 16px;
  color: #000000;
  font-weight: 350;
  margin: 10px 0 0 30px;
  word-wrap:break-word;
  display: flex;
  flex-wrap: wrap;

`;

export const CardData = styled.div`
  size: 10px;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  
`;

export const TextFooter = styled.small`
  margin: 10px 0px 10px 30px;
  
`;

export const Tag = styled.p`
background: ${Theme.color.primaryClear};
margin-right: 5px ;
border-radius: 20px;
padding: 5px;
color: white;
`;


export const DivCard = styled.div`
  white-space: normal;
  margin-right: 20px;
`;
