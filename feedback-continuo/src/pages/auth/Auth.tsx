import { Link, useNavigate } from 'react-router-dom';
import { LoginDTO } from '../../model/LoginDTO';
import { useFormik } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { Form, TextDanger } from '../../Global.styles';
import { useContext, useEffect,useState } from "react";
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";

import * as Yup from 'yup';
import {
  ContainerLogin,
  CardForm,
  CardHeader,
  TitleLogin,
  Input,
  TitleForm,
  LinkForm,
} from './Auth.styles'

import {
  ShowPassword,
  MinorButton,
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
    <ContainerLogin>
      <>
      <CardForm>
      <CardHeader>
      <TitleLogin>Fazer Login</TitleLogin>
      </CardHeader>
      <Form onSubmit={formikProps.handleSubmit}>
        <TitleForm htmlFor="email">E-mail</TitleForm>
        <Input placeholder='Digite seu E-mail' id="email" name="email" type="text"
          onChange={formikProps.handleChange}
          value={formikProps.values.email}
          onBlur={formikProps.handleBlur}
        />
        {formikProps.errors.email && formikProps.touched.email 
          ? (<TextDanger>{formikProps.errors.email}</TextDanger>) 
          : null}

        <TitleForm htmlFor="password">Password</TitleForm>
        <Input placeholder='Digite sua Senha' id="password" name="password" type ={eyeON? "password" : "text"}
          onChange={formikProps.handleChange}
          value={formikProps.values.password}
          onBlur={formikProps.handleBlur}
        />
        <ShowPassword onClick={() => setEyeOn(!eyeON)}>{eyeON ? < AiOutlineEye/> : < AiOutlineEyeInvisible/>}</ShowPassword>
        {formikProps.errors.password && formikProps.touched.password 
          ? (<TextDanger>{formikProps.errors.password}</TextDanger>)
          : null}

        <MinorButton type='submit' color={'white'} itemType={'blue'}  >Login</MinorButton>
      </Form>
      <Link
       to='/register-user'>
         Registre-se
       </Link>
      </CardForm>
      </>
    </ContainerLogin>
)
}

export default Auth;