import React from 'react';
import { ShippingPage } from '../../../components';
import style from './index.module.scss';

const Shipping: React.FC = () => {
  return (
    <div className={style.shipping}>
      <h1 className={style.shipping__title}>Shipping</h1>
      <ShippingPage />
    </div>
  );
};

export default Shipping;
