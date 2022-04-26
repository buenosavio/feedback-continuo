import {GivedFeedbackDTO} from '../../model/FeedbackDTO'
import { FC } from 'react'
import {
  CardContainer,
  CardImg,
  CardName,
  CardText,
  CardTags,
} from './Card.styled'


type cardDTO = {
  message: string,
  profileUserImage: string,
  tags: string,
  userName: string,
}

  const Card : FC<cardDTO> = ({message,profileUserImage,tags,userName,}) => {
  return (
    <CardContainer>
      <CardImg background={profileUserImage}/>
        <CardName>
          {userName}
        </CardName>
        <CardText>
          {message}
        </CardText>
        <CardTags>
          {tags}
        </CardTags>
    </CardContainer>
  )
}

export default Card
