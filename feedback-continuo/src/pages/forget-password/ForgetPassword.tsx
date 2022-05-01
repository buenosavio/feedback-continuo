import { api } from "../../api";
import { Theme } from "../../theme";
import { Report } from "notiflix";
import { useFormik } from "formik";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { CardForm, ContainerForm, Form, Input, MinorButton, TextDanger, TitleForm, TitlePrincipal, FlexButton } from "../../Global.styles";

import * as Yup from "yup";
import handleError from "../../utils/Error";

const ForgetPassword = () => {

  const ForgetSchema = Yup.object().shape({  
    email: Yup.string()
      .email('Informe um e-mail válido')
      .required('Obrigatório')
      .matches(/@dbccompany.com.br/, 'Informe e-mail da DBC'),
  });

  const navigate = useNavigate();

  const recoverPassword = async (email: string) => {
    try {
      await api.post(`/auth/forgot-password/${formikProps.values.email}`,email)
      Report.success(
      'Recuperação de senha',
      'Se endereço existente, em breve você receberá um e-mail com a nova senha!',
      'OK',
      {
        backOverlayColor: 'rgba(0,0,0,0.5)',
        success: {
          svgColor: '#32c682',            
          buttonBackground: Theme.color.Azulclaro,                      
        },            
      }
      );
      formikProps.resetForm()
      navigate('/login')
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

          <FlexButton widht="380px" marginLeft="4%" top="80%">
            <MinorButton marginLeft="5px" color={'white'} backgroundColor={Theme.color.CinzaMedio} onClick={() => navigate('/login')}>Voltar</MinorButton>
            <MinorButton color={'white'} backgroundColor={Theme.color.Azulclaro} type="submit">Recuperar</MinorButton>    
          </FlexButton>
          </Form>
      </CardForm>
    </ContainerForm>
  )

}

export default ForgetPassword;