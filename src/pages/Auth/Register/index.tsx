import React from 'react';
import { SEO } from '../../../components';
import { AuthLayout } from '../../../components/layouts';
import CardRegister from '../../../components/organisms/Auth/CardRegister';

const Register: React.FC = () => {
  return (
    <AuthLayout>
      <SEO title="Register" description="Register page" />
      <CardRegister />
    </AuthLayout>
  );
};

export default Register;
