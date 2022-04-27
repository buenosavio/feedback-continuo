import styled from 'styled-components/macro'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

export const TextDanger = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: red;
  font-weight: bolder;
`

export const Image = styled.img`
  border-radius: 50%;
  border: 2px solid blue;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const ShowPassword = styled.a`
position: absolute;
margin-left: 300px;
margin-top: 160px;
font-size: 25px;
  cursor: pointer;
`;


export const MinorButton = styled.button`
/* input.attrs(props => ({
  type: 'button',  
})) */
  display: block;
  width: 90%;
  padding: 10px 0;
  margin: 20px 0 10px 100px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.color};
  background-color: ${props => props.itemType} ;
  /* background-color: rgba(55, 81, 255, 1); */
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }

`;

