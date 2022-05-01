import { Container, TitlePrincipal } from "../../Global.styles"
import { Theme } from "../../theme"
import imgLoading from '../../images/loading.gif'

const Loadingg = () => {
  return (
    <Container>
      <img src={imgLoading} alt="Logo de carregamento do sistema" />
      <TitlePrincipal>Loading....</TitlePrincipal>
    </Container>
  )
}

export default Loadingg