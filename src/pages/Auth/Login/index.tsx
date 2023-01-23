import React from 'react';
import { CardLogin } from '../../../components';
import { AuthLayout } from '../../../components/layouts';

const Login = (): JSX.Element => {
  return (
    <AuthLayout>
      <CardLogin />
    </AuthLayout>
  );
};

export default Login;
