import { TextDanger } from "../../Global.styles";

const ValidationError = ({formikProps, error }: any) => {
  if (formikProps.errors && formikProps.touched) {
    return (
      <TextDanger>{error}</TextDanger>
    ) 
  } else {
    return null
  }; 
}

export default ValidationError;