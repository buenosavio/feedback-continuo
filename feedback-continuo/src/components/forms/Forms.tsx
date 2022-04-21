import { LoginDTO } from '../../model/LoginDTO';
import { useFormik } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import * as Yup from 'yup';

function Forms() {

//   const {handleLogin} = useContext<any>(AuthContext);

//   // const SignupSchema : any = Yup.object().shape({
//   //   user: Yup.string()
//   //   .user ('E-mail inválido')
//   //   .required ('Campo Obrigatório'),
//   //   password: Yup.string()
//   //   .password ('Usuário Inválido')
//   //   .required ('Campo Obrigatório')
//   // });

//   const formikProps = useFormik({
//     initialValues: {
//       user: '',
//       password: '',
//     },
//     onSubmit: (values: LoginDTO) => {      
//       handleLogin(values);
//     },
//     // validationSchema: SignupSchema
//   });
//   return (
//     <form onSubmit={formikProps.handleSubmit}>
//     <label htmlFor="user">Login</label>
//     <input
//       id="user"
//       name="user"
//       type="text"
//       onChange={formikProps.handleChange}
//       value={formikProps.values.user}
//     />
//      {formikProps.errors.user && formikProps.touched.user ? (
//                 <div>{formikProps.errors.user}</div>
//                 ) : null}
//     <label htmlFor="password">Password</label>
//     <input
//       id="password"
//       name="password"
//       type="text"
//       onChange={formikProps.handleChange}
//       value={formikProps.values.password}
//     />
//     {formikProps.errors.password && formikProps.touched.password ? (
//                 <div>{formikProps.errors.password}</div>
//                 ) : null}
//     <button type="submit">Submit</button>
//   </form>
// )
}


export default Forms