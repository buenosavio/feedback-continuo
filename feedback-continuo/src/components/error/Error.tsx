import { Container, TitlePrincipal } from '../../Global.styles'
import { Theme } from '../../theme'
import imgError from '../../images/error.gif'

const Error = () => {
  return (
    <Container>
      <img src={imgError} alt="Logo de erro do sistema" />
      <TitlePrincipal>Error...</TitlePrincipal>
    </Container>
  )
}

export default Error