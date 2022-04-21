import { LoginDTO } from "./LoginDTO";
import { UserDTO } from "./UserDTO";

export interface IAuthContext {
  token: string;
  handleLogin: (values: LoginDTO) => void;
  handleLogout: () => void;
  isLogged: () => void;
  isNotLogged: () => void;
  registerUser: (values: UserDTO) => void;
}
