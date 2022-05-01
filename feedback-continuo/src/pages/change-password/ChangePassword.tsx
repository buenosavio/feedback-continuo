import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { IAuthContext, IChangePasswordDTO } from "../../model/TypesDTO";
import * as Yup from 'yup'
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CardForm, Container, Form, Input, MinorButton, TextDanger, TitleForm, TitlePrincipal,Senha,MostrarSenha,ShowPassword } from "../../Global.styles";
import PasswordStrengthBar from "react-password-strength-bar";
import { Theme } from "../../theme";
import { FlexButton } from "./ChangePassword.styles";
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";

const ChangePassword = () => {

  const ChangePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Obrigatório'),
    newPassword: Yup.string().required('Obrigatório')
      .min(8, 'Mínimo 8 dígitos')
      .max(20, 'Máximo 20 dígitos')
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
    <Container minHeight={"100vh"}>
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
            ? (<TextDanger>{formikProps.errors.oldPassword}</TextDanger>) 
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
          <PasswordStrengthBar style={{ marginLeft: 25, width: 350 }} password={formikProps.values.newPassword} scoreWords={['Fraca', 'Suficiente', 'Bom', 'Forte', 'Excelente']} minLength={8} shortScoreWord={['Muito curta']}/>
          {formikProps.errors.newPassword && formikProps.touched.newPassword 
            ? (<TextDanger>{formikProps.errors.newPassword}</TextDanger>) 
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
            ? (<TextDanger>{formikProps.errors.confirmPassword}</TextDanger>) 
            : null
          }
          </Senha>
          <FlexButton>
            <MinorButton onClick={() => navigate('/')} marginLeft={'40px'} type="button" backgroundColor={Theme.color.CinzaMedio}>Voltar</MinorButton>
            <MinorButton marginLeft={'-20px'} type="submit" backgroundColor={Theme.color.Azulclaro}>Atualizar</MinorButton>   
          </FlexButton>
        </Form>
      </CardForm>
    </Container>
  )
}

export default ChangePassword;