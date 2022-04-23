export interface UserDTO {
  email: string,
  name: string,
  password: string,
  confirm_password?: string,
  profileImage: string
}

export interface UserDataDTO {
  userId: string,
  name: string,
  email: string,
  profileImage?: string
}
