import { Divider } from 'antd';
import React from 'react';
import style from './index.module.scss';
import ProductList from './ProductList';
import Shipment from './Shipment';
import ShippingAddress from './ShippingAddress';

const TransactionDetailsPage: React.FC = () => {
  return (
    <div className={style.tdp}>
      <div className={style.tdp__header}>
        <h1 className={style.tdp__header__title}>Transactions Details</h1>
        <p className={style.tdp__header__invoice}>
          INV/20230129/MPL/3008868972
        </p>
      </div>
      <Shipment className={style.tdp__shipment} />
      <Divider />
      <ProductList />
      <Divider />
      <ShippingAddress />
    </div>
  );
};

export default TransactionDetailsPage;
