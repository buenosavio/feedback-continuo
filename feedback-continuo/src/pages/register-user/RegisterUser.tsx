import { UserDTO } from "../../model/UserDTO";
import { useFormik } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { Form, TextDanger } from "../../Global.styles";
import { useContext, useState } from "react";

import PasswordStrengthBar from 'react-password-strength-bar';
import * as Yup from 'yup';

const RegisterUser = () => {

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Obrigatório').matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/, 'Permitido apenas letras'),
    email: Yup.string().email('Informe um e-mail válido').required('Obrigatório').matches(/@dbccompany.com.br/, 'Informe e-mail da DBC'),
    password: Yup.string().required('Obrigatório').min(8, 'Mínimo 8 dígitos').max(20, 'Máximo 20 dígitos'),
    confirm_password: Yup.string().required('Obrigatório').oneOf([Yup.ref('password')], 'A senha deve ser igual').min(8, 'Mínimo 8 dígitos').max(20, 'Máximo 20 dígitos'),
  });

  const {registerUser} = useContext(AuthContext) as IAuthContext  
  const [baseImage, setBaseImage] = useState<any>();

  const uploadImage = async (event: any) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    formikProps.setFieldValue("profileImage", base64)
    console.log(typeof base64)    
  };

  const convertBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file); 

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const formikProps = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      profileImage: ''
    },
    validationSchema: (SignupSchema),
    onSubmit: (values: UserDTO) => {      
      registerUser(values)
    },
  });

  return(
    <>
      <h1>Inserir usuário</h1>
      <Form onSubmit={formikProps.handleSubmit}>
       <label htmlFor="profileImage">Insira sua foto</label>
        <input type="file" id="profileImage" name="profileImage"
          onChange={(event) => {uploadImage(event)}}
        />
        <br></br>
        <img src={baseImage} height="200px" />

        <label htmlFor="name">Nome Completo</label>
        <input id="name" name="name" type="text"
          onChange={formikProps.handleChange}
          value={formikProps.values.name}
          onBlur={formikProps.handleBlur}
        />       
        {formikProps.errors.name && formikProps.touched.name 
          ? (<TextDanger>{formikProps.errors.name}</TextDanger>) 
          : null
        }       

        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="text"
          onChange={formikProps.handleChange}
          value={formikProps.values.email}
          onBlur={formikProps.handleBlur}                          
        />
        {formikProps.errors.email && formikProps.touched.email
          ? (<TextDanger>{formikProps.errors.email}</TextDanger>) 
          : null
        }

        <label htmlFor="password">Senha</label>
        <input id="password" name="password" type="password"
          onChange={formikProps.handleChange}
          value={formikProps.values.password}
          onBlur={formikProps.handleBlur}
        />
        <PasswordStrengthBar password={formikProps.values.password} scoreWords={['Fraca', 'Suficiente', 'Bom', 'Forte', 'Excelente']} minLength={8} shortScoreWord={['Muito curta']}/>
        {formikProps.errors.password && formikProps.touched.password 
          ? (<TextDanger>{formikProps.errors.password}</TextDanger>) 
          : null
        }

        <label htmlFor="confirm_password">Repita sua senha</label>
        <input id="confirm_password" name="confirm_password" type="password"
          onChange={formikProps.handleChange}
          value={formikProps.values.confirm_password}
          onBlur={formikProps.handleBlur}
        />
        {formikProps.errors.confirm_password && formikProps.touched.confirm_password 
          ? (<TextDanger>{formikProps.errors.confirm_password}</TextDanger>) 
          : null
        }   

      <button type="submit">Cadastrar</button>    
    </Form>
  </>
  )
}

export default RegisterUser;