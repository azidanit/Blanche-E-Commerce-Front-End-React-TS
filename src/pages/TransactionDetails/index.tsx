import React from 'react';
import { TransactionDetailsPage } from '../../components';
import style from './index.module.scss';

const TransactionDetails: React.FC = () => {
  return (
    <div className={style.td}>
      <TransactionDetailsPage />
    </div>
  );
};

export default TransactionDetails;
