import styled from 'styled-components/macro'

interface IProps {
  marginLeft?: string;  
}

export const Container = styled.div`
background: linear-gradient(to bottom right, #295ba7, #78b454);
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

export const TextDanger = styled.p<IProps>`  
  margin: 0;
  margin-left: ${props => props.marginLeft || 0};	
  padding: 0;
  font-size: 14px;
  color: #e73532;
  font-weight: bolder;
  width: 100%;
  text-align: start;
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
  top: -8%; right:-15%;
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
  display: block;
  width: 90%;
  padding: 10px 0;
  margin: 20px 0 10px 100px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.color};
  background-color: ${props => props.itemType} ;  
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -1px);
  }

`;

export const FlexComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

