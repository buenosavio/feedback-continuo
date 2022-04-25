import { ImageFull, ContainerFull, ButtonAbsolute, TextAbs } from './NotFound.styles';
import imgNotFound from '../../images/err404.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NotFound = () => {

  const navigate = useNavigate();

  const [counter, setCounter] = useState<number>(5);

  setInterval(() => {
    (counter > 0) ? setCounter(counter - 1) : navigate('/')
  }, 1000);
  
  // setTimeout(() => {
  //   navigate('/login')
  // }, 5000)
  
  return(
    <>
    <ContainerFull>
      <TextAbs>{`Você será redirecionado automaticamente em ${counter} segundos`}</TextAbs>
      <ImageFull src={imgNotFound} alt="Imagem de tela não encontrada" width="100vh" height="100vh" />
      <ButtonAbsolute onClick={() => {navigate('/login')}}>Voltar para o Início</ButtonAbsolute>
    </ContainerFull>
    </>

  )
}

export default NotFound;