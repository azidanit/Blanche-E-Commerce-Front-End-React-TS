import React from 'react';

export interface LoginProps {
  email: string;
  password: string;
}

export interface ErrorLogin {
  email: string;
  password: string;
}

export interface FormReturnLogin<T> {
  handleSubmit: (values: LoginProps) => void;
}

export interface RegisterProps {
  name: string;
  email: string;
  address?: string;
  password: string;
  confirmPassword: string;
}

export interface ErrorRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
