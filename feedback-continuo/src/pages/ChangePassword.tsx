import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { IAuthContext, IChangePasswordDTO } from "../model/TypesDTO";
import * as Yup from 'yup'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Form, TextDanger } from "../Global.styles";
import PasswordStrengthBar from "react-password-strength-bar";

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

  const {changePassword} = useContext(AuthContext) as IAuthContext
  
  const formikProps = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: (ChangePasswordSchema),
    onSubmit: (values: IChangePasswordDTO) => {      
      changePassword()
    },
  });
  return(
    <div>
      <Link to='/'>Voltar</Link>
      <h1>Change password</h1>            
      <Form onSubmit={formikProps.handleSubmit}>
        <label htmlFor="oldPassword">Digite a senha antiga</label>
        <input id="oldPassword" name="oldPassword" type="password"
          onChange={formikProps.handleChange}
          value={formikProps.values.oldPassword}
          onBlur={formikProps.handleBlur}
        />
        {formikProps.errors.oldPassword && formikProps.touched.oldPassword 
          ? (<TextDanger>{formikProps.errors.oldPassword}</TextDanger>) 
          : null
        }
        
        <label htmlFor="newPassword">Digite a nova senha</label>
        <input id="newPassword" name="newPassword" type="password"
          onChange={formikProps.handleChange}
          value={formikProps.values.newPassword}
          onBlur={formikProps.handleBlur}
        />
        <PasswordStrengthBar password={formikProps.values.newPassword} scoreWords={['Fraca', 'Suficiente', 'Bom', 'Forte', 'Excelente']} minLength={8} shortScoreWord={['Muito curta']}/>
        {formikProps.errors.newPassword && formikProps.touched.newPassword 
          ? (<TextDanger>{formikProps.errors.newPassword}</TextDanger>) 
          : null
        }

        <label htmlFor="confirmPassword">Confirme a nova senha</label>
        <input id="confirmPassword" name="confirmPassword" type="password"
          onChange={formikProps.handleChange}
          value={formikProps.values.confirmPassword}
          onBlur={formikProps.handleBlur}
        />
        {formikProps.errors.confirmPassword && formikProps.touched.confirmPassword 
          ? (<TextDanger>{formikProps.errors.confirmPassword}</TextDanger>) 
          : null
        }

        <button type="submit">Atualizar</button>   
      </Form>
    </div>
  )
}

export default ChangePassword;