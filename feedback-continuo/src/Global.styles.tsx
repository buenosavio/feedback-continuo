import styled from 'styled-components'

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