import { FC } from 'react'
import moment from "moment";
import {
  Tag,
  Image,
  DivCard,
  CardName,
  CardText,
  CardBody,
  CardTags,
  CardData,
  TextFooter,
  GlobalCard,
  CardContainer,
} from './Card.styled'

type cardDTO = {
  message: string,
  profileUserImage: string,
  tags: string,
  userName: string,
  createdAt: string
}

  const Card : FC<cardDTO> = ({message,profileUserImage,tags,userName,createdAt,}) => {
  return (
    <GlobalCard>   
      <CardContainer>
        <CardBody>
          <Image src={profileUserImage} alt="" width="80px" height="80px"/>
          <DivCard>
          <CardName>
              {userName}
            </CardName>
          <CardText>
            {message}
          </CardText>
          <CardTags>
            {tags.split('#').slice(1).map((tag:string | boolean) =>(             
              <Tag> #{tag} </Tag>
            ))}
          </CardTags>
          <CardData>
            <TextFooter>
            Enviado em : {moment(createdAt).format('DD / MM / YYYY')}
            </TextFooter>
          </CardData>
          </DivCard>  
        </CardBody>
      </CardContainer>
    </GlobalCard>
  )
}

export default Card
