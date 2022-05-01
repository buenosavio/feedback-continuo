import { api } from "../../api";
import { Theme } from "../../theme";
import { Notify } from "notiflix";
import { TagList } from "../../components/checkbox/Checkbox.styles";
import { useFormik } from "formik";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FeedbackDTO } from "../../model/FeedbackDTO";
import { IAuthContext } from "../../model/TypesDTO";
import { FaUserSecret } from "react-icons/fa";
import { ItemDTO, ListDTO } from "../../model/ListDTO";
import { useContext, useEffect, useState } from "react";
import { FlexComponent, Input, FlexButton,  TextArea, CardForm } from "./RegisterFeedback.styles";
import { Container, Form, MinorButton, TextDanger, TitleForm, TitlePrincipal } from "../../Global.styles";

import * as Yup from 'yup'
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import Checkbox from "../../components/checkbox/Checkbox";
import handleError from "../../utils/Error";
import SelectFinder from "../../components/select/SelectFinder";

const RegisterFeedback = () => {
  
  const RegisterFeedbackSchema = Yup.object().shape({
    feedbackUserId: Yup.string().required('Obrigatório'),
    message: Yup.string().required('Obrigatório'),    
  });

  const {isLogged} = useContext(AuthContext) as IAuthContext
  const [users, setUsers] = useState<ListDTO>();
  const [allUsers, setallUsers] = useState([]);
  const [tags, setTags] = useState<ListDTO>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<any>([]);
  const navigate = useNavigate();
  
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
      handleNames(users)
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

  const listTags = (value: any) => {    
    if (selectedTags.includes(value.toUpperCase())) {
      const index = selectedTags.indexOf(value.toUpperCase());
      selectedTags.splice(index, 1);        
    } else {
      selectedTags.push(value.toUpperCase())                 
    }
  }

  const saveFeedback = async (values: FeedbackDTO) => {
    const valuesFormatted = {
      ...values,
      tags: selectedTags
    }
    if (valuesFormatted.tags.length > 0) {
      try {      
        await api.post("/feedback/", valuesFormatted)
        Notify.success("Feedback enviado com sucesso!")
        formikProps.resetForm()
        navigate('/')
      } catch (error) {
        const errorData = error as AxiosError 
        handleError(errorData)
      }
    } else {
      Notify.warning('Selecione ao menos uma tag!')
    }

  }

  const formikProps = useFormik({
    initialValues: {
      feedbackUserId: '', 
      isAnonymous: false,      
      message: '',
      tags: [],      
    },
    validationSchema: (RegisterFeedbackSchema),
    onSubmit: (values: FeedbackDTO) => {            
      saveFeedback(values)
      console.log(values.tags)
    },
  });

  const handleNames:any = (users:any) => {
    const names = users ? users.map((user: any) => (
      {value: user.id, label: user.name}
    )) : null
    setallUsers(names)        
  }

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
  
  return (
    <Container minHeight={'100vh'}>
      <CardForm>          
        <TitlePrincipal>Cadastrar Feedback</TitlePrincipal>
        <Form onSubmit={formikProps.handleSubmit}>      
          <TitleForm htmlFor="feedbackUserId">Selecione a pessoa</TitleForm>
          <SelectFinder id="feedbackUserId" name="feedbackUserId"                        
            value={formikProps.values.feedbackUserId}
            onChange={(e: any) => formikProps.setFieldValue("feedbackUserId", e.value)}            
            options={allUsers}                          
          />          
          {formikProps.errors.feedbackUserId && formikProps.touched.feedbackUserId 
            ? (<TextDanger marginLeft='25px'>{formikProps.errors.feedbackUserId}</TextDanger>) 
            : null
          }    
          
          <TitleForm htmlFor="message">Feedback</TitleForm>
          <TextArea id="message" name="message"
            onChange={formikProps.handleChange}
            value={formikProps.values.message}
            onBlur={formikProps.handleBlur}
          />     
          {formikProps.errors.message && formikProps.touched.message 
            ? (<TextDanger marginLeft='25px'>{formikProps.errors.message}</TextDanger>) 
            : null
          }    

          <TitleForm htmlFor="tags">Selecione as tags desejadas</TitleForm>  
          <TagList>
            {
              tags ?
              tags.map((tag: ItemDTO) => (
                <div key={tag.id+tag.name}>                
                  <Checkbox listTags={listTags}>{tag.name}</Checkbox>                
                </div>
              ))
              : null
            }
          </TagList> 
          {formikProps.errors.tags && formikProps.touched.tags
            ? (<TextDanger marginLeft='25px'>{formikProps.errors.tags}</TextDanger>) 
            : null
          }    
                    
          <FlexComponent>               
            <Input id="isAnonymous" name="isAnonymous" type="checkbox"
              onChange={formikProps.handleChange}      
              onBlur={formikProps.handleBlur}
            />
            <FaUserSecret size={25}/>          
          </FlexComponent>      
          <FlexButton>
            <MinorButton marginLeft={'80px'} backgroundColor={Theme.color.CinzaMedio} onClick={() => navigate('/')}>Voltar</MinorButton>    
            <MinorButton backgroundColor={Theme.color.Azulclaro} type="submit">Registrar</MinorButton>    
          </FlexButton>
        </Form>      
      </CardForm>
    </Container>
  )
}

export default RegisterFeedback;