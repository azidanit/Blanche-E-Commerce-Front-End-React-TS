import React from 'react';
import style from './index.module.scss';
import { Logo, Card } from '../../atoms';
import { Layout } from 'antd';
import { CardLogin } from '../../organisms';

const AuthSectionRight: React.FC = () => {
  return (
    <div className={style.auth__section__right}>
      <Logo size="medium" />
      <CardLogin />
    </div>
  );
};

export default AuthSectionRight;
