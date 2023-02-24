import { Divider, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetTransactionDetailsQuery } from '../../../app/features/transactions/transactionsApiSlice';
import style from './index.module.scss';
import PaymentDetails from './PaymentDetails';
import ProductDetails from './ProductDetails';
import Shipment from './TransactionStatus';
import ShippingDetails from './ShippingDetails';
import TransactionActionOnDelivered from './TransactionAction/TransactionActionOnDelivered';
import { OrderStatus } from '../Merchant/Order/CardOrder/utils';
import TransactionActionOnCompleted from './TransactionAction/TransactionActionOnCompleted';

const TransactionDetailsPage: React.FC = () => {
  const params = useParams();
  const { data, isLoading } = useGetTransactionDetailsQuery(
    params.invoice || '',
  );
  const [statusIdx, setStatusIdx] = useState(0);

  const MapComponent: {
    [key: number]: React.ReactNode;
  } = {
    [OrderStatus.TransactionStatusDelivered]: (
      <TransactionActionOnDelivered transaction={data} />
    ),
    [OrderStatus.TransactionStatusOnCompleted]: (
      <TransactionActionOnCompleted transaction={data} />
    ),
  };

  const renderComponent = () => {
    return MapComponent[statusIdx];
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    if (data.transaction_status.on_canceled_at) {
      return;
    }
    if (data.transaction_status.on_completed_at) {
      setStatusIdx(OrderStatus.TransactionStatusOnCompleted);
      return;
    }
    if (data.transaction_status.on_delivered_at) {
      setStatusIdx(OrderStatus.TransactionStatusDelivered);
      return;
    }
    if (data.transaction_status.on_processed_at) {
      return;
    }
    if (data.transaction_status.on_waited_at) {
      return;
    }
  }, [data]);

  return (
    <Skeleton loading={isLoading}>
      {data && (
        <div className={style.tdp}>
          <div className={style.tdp__header}>
            <h1 className={style.tdp__header__title}>Transaction Details</h1>
            <p className={style.tdp__header__invoice}>{data.invoice_code}</p>
          </div>
          <Shipment
            transactionStatus={data.transaction_status}
            className={style.tdp__shipment}
          />
          {renderComponent()}
          <Divider />
          <ProductDetails productDetails={data.product_details} />
          <Divider />
          <ShippingDetails shippingDetails={data.shipping_details} />
          <Divider />
          <PaymentDetails paymentDetails={data.payment_details} />
        </div>
      )}
    </Skeleton>
  );
};

export default TransactionDetailsPage;
