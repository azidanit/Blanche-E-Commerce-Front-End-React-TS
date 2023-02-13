import React from 'react';
import {
  AddressCheckout,
  OrderSummary,
  VoucherMarketplace,
} from '../../components';
import style from './index.module.scss';

const Checkout = (): JSX.Element => {
  return (
    <div className={style.checkout__page}>
      <div className={style.checkout__page__info}>
        <AddressCheckout />
      </div>
      <div className={style.checkout__page__summary}>
        <VoucherMarketplace />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
