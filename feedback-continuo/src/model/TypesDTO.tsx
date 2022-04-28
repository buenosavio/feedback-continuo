import { LoginDTO } from "./LoginDTO";
import { UserDTO } from "./UserDTO";

export interface IAuthContext {
  token: string;
  handleLogin: (values: LoginDTO) => void;
  handleLogout: () => void;
  isLogged: () => void;
  changePassword: () => void;
  loginOn:  boolean;
  loginOff: boolean;
}

export interface IChangePasswordDTO {
  oldPassword: string,
  newPassword: string,
  confirmPassword: string,
}

