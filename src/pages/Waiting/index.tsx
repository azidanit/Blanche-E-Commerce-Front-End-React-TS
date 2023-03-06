import React from 'react';
import { WaitingPage } from '../../components';
import style from './index.module.scss';

const Wallet: React.FC = () => {
  return (
    <div className={style.waiting}>
      <WaitingPage />
    </div>
  );
};

export default Wallet;
