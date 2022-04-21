import axios from "axios";

export const api = axios.create({
  baseURL: 'https://feedback-continuo-back.herokuapp.com/',
})