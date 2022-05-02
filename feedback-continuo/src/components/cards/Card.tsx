import { FC } from 'react'
import moment from "moment";
import { cardDTO } from '../../model/CardDTO';
import {
  Tag,
  Image,
  CardName,
  CardText,
  CardBody,
  TextDate,
  CardTags,
  MiddleCard,
} from './Card.styled'

  const Card : FC<cardDTO> = ({message,profileUserImage,tags,userName,createdAt,feedbackId}) => {
  return (
    <CardBody>
      <Image src={profileUserImage} alt="" width="80px" height="80px"/>
      <MiddleCard>
        <div>
          <CardName>{userName} <TextDate>enviado em {moment(createdAt).format('DD/MM/YYYY hh:mm')}</TextDate></CardName>
          <CardText>{message}</CardText>              
          <CardTags>
            {tags.split('#').slice(1).map((tag:string | boolean) =>(             
              <Tag> #{tag} </Tag>
            ))}
          </CardTags>          
        </div>
      </MiddleCard>  
    </CardBody>
  )
}

export default Card
