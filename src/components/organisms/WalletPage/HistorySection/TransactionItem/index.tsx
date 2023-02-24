import React from 'react';
import { Link } from 'react-router-dom';
import { dateToDayMonthStringYear } from '../../../../../helpers/parseDate';
import { toRupiah } from '../../../../../helpers/toRupiah';
import { ITransactionOverview } from '../../../../../helpers/types';
import style from './index.module.scss';

interface TransactionItemProps {
  transaction: ITransactionOverview;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const invoices = transaction.notes.match(/\[(.*?)\]/);

  return (
    <div className={style.ti}>
      <div className={style.ti__header}>
        <p className={style.ti__header__title}>{transaction.title}</p>
        <p className={style.ti__header__date}>
          {dateToDayMonthStringYear(new Date(transaction.issued_at), ' ')}
        </p>
      </div>
      <p className={style.ti__notes}>
        {invoices ? (
          <>
            Pay Transaction for{' '}
            {invoices[1].split(',').map((invoice, index) => (
              <Link
                key={invoice}
                className={style.ti__invoice}
                to={`/transactions/${invoice}`}
              >
                {invoice}
                {index < invoices[1].split(',').length - 1 && ', '}
              </Link>
            ))}
          </>
        ) : (
          transaction.notes
        )}
      </p>
      <p
        className={`${style.ti__amount} ${
          transaction.wallet_transaction_type.code === 'DR'
            ? style.ti__amount__red
            : style.ti__amount__green
        }`}
      >
        {toRupiah(transaction.amount)}
      </p>
    </div>
  );
};

export default TransactionItem;
