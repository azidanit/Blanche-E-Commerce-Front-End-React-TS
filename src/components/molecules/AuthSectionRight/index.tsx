import React from 'react';
import style from './index.module.scss';
import { Logo, Card } from '../../atoms';
import { Layout } from 'antd';
import { CardLogin } from '../../organisms';

interface AuthSectionRightProps {
  children: React.ReactNode;
}

const AuthSectionRight: React.FC<AuthSectionRightProps> = ({ children }) => {
  return (
    <div className={style.auth__section__right}>
      <Logo size="medium" />
      {children}
    </div>
  );
};

export default AuthSectionRight;
