import { IChangePasswordDTO } from "./ChangePasswordDTO";
import { LoginDTO } from "./LoginDTO";

export interface IAuthContext {
  token: string;
  handleLogin: (values: LoginDTO) => void;
  handleLogout: () => void;
  isLogged: () => void;
  changePassword: (values: IChangePasswordDTO) => void;
  loginOn:  boolean;
  loginOff: boolean;
}

