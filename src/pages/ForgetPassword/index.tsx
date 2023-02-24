import React from 'react';
import { ForgetPasswordPage } from '../../components';
import style from './index.module.scss';

const ForgetPassword: React.FC = () => {
  return (
    <div className={style.fp}>
      <ForgetPasswordPage />
    </div>
  );
};

export default ForgetPassword;
