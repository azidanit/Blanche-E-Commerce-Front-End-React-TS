import { Divider, Skeleton } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMerchantOrderDetailsQuery } from '../../../app/features/merchant/merchantOrderApiSlice';
import {
  OrderDetail,
  OrderStatus,
  PaymentDetails,
} from '../../../components/organisms/Merchant/OrderDetail';
import style from './index.module.scss';

const TransactionDetailsPage: React.FC = () => {
  const params = useParams();
  const { data, isLoading } = useGetMerchantOrderDetailsQuery(
    params.invoice || '',
  );

  return (
    <Skeleton loading={isLoading}>
      {data && (
        <div className={style.order__detail}>
          <div className={style.order__detail__header}>
            <h6 className={style.order__detail__header__title}>
              Transaction Details
            </h6>
            <p className={style.order__detail__header__invoice}>
              No Order. {data.invoice_code}
            </p>
          </div>
          <Divider />
          <OrderStatus transaction={data} />
          <OrderDetail
            shippingDetails={data.shipping_details}
            productDetails={data.product_details}
          />
          <PaymentDetails paymentDetail={data.payment_details} />
        </div>
      )}
    </Skeleton>
  );
};

export default TransactionDetailsPage;
