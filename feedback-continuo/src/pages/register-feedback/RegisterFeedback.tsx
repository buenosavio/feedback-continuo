import { api } from "../../api";
import { Link, useNavigate } from "react-router-dom";
import { Notify } from "notiflix";
import { useFormik } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { FeedbackDTO } from "../../model/FeedbackDTO";
import { IAuthContext } from "../../model/TypesDTO";
import { ItemDTO, ListDTO } from "../../model/ListDTO";
import { Container, ContainerCenter, Form, MinorButton, TextDanger, TitleForm, TitlePrincipal } from "../../Global.styles";
import { useContext, useEffect, useState } from "react";

import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import * as Yup from 'yup'
import { AxiosError } from "axios";
import handleError from "../../utils/Error";
import { Theme } from "../../theme";
import { FlexComponent, Input, Select, FlexButton,  TextArea, CardForm } from "./RegisterFeedback.styles";
import Checkbox from "../../components/checkbox/Checkbox";
import { TagList } from "../../components/checkbox/Checkbox.styles";
import { FaUserSecret } from "react-icons/fa";


//A FAZER:
// componentizar select e options. nao foi possivel pois o formik precisa do value
// OK permitir selecionar mais de uma tag. OK
// OK tipar as coisas

const RegisterFeedback = () => {
  
  const RegisterFeedbackSchema = Yup.object().shape({
    feedbackUserId: Yup.string().required('Obrigatório'),
    message: Yup.string().required('Obrigatório'),
    //tags: Yup.array().required('Obrigatório').defined(),
  });

  const {isLogged} = useContext(AuthContext) as IAuthContext
  const [users, setUsers] = useState<ListDTO>();
  const [tags, setTags] = useState<ListDTO>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<any>([]);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
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
      setIsClicked(true)    
    } else {
      selectedTags.push(value.toUpperCase())             
      setIsClicked(false)
    }
    console.log(selectedTags)
  }

  const saveFeedback = async (values: FeedbackDTO) => {
    console.log('--> ', selectedTags)
    const valuesFormatted = {
      ...values,
      tags: selectedTags
    }
    console.log(valuesFormatted)
    try {      
      await api.post("/feedback/", valuesFormatted)
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
 
  return (
    <Container>
      <CardForm>
          
      <TitlePrincipal>Cadastrar Feedback</TitlePrincipal>
      <Form onSubmit={formikProps.handleSubmit}>      
        <TitleForm htmlFor="feedbackUserId">Selecione a pessoa</TitleForm>
        <Select id="feedbackUserId" name="feedbackUserId" 
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
        </Select>
        {formikProps.errors.feedbackUserId && formikProps.touched.feedbackUserId
            ? (<TextDanger>{formikProps.errors.feedbackUserId}</TextDanger>)
            : null
        }  
        
        <TitleForm htmlFor="message">Feedback</TitleForm>
        <TextArea id="message" name="message"
          onChange={formikProps.handleChange}
          value={formikProps.values.message}
          onBlur={formikProps.handleBlur}
        />     
        {formikProps.errors.message && formikProps.touched.message
          ? (<TextDanger>{formikProps.errors.message}</TextDanger>)
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
            ? (<TextDanger>{formikProps.errors.tags}</TextDanger>)
            : null
        }  
        <FlexComponent>               
          <Input id="isAnonymous" name="isAnonymous" type="checkbox"
            onChange={formikProps.handleChange}      
            onBlur={formikProps.handleBlur}
          />
          <FaUserSecret size={25}/>          
        </FlexComponent>
        {formikProps.errors.isAnonymous && formikProps.touched.isAnonymous
          ? (<TextDanger>{formikProps.errors.isAnonymous}</TextDanger>)
          : null
        }
        <FlexButton >
          <MinorButton marginLeft={'-20px'} backgroundColor={Theme.color.CinzaMedio} onClick={() => navigate('/')}>Voltar</MinorButton>    
          <MinorButton marginLeft={'20px'} backgroundColor={Theme.color.Azulclaro} type="submit">Registrar</MinorButton>    
        </FlexButton>
      </Form>
      
      </CardForm>
    </Container>
  )
}

export default RegisterFeedback;