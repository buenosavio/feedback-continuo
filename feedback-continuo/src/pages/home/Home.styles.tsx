import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menualign = styled.div`
display: grid;
background-color: rgba(255, 255, 255, 1); ;
margin: 20px 0px 20px 0px; 
border-radius: 20px;
min-width: 100vh;
min-height:50vh;
`;

export const Pagination = styled.button`
border: none;
outline-style: none;
size: 50px;
justify-content: space-between;
margin-left: 30%;
background: none;
`;

export const PaginationDiv = styled.div`
justify-content: space-between;
`;

export const LinkFeedback = styled(Link)`
text-decoration: none;
text-align: center;
align-items: center;
font-size: 20px;
color: #000000;
font-weight: 400;
border: 2px solid #78b454;
&:hover{
  background-color: #E5E5E5;
}
`