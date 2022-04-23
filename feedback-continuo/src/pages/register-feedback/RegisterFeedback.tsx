import { api } from "../../api";
import { Link } from "react-router-dom";
import { Notify } from "notiflix";
import { useFormik } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { FeedbackDTO } from "../../model/FeedbackDTO";
import { IAuthContext } from "../../model/TypesDTO";
import { Form, TextDanger } from "../../Global.styles";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import onChangeHandler from "../../utils/AutoComplete";
import Autocomplete from "react-autocomplete";


const RegisterFeedback = () => {

  const {isLogged} = useContext(AuthContext) as IAuthContext
  const [users, setUsers] = useState({});

  useEffect(() => {
    isLogged()
    getUsers()
  },[])

  const saveFeedback = async (values: FeedbackDTO) => {
    try {
      await axios.post('http://localhost:3000/feedbacks', values)
    } catch (error) {
      console.log(error)
    }
  }

  const getUsers = async () => {
    try {
      const {data} = await api.get('/user/list-all-users');
      setUsers(data)      
    } catch (error) {
      Notify.failure('Erro ao fazer req. Tente novamente!');
    }
  }

  const formikProps = useFormik({
    initialValues: {
      id: '',
      titulo: '',
      conteudo: '',
      anonimo: '',
      tags: '',
      usuario: ''
    },
    //validationSchema: (SignupSchema),
    onSubmit: (values: FeedbackDTO) => {      
      saveFeedback(values)
    },
  });
  let value;

  console.log(users)

  return (
    <>
    <Link to='/'>Voltar</Link>
    <h1>Register Feedback</h1>
    <Form onSubmit={formikProps.handleSubmit}>

        <label htmlFor="titulo">Título</label>
        <input id="titulo" name="titulo" type="text"
          onChange={formikProps.handleChange}
          value={formikProps.values.titulo}
          onBlur={formikProps.handleBlur}
        />   

        <label htmlFor="conteudo">Feedback</label>
        <input id="conteudo" name="conteudo" type="text"
          onChange={formikProps.handleChange}
          value={formikProps.values.conteudo}
          onBlur={formikProps.handleBlur}
        />   

        <label htmlFor="anonimo">Anônimo</label>
        <input id="anonimo" name="anonimo" type="checkbox"
          onChange={formikProps.handleChange}
          value={formikProps.values.anonimo}
          onBlur={formikProps.handleBlur}
        />

        <label htmlFor="tags">Tags</label>
        <input id="tags" name="tags" type="text"
          onChange={formikProps.handleChange}
          value={formikProps.values.tags}
          onBlur={formikProps.handleBlur}
        />

        <label htmlFor="usuario">Usuário</label>
        <input id="usuario" name="usuario" type="search"
          onChange={() => onChangeHandler(formikProps.values.usuario, users)}
          value={formikProps.values.usuario}
          onBlur={formikProps.handleBlur}
        />          
      <button type="submit">Registrar</button>    
    </Form>
    </>
  )
}

export default RegisterFeedback;