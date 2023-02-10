import React from 'react';
import style from './index.module.scss';

const PaymentDetails: React.FC = () => {
  return (
    <div className={style.pd}>
      <h3 className={style.pd__title}>Payment Details</h3>
    </div>
  );
};

export default PaymentDetails;
