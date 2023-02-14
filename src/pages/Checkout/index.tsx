import { message, notification, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCheckoutSummaryMutation } from '../../app/features/checkout/checkoutApiSlice';
import {
  AddressCheckout,
  ItemNotFound,
  ListProductStore,
  OrderSummary,
} from '../../components';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import { ICheckoutResponse } from '../../helpers/types';
import style from './index.module.scss';

const Checkout: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [orderSummary, setOrderSummary] = useState<ICheckoutResponse>();
  const data = params.get('data');

  const [checkoutSummary, { isLoading }] = useCheckoutSummaryMutation();

  const fetchData = async () => {
    try {
      const order = await checkoutSummary({
        order_code: data || '',
      }).unwrap();

      setOrderSummary(order);
    } catch (e) {
      const err = e as Error;
      message.error(capitalizeFirstLetter(err.message));
    }
  };
  useEffect(() => {
    if (!data) {
      return;
    }

    fetchData();
  }, [data]);

  const handleSetOrderSummary = (order: ICheckoutResponse) => {
    setOrderSummary(order);
  };

  if (!orderSummary) {
    if (isLoading) {
      return <Skeleton />;
    }

    return <ItemNotFound title="Order not found" />;
  }

  return (
    <div className={style.checkout__page}>
      <div className={style.checkout__page__info}>
        <AddressCheckout
          order={orderSummary}
          handleSetOrderSummary={handleSetOrderSummary}
        />
        <ListProductStore
          order={orderSummary}
          handleSetOrderSummary={handleSetOrderSummary}
        />
      </div>
      <div className={style.checkout__page__summary}>
        <OrderSummary
          order={orderSummary}
          handleSetOrderSummary={handleSetOrderSummary}
        />
      </div>
    </div>
  );
};

export default Checkout;
