import { FC } from 'react'
import moment from "moment";
import {
  Image,
  CardName,
  CardText,
  CardBody,
  CardTags,
  CardData,
  CardHeader,
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
        <CardHeader>
          <CardName>
              {userName}
            </CardName>
        </CardHeader> 
        <CardBody>
          <Image src={profileUserImage} alt="" width="80px" height="80px"/>
          <CardText>
            {message}
          </CardText>
          <CardTags>
            {tags}
          </CardTags>
        </CardBody>
          <CardData>
            <TextFooter>
            {moment(createdAt).format('DD / MM / YYYY')}
            </TextFooter>
          </CardData>
      </CardContainer>
    </GlobalCard>
  )
}

export default Card
