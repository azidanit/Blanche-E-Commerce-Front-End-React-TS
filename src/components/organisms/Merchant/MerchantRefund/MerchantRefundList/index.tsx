import React from 'react';
import { useGetRefundListQuery } from '../../../../../app/features/refund/refundApiSlice';
import { useAppSelector } from '../../../../../app/hooks';
import FilterStatus from '../../../TransactionsPage/FilterStatus';
import RefundItem from './MerchantRefundItem';
import style from './index.module.scss';
import { Card } from '../../../../atoms';
import { Divider } from 'antd';
import { useGetRefundMerchantListQuery } from '../../../../../app/features/merchant/refundApiSlice';

const limit = 10;

const values = [
  'All',
  'Need Approval',
  'Waiting Admin Approval',
  'Closed',
  'Canceled By User',
  'Rejected',
  'Refunded',
];

const MerchantRefundList: React.FC = () => {
  const params = useAppSelector((state) => state.params);

  const { data, isLoading } = useGetRefundMerchantListQuery({
    ...params.search,
    limit,
  });

  return (
    <Card className={style.refund__list}>
      <FilterStatus values={values} />
      <div className={style.refund__list__body}>
        {data?.refund_requests.map((item, index) => (
          <RefundItem refund={item} key={index} />
        ))}
      </div>
    </Card>
  );
};

export default MerchantRefundList;
