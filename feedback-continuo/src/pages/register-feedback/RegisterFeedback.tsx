import { api } from "../../api";
import { Link } from "react-router-dom";
import { Notify } from "notiflix";
import { useFormik } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { FeedbackDTO } from "../../model/FeedbackDTO";
import { IAuthContext } from "../../model/TypesDTO";
import { ItemDTO, ListDTO } from "../../model/ListDTO";
import { Container, Form, TextDanger } from "../../Global.styles";
import { useContext, useEffect, useState } from "react";
import { theme } from "../../theme";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import * as Yup from 'yup'
import { AxiosError } from "axios";
import handleError from "../../utils/Error";

//A FAZER:
// componentizar select e options. nao foi possivel pois o formik precisa do value
// OK permitir selecionar mais de uma tag. OK
// OK tipar as coisas

const RegisterFeedback = () => {
  
  const RegisterFeedbackSchema = Yup.object().shape({
    feedbackUserId: Yup.string().required('Obrigatório'),
    message: Yup.string().required('Obrigatório'),
    tags: Yup.array().required('Obrigatório').defined(),
  });

  const {isLogged} = useContext(AuthContext) as IAuthContext
  const [users, setUsers] = useState<ListDTO>();
  const [tags, setTags] = useState<ListDTO>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  
  useEffect(() => {
    isLogged()
    getUsers()    
  },[])

  const getUsers = async () => {
    let users: any = [];
    try {
      const {data} = await api.get('/user/list-all-users-without-loged');
      data.map((user: ItemDTO) => {
        users.push({name: user.name, id: user.userId})  
      })
      setUsers(users)        
      getTags() 
    } catch (error) {   
      setLoading(false)
      setError(true)   
      const errorData = error as AxiosError 
      handleError(errorData)
    }
  }

  const getTags = async () => {
    let tags: any = [];
    try {
      const {data} = await api.get('/tag');
      data.map((tag:ItemDTO) => {
        tags.push({name: tag.name, id: tag.tagId}) 
      })      
      setTags(tags)   
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
      const errorData = error as AxiosError 
      handleError(errorData)
    }
  }

  const saveFeedback = async (values: FeedbackDTO) => {
    try {      
      await api.post("/feedback/", values)
      Notify.success("Feedback enviado com sucesso!")
      formikProps.resetForm()
    } catch (error) {
      const errorData = error as AxiosError 
      handleError(errorData)
    }
  }

  const formikProps = useFormik({
    initialValues: {
      feedbackUserId: '', 
      isAnonymous: false,      
      message: '',
      tags: [''],      
    },
    validationSchema: (RegisterFeedbackSchema),
    onSubmit: (values: FeedbackDTO) => {      
      saveFeedback(values)
    },
  });

  if (loading) {
    return(
      <Loading />
    ) 
  }

  if (error) {
    return(
      <Error />
    ) 
  }

  console.log(formikProps.values.tags)
  
  return (
    <Container minHeight={theme.Container.minHeight}>
      <Link to='/'>Voltar</Link>
      <h1>Register Feedback</h1>
      <Form onSubmit={formikProps.handleSubmit}>      

        <label htmlFor="feedbackUserId">Selecione a pessoa</label>
        <select id="feedbackUserId" name="feedbackUserId" 
          onChange={formikProps.handleChange} 
          onBlur={formikProps.handleBlur} 
          value={formikProps.values.feedbackUserId}>
          <option value=''></option>
          {
            users ? users.map((user: ItemDTO) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))
            : null
          }      
        </select>
        {formikProps.errors.feedbackUserId && formikProps.touched.feedbackUserId
            ? (<TextDanger>{formikProps.errors.feedbackUserId}</TextDanger>)
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
          value={formikProps.values.tags}
          multiple={true}>
          <option value=''></option>
          {
            tags ?
            tags.map((tag: ItemDTO) => (
              <option key={tag.id+tag.name} value={tag.name.toUpperCase()}>{tag.name}</option>
            ))
            : null
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
    </Container>
  )
}

export default RegisterFeedback;