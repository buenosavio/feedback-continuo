export interface UserDTO {
  email: string,
  name: string,
  password: string,
  confirm_password?: string,
  profileImage: string
}