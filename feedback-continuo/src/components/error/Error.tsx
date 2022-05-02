import { ContainerCenter, TitlePrincipal } from '../../Global.styles'
import imgError from '../../images/error.gif'

const Error = () => {
  return (
    <ContainerCenter>
      <img src={imgError} alt="Logo de erro do sistema" />
      <TitlePrincipal>Error...</TitlePrincipal>
    </ContainerCenter>
  )
}

export default Error