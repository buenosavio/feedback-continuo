import { TextDanger } from "../../Global.styles";
import { FormikProps } from "formik";

type IProps = {
  error?: string | string[];
  formikProps: FormikProps<any>;
};

const ValidationError = ({formikProps, error }: IProps) => {
  if (formikProps.errors && formikProps.touched) {
    return (
      <TextDanger>{error}</TextDanger>
    ) 
  } else {
    return null
  }; 
}

export default ValidationError;