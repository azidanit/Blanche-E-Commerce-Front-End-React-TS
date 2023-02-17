import React from 'react';
import { ItemNotFound, Pagination } from '../../..';
import { useGetTransactionsQuery } from '../../../../app/features/transactions/transactionsApiSlice';
import { useAppSelector } from '../../../../app/hooks';
import { Card } from '../../../atoms';
import CardTransaction from '../CardTransaction';
import FilterStatus from '../FilterStatus';
import style from './index.module.scss';

const limit = 10;

const TransactionList: React.FC = () => {
  const params = useAppSelector((state) => state.params);
  const { data } = useGetTransactionsQuery({ ...params.search, limit });

  return (
    <Card className={style.tl}>
      <FilterStatus />
      {data && data.transactions.length ? (
        <div className={style.tl__list}>
          {data.transactions.map((item, index) => (
            <CardTransaction transaction={item} key={index} />
          ))}
        </div>
      ) : (
        <ItemNotFound
          className={style.tl__notfound}
          title="Sorry, your transaction is not found"
          body="Try to change the filter or make new transaction."
        />
      )}
      {data && data.total_data > limit && Boolean(data.transactions.length) && (
        <div className={style.tl__pagination}>
          <Pagination
            total={data.total_data}
            pageSize={limit}
            showSizeChanger={false}
          />
        </div>
      )}
    </Card>
  );
};

export default TransactionList;
