import { LoginDTO } from "./LoginDTO";

export interface IAuthContext {
  token: string;
  handleLogin: (values: LoginDTO) => void;
  isLogged: () => void;
}
