import { Skeleton } from 'antd';
import React from 'react';
import { ItemNotFound, Pagination } from '../../../..';
import { useGetMerchantOrdersQuery } from '../../../../../app/features/merchant/merchantOrderApiSlice';
import { useAppSelector } from '../../../../../app/hooks';
import { Card } from '../../../../atoms';
import FilterStatus from '../../../TransactionsPage/FilterStatus';
import CardOrder from '../CardOrder';
import style from './index.module.scss';

const limit = 10;
export enum OrderStatus {
  TransactionStatusWaited = 1,
  TransactionStatusProcessed = 2,
  TransactionStatusOnDelivery = 3,
  TransactionStatusDelivered = 4,
  TransactionStatusOnCompleted = 5,
  TransactionStatusCanceled = 6,
  TransactionStatusRequestRefund = 7,
  TransactionStatusOnRefund = 8,
}

const values = [
  'All',
  'New Order',
  'Ready to Ship',
  'On Delivery',
  'Delivered',
  'Completed',
  'Canceled',
  'Request Refund',
  'Refunded',
];

const OrderList: React.FC = () => {
  const params = useAppSelector((state) => state.params);

  const { data, isLoading } = useGetMerchantOrdersQuery({
    ...params.search,
    limit,
  });

  return (
    <Skeleton loading={isLoading} active>
      <Card className={style.tl}>
        <FilterStatus values={values} />
        {data && data.transactions.length ? (
          <div className={style.tl__list}>
            {data.transactions.map((item) => (
              <CardOrder transaction={item} key={item.invoice_code} />
            ))}
          </div>
        ) : (
          <ItemNotFound
            className={style.tl__notfound}
            title=" You don't have any order yet."
            body="
            Your order will appear here once customer has purchased your product
            ."
          />
        )}
        {data &&
          data.total_data > limit &&
          Boolean(data.transactions.length) && (
            <div className={style.tl__pagination}>
              <Pagination
                total={data.total_data}
                pageSize={limit}
                showSizeChanger={false}
              />
            </div>
          )}
      </Card>
    </Skeleton>
  );
};

export default OrderList;
