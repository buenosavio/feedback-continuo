import styled from "styled-components";
import { Theme } from "../../theme";

export const Image = styled.img`
  border-radius: 50%;
  border: 2px solid white;
  width: ${props => props.width};
  height: ${props => props.height};
  margin-left: 20px;
`;

export const CardBody = styled.div`
  display: flex;
  border-bottom: 1px solid #E5E5E5 ;
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
  display: flex;
  align-items: center;
`;

export const CardText = styled.h5`
  margin:  20px 30px 0 30px;
  min-width: 800px;
  font-size: 18px;
  white-space: normal;
  word-wrap:break-word;
  color: #000000;
  font-weight: 300;
  text-align: justify;
`;

export const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  font-size: 14px;
  font-weight: 350;
  margin: 10px 0 0 30px;
`;

export const TextDate = styled.span`
  font-size: 11px;
  margin-left: 10px;  
`;

export const Tag = styled.p`
  background: ${Theme.color.primaryClear};
  margin-right: 5px ;
  border-radius: 20px;
  padding: 5px;
  color: white;
`;

export const MiddleCard = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
`;
