import React from 'react';
import { WaitingDetailsPage } from '../../components';
import style from './index.module.scss';

const TransactionDetails: React.FC = () => {
  return (
    <div className={style.wd}>
      <WaitingDetailsPage />
    </div>
  );
};

export default TransactionDetails;
