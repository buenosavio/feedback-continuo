import { FC } from 'react'
import {
  CardName,
  CardText,
  CardTags,
  CardData,
  CardImage,
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
    <CardContainer>
     <CardImage src={profileUserImage} alt="" width="80px" height="80px"/>
        <CardName>
          {userName}
        </CardName>
        <CardText>
          {message}
        </CardText>
        <CardTags>
          {tags}
        </CardTags>
        <CardData>
          {createdAt}
        </CardData>
    </CardContainer>
  )
}

export default Card
