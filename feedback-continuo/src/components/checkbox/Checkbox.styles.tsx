import styled from "styled-components";
import {IPropsDTO} from "../../model/IPropsDTO"

export const TagList = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-gap: 20px 25px;
  width: 570px;    
  justify-content: center;
`;

export const CheckboxContainer = styled.div<IPropsDTO>`  
  width: 100px;
  height: 35px;
  padding-left: 5px;
  border-radius: 5px;   
  background-color: ${props => (props.checked) ? 'rgba(66, 123, 209, 1)' : 'rgba(233, 240, 248, 0.5)'};  
  box-shadow: 0px 0px 10px 0px rgba(66,123,209,0.30);  
  display: flex;
  align-items: center;  
`;
export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

`;
export const Text = styled.label<IPropsDTO>`
  color: ${props => props.checked ? '#FFF' : '#555'} ;   

`;
export const StyledCheckbox = styled.label`
  display: none;   
`;
