import { AxiosError } from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const handleError = (errorData: AxiosError) => {   
  if (errorData.response) {
    switch (errorData.response.status) {
      case 400:
        Notify.failure('E-mail já existente. Tente novamente!');
        break;
      case 401:
        Notify.failure('Senha anterior não confere!');
      break;
      case 403:
        Notify.failure('E-mail ou senha inválidos. Tente novamente!'); 
        break;
      case 404:
        Notify.failure('Requisição inválida. Tente novamente!');
      break;
      case 406:
        Notify.warning('Tipo de arquivo não suportado! Insira JPEG, JPG ou PNG');
      break;
      case 503:
        Notify.warning('Arquivo ultrapassou o tamanho máximo permitido de 128KB');
      break;
      default:
        Notify.failure('Erro desconhecido. Tente novamente!');
    }      
  } else {
    Notify.failure('Erro desconhecido. Tente novamente!'); 
  }     
}

export default handleError;