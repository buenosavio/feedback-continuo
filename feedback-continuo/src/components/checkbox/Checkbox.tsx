import { useState } from "react";
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Text } from "./Checkbox.styles";

const Checkbox = ({children, ...props}: any) =>{


  const [checked, setChecked] = useState(false);
   
   const  handleCheckboxChange = () => {
      setChecked(!checked);
      props.listTags(children);
   }

  return (
    <CheckboxContainer
      checked={checked}
      onClick={handleCheckboxChange}>
        <HiddenCheckbox 
          onChange={handleCheckboxChange}
          checked={checked}   
        />
        <StyledCheckbox/>
        <Text checked={checked}> #{children} </Text>
    </CheckboxContainer>
  )
}

export default Checkbox;