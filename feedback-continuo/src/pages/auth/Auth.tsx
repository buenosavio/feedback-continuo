import { Link, useNavigate } from 'react-router-dom';
import { LoginDTO } from '../../model/LoginDTO';
import { useFormik } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { Form, TextDanger } from '../../Global.styles';
import { useContext, useEffect,useState } from "react";
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import imgLogo from '../../images/feedbacklogo.png'

import * as Yup from 'yup';
import {
  Input,
  CardForm,
  ImgLogin,
  TitleForm, 
  CardHeader,
  TitleLogin,
  SimpleText,
  RegisterForm,  
} from './Auth.styles'

import {
  Senha,
  Container,
  ShowPassword,
  MinorButton,
  MostrarSenha,
} from '../../Global.styles'

const Auth = () => {
  const [eyeON, setEyeOn] = useState(true);

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('Obrigatório').matches(/@dbccompany.com.br/, 'Informe e-mail da DBC'),
    password: Yup.string().required('Obrigatório')
  });

  const {handleLogin, isLogged, loginOn} = useContext(AuthContext) as IAuthContext;  
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
    <Container>
      <CardForm>
        <ImgLogin src={imgLogo}/>
        <CardHeader>
          <TitleLogin>Login - Feedback</TitleLogin>
        </CardHeader>
        <Form onSubmit={formikProps.handleSubmit}>
          <TitleForm htmlFor="email">E-mail</TitleForm>
          <Input placeholder='Digite seu e-mail' id="email" name="email" type="text"
            onChange={formikProps.handleChange}
            value={formikProps.values.email.toLowerCase()}
            onBlur={formikProps.handleBlur}
          />
          {formikProps.errors.email && formikProps.touched.email 
            ? (<TextDanger marginLeft='25px'>{formikProps.errors.email}</TextDanger>) 
            : null}
          <TitleForm htmlFor="password">Password</TitleForm>
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
          <MinorButton type='submit' color={'#FFFFFF'} itemType={'#0166FE'}>Login</MinorButton>
        </Form>
        <RegisterForm>
          <SimpleText> Não tem cadastro?</SimpleText>
          <Link to='/register-user'>
            <SimpleText itemType='400'>Registre-se</SimpleText>
          </Link>
        </RegisterForm>
      </CardForm>
    </Container>
)
}

export default Auth;