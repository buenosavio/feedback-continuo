import { Link, useNavigate } from 'react-router-dom';
import { LoginDTO } from '../../model/LoginDTO';
import { useFormik } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { Form, TextDanger } from '../../Global.styles';
import { useContext, useEffect } from "react";

import * as Yup from 'yup';

const Auth = () => {

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
    <>
      <h1>Fazer Login</h1>
      <Form onSubmit={formikProps.handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="text"
          onChange={formikProps.handleChange}
          value={formikProps.values.email}
          onBlur={formikProps.handleBlur}
        />
        {formikProps.errors.email && formikProps.touched.email 
          ? (<TextDanger>{formikProps.errors.email}</TextDanger>) 
          : null}

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password"
          onChange={formikProps.handleChange}
          value={formikProps.values.password}
          onBlur={formikProps.handleBlur}
        />
        {formikProps.errors.password && formikProps.touched.password 
          ? (<TextDanger>{formikProps.errors.password}</TextDanger>)
          : null}

        <button type="submit">Login</button>
      </Form>
      <Link to='/register-user'>Registre-se</Link>
    </>
)
}

export default Auth;