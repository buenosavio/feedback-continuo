export interface  IChangePasswordDTO {
  oldPassword: string,
  newPassword: string,
  confirmPassword?: string,
}