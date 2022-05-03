import { Theme } from "../../theme";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { IAuthContext } from "../../model/AuthDTO";
import { IChangePasswordDTO } from "../../model/ChangePasswordDTO";
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import { CardForm, Container, Form, Input, MinorButton, TextDanger, TitleForm, TitlePrincipal,Senha,MostrarSenha,ShowPassword, FlexButton } from "../../Global.styles";

import * as Yup from 'yup'
import PasswordStrengthBar from "react-password-strength-bar";

const ChangePassword = () => {

  const ChangePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Obrigatório'),
    newPassword: Yup.string().required('Obrigatório')
      .min(6, 'Mínimo 6 dígitos')
      .max(40, 'Máximo 40 dígitos')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Senha deve conter um número, uma letra maiúscula, uma letra minúscula e um caractere especial"),
    confirmPassword: Yup.string().required('Obrigatório')
      .oneOf([Yup.ref('newPassword')], 'A senha deve ser igual') ,
  });

  const [eyeON, setEyeOn] = useState(true);
  const [eyeONN, setEyeOnn] = useState(true);
  const [eyesON, setEyesOn] = useState(true);
  const {changePassword} = useContext(AuthContext) as IAuthContext  
  const navigate = useNavigate()

  const formikProps = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: (ChangePasswordSchema),
    onSubmit: (values: IChangePasswordDTO) => {      
      changePassword(values)
    },
  });
  return(
    <Container>
      <CardForm widht={'400px'} height={'450px'}>      
        <TitlePrincipal>Alterar Senha</TitlePrincipal>            
        <Form onSubmit={formikProps.handleSubmit}>          
          <TitleForm htmlFor="oldPassword">Digite a senha antiga</TitleForm>
          <Senha>
            <Input id="oldPassword" name="oldPassword" type ={eyeON? "password" : "text"}
              onChange={formikProps.handleChange}
              value={formikProps.values.oldPassword}
              onBlur={formikProps.handleBlur}
            />   
            <MostrarSenha>
              <ShowPassword onClick={() => setEyeOn(!eyeON)}>{eyeON ? < AiOutlineEye size={25}/> : < AiOutlineEyeInvisible size={25}/>}</ShowPassword>
            </MostrarSenha>                       
            {formikProps.errors.oldPassword && formikProps.touched.oldPassword 
              ? (<TextDanger marginLeft='25px'>{formikProps.errors.oldPassword}</TextDanger>) 
              : null
            }             
          </Senha>
          <TitleForm htmlFor="newPassword">Digite a nova senha</TitleForm>
          <Senha>
            <Input id="newPassword" name="newPassword" type ={eyeONN? "password" : "text"}
              onChange={formikProps.handleChange}
              value={formikProps.values.newPassword}
              onBlur={formikProps.handleBlur}
            />       
            <MostrarSenha>
              <ShowPassword onClick={() => setEyeOnn(!eyeONN)}>{eyeONN ? < AiOutlineEye size={25}/> : < AiOutlineEyeInvisible size={25}/>}</ShowPassword>
            </MostrarSenha>     
            <PasswordStrengthBar style={{ marginLeft: 25, width: 350 }} password={formikProps.values.newPassword} scoreWords={['Fraca', 'Suficiente', 'Bom', 'Forte', 'Excelente']} minLength={6} shortScoreWord={['Muito curta']}/>
            {formikProps.errors.newPassword && formikProps.touched.newPassword 
              ? (<TextDanger marginLeft='25px'>{formikProps.errors.newPassword}</TextDanger>) 
              : null
            }    
          </Senha>
          <TitleForm htmlFor="confirmPassword">Confirme a nova senha</TitleForm>
          <Senha>
            <Input id="confirmPassword" name="confirmPassword" type ={eyesON? "password" : "text"}
              onChange={formikProps.handleChange}
              value={formikProps.values.confirmPassword}
              onBlur={formikProps.handleBlur}
            />
            <MostrarSenha>
              <ShowPassword onClick={() => setEyesOn(!eyesON)}>{eyesON ? < AiOutlineEye size={25}/> : < AiOutlineEyeInvisible size={25}/>}</ShowPassword>
            </MostrarSenha> 
            {formikProps.errors.confirmPassword && formikProps.touched.confirmPassword 
            ? (<TextDanger marginLeft='25px'>{formikProps.errors.confirmPassword}</TextDanger>) 
            : null
            }             
          </Senha>          
          <FlexButton widht="400px" top="89%">
            <MinorButton onClick={() => navigate('/')} marginLeft={'40px'} type="button" backgroundColor={Theme.color.GreyDark}>Voltar</MinorButton>
            <MinorButton marginLeft={'-20px'} type="submit" backgroundColor={Theme.color.BlueClear}>Atualizar</MinorButton>   
          </FlexButton>
        </Form>
      </CardForm>
    </Container>
  )
}

export default ChangePassword;