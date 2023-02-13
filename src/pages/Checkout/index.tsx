import React from 'react';
import {
  AddressCheckout,
  ListProductStore,
  OrderSummary,
} from '../../components';
import style from './index.module.scss';

const Checkout = (): JSX.Element => {
  return (
    <div className={style.checkout__page}>
      <div className={style.checkout__page__info}>
        <AddressCheckout />
        <ListProductStore />
      </div>
      <div className={style.checkout__page__summary}>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
