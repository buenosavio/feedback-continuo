import { TextDanger } from "../../Global.styles";
import { IPropss} from "../../model/IPropsDTO"


const ValidationError = ({formikProps, error }: IPropss) => {
  if (formikProps.errors && formikProps.touched) {
    return (
      <TextDanger>{error}</TextDanger>
    ) 
  } else {
    return null
  }; 
}

export default ValidationError;
