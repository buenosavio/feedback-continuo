import styled from "styled-components";

import Deafult from '../../images/feedbacklogo.png'



export const RegisterInput = styled.input`
background-image: url(${Deafult});
background-repeat: no-repeat;
background-size: 30%;
height: 30vh;
width: 30vh;
border: solid 5px;
color: ${props => props.theme.main}
`;

const theme = {
  main: "aqua"
}