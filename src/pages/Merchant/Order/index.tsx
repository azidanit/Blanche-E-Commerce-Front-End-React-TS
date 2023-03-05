import React from 'react';
import { OrderList } from '../../../components';
import './override.scss';
import style from './index.module.scss';

const Order: React.FC = () => {
  return (
    <div className={style.order__page}>
      <h2 className={style.order__page__title}>Order List</h2>
      <OrderList />
    </div>
  );
};

export default Order;
