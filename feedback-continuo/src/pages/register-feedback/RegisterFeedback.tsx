import { api } from "../../api";
import { Link } from "react-router-dom";
import { Notify } from "notiflix";
import { useFormik } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { FeedbackDTO } from "../../model/FeedbackDTO";
import { IAuthContext } from "../../model/TypesDTO";
import { Form, TextDanger } from "../../Global.styles";
import { useContext, useEffect, useState } from "react";
import * as Yup from 'yup'

//A FAZER:
//componentizar select e options.
// permitir selecionar mais de uma tag.
// tipar as coisas

const RegisterFeedback = () => {

  const RegisterFeedbackSchema = Yup.object().shape({
    userId: Yup.string().required('Obrigatório'),
    message: Yup.string().required('Obrigatório'),
    tags: Yup.string().required('Obrigatório')
  });

  const {isLogged} = useContext(AuthContext) as IAuthContext
  const [users, setUsers] = useState<any>();
  const [tags, setTags] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    isLogged()
    getUsers()    
  },[])

  const saveFeedback = async (values: FeedbackDTO) => {
    try {
      await api.post(`/feedback?feedbackUserId=${values.userId}&isAnonymous=${values.isAnonymous}&message=${values.message}&tags=${values.tags}`)
      Notify.success("Feedback enviado com sucesso!")
    } catch (error) {
      Notify.failure("Erro ao enviar feedback!")
    }
  }

  const getUsers = async () => {
    let users: any = [];
    try {
      const {data} = await api.get('/user/list-all-users');
      data.map((user:any) => {
        users.push({name: user.name, id: user.userId})  
      })
      setUsers(users)        
      getTags() 
    } catch (error) {
      Notify.failure('Erro na requisição de pessoas. Tente novamente!');
    }
  }

  const getTags = async () => {
    let tags: any = [];
    try {
      const {data} = await api.get('/tag');
      data.map((tag:any) => {
        tags.push({name: tag.name, id: tag.tagId})  
      })
      setTags(tags)  
      setLoading(false)
    } catch (error) {
      Notify.failure('Erro na requisição das tags. Tente novamente!');
    }
  }

  const formikProps = useFormik({
    initialValues: {
      userId: '', 
      isAnonymous: false,      
      message: '',
      tags: '',      
    },
    validationSchema: (RegisterFeedbackSchema),
    onSubmit: (values: FeedbackDTO) => {      
      saveFeedback(values)
    },
  });

  if (loading) {
    return(
      <h1>Loading....</h1>
    ) 
  }

  return (
    <>
    <Link to='/'>Voltar</Link>
    <h1>Register Feedback</h1>
    <Form onSubmit={formikProps.handleSubmit}>      

      <label htmlFor="userId">Selecione a pessoa</label>
      <select id="userId" name="userId" 
        onChange={formikProps.handleChange} 
        onBlur={formikProps.handleBlur} 
        value={formikProps.values.userId}>
        <option value=''></option>
        {
          users.map((user: any) => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))
        }      
      </select>
      {formikProps.errors.userId && formikProps.touched.userId
          ? (<TextDanger>{formikProps.errors.userId}</TextDanger>)
          : null
      }  
       
      <label htmlFor="message">Feedback</label>
      <textarea id="message" name="message"
        onChange={formikProps.handleChange}
        value={formikProps.values.message}
        onBlur={formikProps.handleBlur}
      />     
      {formikProps.errors.message && formikProps.touched.message
        ? (<TextDanger>{formikProps.errors.message}</TextDanger>)
        : null
      }

      <label htmlFor="tags">Selecione a Tag</label>
      <select id="tags" name="tags" 
        onChange={formikProps.handleChange} 
        onBlur={formikProps.handleBlur} 
        value={formikProps.values.tags}>
        <option value=''></option>
        {
          tags.map((tag: any) => (
            <option key={tag.id+tag.name} value={tag.id}>{tag.name}</option>
          ))
        }      
      </select>
      {formikProps.errors.tags && formikProps.touched.tags
          ? (<TextDanger>{formikProps.errors.tags}</TextDanger>)
          : null
      }  

      <label htmlFor="isAnonymous">Anônimo</label>
      <input id="isAnonymous" name="isAnonymous" type="checkbox"
        onChange={formikProps.handleChange}      
        onBlur={formikProps.handleBlur}
      />
      {formikProps.errors.isAnonymous && formikProps.touched.isAnonymous
        ? (<TextDanger>{formikProps.errors.isAnonymous}</TextDanger>)
        : null
      }

      <button type="submit">Registrar</button>    
    </Form>
    </>
  )
}

export default RegisterFeedback;