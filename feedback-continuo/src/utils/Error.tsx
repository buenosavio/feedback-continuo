import { AxiosError } from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const handleError = (errorData: AxiosError) => {   
  if (errorData.response) {
    console.log(errorData.response.data.message)
    switch (errorData.response.data.message) {
      case 'Não é possível atribuir feedbacks a si mesmo.':
        Notify.failure('Não é possível atribuir feedbacks a você mesmo.');
        break;
      case 'Email inválido ou já existente.':
        Notify.failure('E-mail ou senha inválidos. Tente novamente!');
      break;
      case 'Senha fraca demais.':
        Notify.failure('Senha Fraca. Tente novamente!'); 
      break;
      case 'Senha antiga incompatível.':
        Notify.failure('Senha anterior não confere.');
      break;
      case 'Essa já é sua senha atual!':
        Notify.failure('Nova senha deve ser diferente da anterior. Tente novamente!');
      break;
      case 'Tipo de arquivo não suportado.':
        Notify.warning('Tipo de arquivo não suportado! Insira JPEG, JPG ou PNG');
      break;
      case 'Email inválido.':
        Notify.warning('Email inválido. Tente novamente!');
      break;
      case 'Usuário não encontrado.': 
        Notify.failure('Usuário não encontrado.')
        break;
      case 'Erro ao salvar imagem.':
        Notify.failure('Erro ao salvar imagem. Tente novamente!')
        break;
      default:
        Notify.failure('Erro desconhecido. Tente novamente!');
    }      
  } else {
    Notify.failure('Erro desconhecido. Tente novamente!'); 
  }     
}

export default handleError;