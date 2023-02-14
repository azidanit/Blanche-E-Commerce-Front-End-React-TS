import React from 'react';
import { ICheckoutResponse } from '../../../../../helpers/types';

import ProductStoreItem from '../ProductStoreItem';
import style from './index.module.scss';

interface ListProductStoreProps {
  order: ICheckoutResponse;

  handleSetOrderSummary: (order: ICheckoutResponse) => void;
}

const ListProductStore: React.FC<ListProductStoreProps> = ({
  order,
  handleSetOrderSummary,
}) => {
  return (
    <div className={style.list__product__store__item}>
      {order.orders.map((order) => (
        <ProductStoreItem order={order} key={order.merchant.merchant_name} />
      ))}
    </div>
  );
};

export default ListProductStore;
