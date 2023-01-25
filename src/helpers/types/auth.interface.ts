export interface LoginProps {
  email: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ErrorLogin {
  email: string;
  password: string;
}

export interface FormReturnAuth<T> {
  handleSubmit: (values: T) => void;
  isLoading?: boolean;
  isError?: boolean;
  error?: Error;
}

export interface RegisterFirstStepProps {
  email: string;
}

export interface RegisterSecondStepProps {
  username: string;
  fullname: string;
  password: string;
  confirmPassword: string;
}

export interface IRegisterRequest {
  email: string;
  username: string;
  fullname: string;
  password: string;
}

export interface IRegisterResponse {
  access_token: string;
}

export interface ErrorRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ICheckEmailResponse {
  is_available: boolean;
  email: string;
}

export interface ICheckUsernameResponse {
  is_available: boolean;
  username: string;
}

export interface ICheckUsernameRequest {
  username: string;
}
