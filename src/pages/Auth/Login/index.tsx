import React from 'react';
import { CardLogin, SEO } from '../../../components';
import { AuthLayout } from '../../../components/layouts';

const Login: React.FC = () => {
  return (
    <AuthLayout>
      <SEO title="Login" description="Login page" />
      <CardLogin />
    </AuthLayout>
  );
};

export default Login;
