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
  border: 2px solid white;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const ShowPassword = styled.a`
text-align: center;
position: absolute;
margin: 15px 0 0 120px;
cursor: pointer;
`;

export const MostrarSenha = styled.div`
  position: absolute;
  top:0; right:0;
  margin-right: 5%;
  margin-top: 5%;
  background:transparent;
  outline:none;
  border:none;
`

export const Senha = styled.div`
  position: relative;
  text-align: center;
`


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

export const FlexComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

