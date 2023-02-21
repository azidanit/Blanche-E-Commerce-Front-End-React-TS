import React from 'react';
import { ChangePasswordPage } from '../../components';
import style from './index.module.scss';

const ChangePassword: React.FC = () => {
  return (
    <div className={style.cp}>
      <ChangePasswordPage />
    </div>
  );
};

export default ChangePassword;
