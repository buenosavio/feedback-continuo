import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { CardForm, ContainerForm, Form, Input, MinorButton, TextDanger, TitleForm, TitlePrincipal } from "../../Global.styles";
import { Theme } from "../../theme";
import { FlexButton } from "./ForgetPassword.styles";
import * as Yup from "yup";
import { AxiosError } from "axios";
import handleError from "../../utils/Error";

const ForgetPassword = () => {

  const ForgetSchema = Yup.object().shape({  
    email: Yup.string()
      .email('Informe um e-mail válido')
      .required('Obrigatório')
      .matches(/@dbccompany.com.br/, 'Informe e-mail da DBC'),
  });

  const navigate = useNavigate();

  const recoverPassword = (email: string) => {
    try {
      
    } catch (error) {
      const errorData = error as AxiosError
      handleError(errorData)
    }
  }

  const formikProps = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: (ForgetSchema),
    onSubmit: (email: any) => {      
      recoverPassword(email);
    },
  });

  return(
    <>
    <ContainerForm>
      <CardForm widht={Theme.Container.widthLogin} height={'220px'}>
        <TitlePrincipal>Recuperar Senha</TitlePrincipal> 
        <Form onSubmit={formikProps.handleSubmit}>
          <TitleForm htmlFor="email">Informe seu e-mail</TitleForm>
          <Input placeholder='Digite seu e-mail' id="email" name="email" type="text" 
              onChange={formikProps.handleChange}
              value={formikProps.values.email.toLowerCase()}
              onBlur={formikProps.handleBlur}                          
            />
            {formikProps.errors.email && formikProps.touched.email
              ? (<TextDanger marginLeft='25px'>{formikProps.errors.email}</TextDanger>) 
              : null
            }
          <FlexButton>
            <MinorButton fontSize={Theme.fontSize.medium} color={'white'} backgroundColor={Theme.color.CinzaMedio} onClick={() => navigate('/login')}>Voltar</MinorButton>
            <MinorButton fontSize={Theme.fontSize.large} color={'white'} backgroundColor={Theme.color.Azulclaro} type="submit">Recuperar</MinorButton>    
          </FlexButton>
          </Form>
      </CardForm>
    </ContainerForm>

    </>
  )

}

export default ForgetPassword;