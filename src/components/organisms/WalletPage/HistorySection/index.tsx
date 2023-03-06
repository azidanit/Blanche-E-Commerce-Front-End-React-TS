import { Divider, Pagination, Skeleton } from 'antd';
import { PaginationProps } from 'rc-pagination';
import React, { Fragment, useState } from 'react';
import { ItemNotFound } from '../../..';
import { useGetWalletHistoryQuery } from '../../../../app/features/wallet/walletApiSlice';
import style from './index.module.scss';
import TransactionItem from './TransactionItem';

const limit = 10;

interface HistorySectionProps {
  isSuccess: boolean;
}

const HistorySection: React.FC<HistorySectionProps> = ({ isSuccess }) => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetWalletHistoryQuery(
    { limit, page },
    { skip: !isSuccess },
  );

  const onChange: PaginationProps['onChange'] = (page) => {
    setPage(page);
  };
  return (
    <Skeleton loading={isLoading}>
      <div className={style.hs}>
        {data?.transactions.map((transaction, index) => (
          <Fragment key={transaction.payment_id}>
            <TransactionItem
              key={transaction.payment_id}
              transaction={transaction}
            />
            {index < data?.transactions.length - 1 && (
              <Divider className={style.hs__divider} />
            )}
          </Fragment>
        ))}
        {data && data.total_data > limit && (
          <div className={style.hs__pagination}>
            <Pagination
              total={data?.total_data}
              pageSize={limit}
              showSizeChanger={false}
              onChange={onChange}
              current={page}
            />
          </div>
        )}
        {!Boolean(data?.total_data) && (
          <ItemNotFound
            title="You dont have any wallet history."
            body="You can start making transactions."
          />
        )}
      </div>
    </Skeleton>
  );
};

export default HistorySection;
