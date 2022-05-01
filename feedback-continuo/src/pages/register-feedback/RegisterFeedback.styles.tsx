import styled from "styled-components";
import { Theme } from "../../theme";
import Select from 'react-select'


export const FlexComponent = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 20px 0;
  width: 550px;  
`;

export const FlexButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 570px;  
`

export const Input = styled.input`
  width: 20px;
  height: 20px;  
`;

export const TextArea = styled.textarea`
  width: 524px;  
  height: 150px;
  border-radius: 5px;
  font-size: 14px;
  background: ${Theme.color.branco};
  outline: none;
  resize: none;
  margin: 0 20px 20px 20px;
  border: 1px solid #d1d1d1;
  &:focus {
    border: 1px solid ${Theme.color.Azulclaro};
  } 
`;

export const Selectstyled = styled(Select)`
  text-transform: capitalize;
  text-align: start;
  width: 530px;  
  height: 40px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 0 20px 10px 20px;
  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    border: 1px solid ${Theme.color.Azulclaro};   
  }
`;

export const CardForm = styled.div`
  background-color: rgba(255, 255, 255, 1);
  height: 100%;
  width: 570px;  
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  text-align: center;
  align-items: center;
  margin: 20px auto;
`;