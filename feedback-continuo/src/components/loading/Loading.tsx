import { ContainerCenter, TitlePrincipal } from "../../Global.styles"
import imgLoading from '../../images/loading.gif'

const Loadingg = () => {
  return (
    <ContainerCenter>
      <img src={imgLoading} alt="Logo de carregamento do sistema" />
      <TitlePrincipal>Loading....</TitlePrincipal>
    </ContainerCenter>
  )
}

export default Loadingg