import React from 'react';
import style from './index.module.scss';
import { Layout } from 'antd';
import { Logo } from '../../atoms';

const AuthSectionLeft: React.FC = () => {
  return (
    <Layout className={style.auth__layout__left}>
      <div className={style.auth__layout__left__content}>
        <h5>
          Enrich
          <br /> your shopping list wisely <br /> with <br />
          <span>blanche</span>
        </h5>
      </div>
    </Layout>
  );
};

export default AuthSectionLeft;
