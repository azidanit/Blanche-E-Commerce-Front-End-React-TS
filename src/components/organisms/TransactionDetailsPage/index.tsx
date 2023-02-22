import { Divider, Skeleton } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetTransactionDetailsQuery } from '../../../app/features/transactions/transactionsApiSlice';
import style from './index.module.scss';
import PaymentDetails from './PaymentDetails';
import ProductDetails from './ProductDetails';
import Shipment from './TransactionStatus';
import ShippingDetails from './ShippingDetails';
import TransactionAction from './TransactionAction';

const TransactionDetailsPage: React.FC = () => {
  const params = useParams();
  const { data, isLoading } = useGetTransactionDetailsQuery(
    params.invoice || '',
  );

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
          {data.transaction_status.on_delivered_at &&
            !data.transaction_status.on_completed_at && (
              <>
                <Divider />
                <TransactionAction transaction={data} />
              </>
            )}
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
