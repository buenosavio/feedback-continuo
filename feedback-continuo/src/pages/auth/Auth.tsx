import { Theme } from '../../theme';
import { LoginDTO } from '../../model/LoginDTO';
import { useFormik } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import imgLogo from '../../images/feedbacklogo.png'

import * as Yup from 'yup';



import {  
  ImgLogin,    
  SimpleText,
  RegisterForm,  
  TitleLogin,
} from './Auth.styles'
import {
  Input,
  Senha,
  Form,
  TitleForm,
  TitlePrincipal,
  ShowPassword,
  CardForm,
  MinorButton,
  CardHeader,
  TextDanger,
  MostrarSenha,
  Container,
  ContainerForm
} from '../../Global.styles'

const Auth = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('Obrigatório').matches(/@dbccompany.com.br/, 'Informe e-mail da DBC'),
    password: Yup.string().required('Obrigatório')
  });

  const {handleLogin, isLogged, loginOn} = useContext(AuthContext) as IAuthContext;  
  const [eyeON, setEyeOn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    isLogged()
    if (loginOn) {
      navigate('/')
    }    
  },[loginOn])

  const formikProps = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values: LoginDTO) => {      
      handleLogin(values);
    },
    validationSchema: (SignupSchema)
  });
  return (
    <ContainerForm>
      <CardForm widht={Theme.Container.widthLogin}
      height={Theme.Container.heightLogin}>
        <ImgLogin src={imgLogo}/>
          <TitlePrincipal>Login - Feedback</TitlePrincipal>      
        <Form onSubmit={formikProps.handleSubmit} marginLeft={'50px'}>
          <TitleForm htmlFor="email">E-mail</TitleForm>
          <Input placeholder='Digite seu e-mail' id="email" name="email" type="text"
            onChange={formikProps.handleChange}
            value={formikProps.values.email.toLowerCase()}
            onBlur={formikProps.handleBlur}
          />
          {formikProps.errors.email && formikProps.touched.email 
            ? (<TextDanger marginLeft='25px'>{formikProps.errors.email}</TextDanger>) 
            : null}
          <TitleForm htmlFor="password">Senha</TitleForm>
          <Senha>
            <Input placeholder='Digite sua senha' id="password" name="password" type ={eyeON? "password" : "text"}
              onChange={formikProps.handleChange}
              value={formikProps.values.password}
              onBlur={formikProps.handleBlur}
            />
            <MostrarSenha>
              <ShowPassword onClick={() => setEyeOn(!eyeON)}>{eyeON ? < AiOutlineEye size={25}/> : < AiOutlineEyeInvisible size={25}/>}</ShowPassword>
            </MostrarSenha>
            {formikProps.errors.password && formikProps.touched.password 
              ? (<TextDanger marginLeft='25px'>{formikProps.errors.password}</TextDanger>)
              : null}
          </Senha>      
          <RegisterForm>
            <MinorButton type='submit' backgroundColor={Theme.color.Azulclaro} marginLeft={'115px'}>Login</MinorButton>
          </RegisterForm>    
        </Form>
        <RegisterForm>
          <SimpleText> Não tem cadastro?</SimpleText>
          <Link to='/register-user'>
            <SimpleText itemType='400'>Registre-se</SimpleText>
          </Link>
        </RegisterForm>
      </CardForm>
    </ContainerForm>
)
}

export default Auth;