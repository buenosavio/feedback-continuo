import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../model/TypesDTO";
import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { Form, TextDanger } from "../../Global.styles";
import { FeedbackDTO } from "../../model/FeedbackDTO";
import axios from "axios";

const RegisterFeedback = () => {

  const {isLogged} = useContext(AuthContext) as IAuthContext

  useEffect(() => {
    isLogged()
  },[])

  const saveFeedback = async (values: FeedbackDTO) => {
    try {
      const {data} = await axios.post('http://localhost:3000/feedbacks', values)
    } catch (error) {
      console.log(error)
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


  return (
    <>
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
          onChange={formikProps.handleChange}
          value={formikProps.values.usuario}
          onBlur={formikProps.handleBlur}
        />
          
      <button type="submit">Registrar</button>    
    </Form>
    </>
  )
}

export default RegisterFeedback;