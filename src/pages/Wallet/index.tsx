import React from 'react';
import { WalletPage } from '../../components';
import style from './index.module.scss';

const Wallet: React.FC = () => {
  return (
    <div className={style.wallet__page}>
      <WalletPage />
    </div>
  );
};

export default Wallet;
