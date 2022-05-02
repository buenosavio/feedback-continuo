import { FormikProps } from "formik";

export interface IPropsDTO {
  checked?: boolean;
  width?: string;
  marginLeft?: string;  
  content?: string;
  backgroundColor?: string;
  widht?:string;
  height?: string;
  fontSize?:string;
  minHeight?:string;
  setSelectedTab?:string
  active?: boolean;  
  top?: string;
}

export type IPropss = {
  error?: string | string[];
  formikProps: FormikProps<any>; 
};