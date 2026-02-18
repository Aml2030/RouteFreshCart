
export interface signUpData extends logInData {
  name: string
  rePassword: string
  phone: string
}


export interface logInData extends forgetPassword {

  password: string
}

export interface forgetPassword {
  email: string

}
export interface resetCodeData {

  resetCode: string

}
export interface resetNewPassword  extends forgetPassword  {
  newPassword: string

}


