import { Notify } from "notiflix/build/notiflix-notify-aio";
import { AxiosError } from "axios";

export const FirstLetterUppercase = (text: string) => {
  return (
    text.replace(/(^\w{1})|(\s+\w{1})/g, (letra: string)=> letra.toUpperCase())
  )
}

export const handleError = (errorData: AxiosError) => {   
  if (errorData.response) {
    Notify.failure(errorData.response.data.message)
  } else {
    Notify.failure('Erro desconhecido. Tente novamente!'); 
  }     
}

export const convertBase64 = (file: Blob) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); 

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};