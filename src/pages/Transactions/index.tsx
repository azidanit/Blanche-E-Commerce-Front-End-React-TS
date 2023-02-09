import React from 'react';
import { TransactionsPage } from '../../components';
import style from './index.module.scss';

const Transactions: React.FC = () => {
  return (
    <div className={style.transactions}>
      <TransactionsPage />
    </div>
  );
};

export default Transactions;
