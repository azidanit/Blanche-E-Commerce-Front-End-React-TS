import React from 'react';
import { dateToDayMonthStringYear } from '../../../../../helpers/parseDate';
import { toRupiah } from '../../../../../helpers/toRupiah';
import style from './index.module.scss';

const TransactionItem: React.FC = () => {
  return (
    <div className={style.ti}>
      <div className={style.ti__header}>
        <p className={style.ti__header__title}>Biaya Layanan</p>
        <p className={style.ti__header__date}>
          {dateToDayMonthStringYear(new Date(), ' ')}
        </p>
      </div>
      <p className={style.ti__notes}>
        Pemotongan Biaya Layanan Power Merchant Pro -
        INV/20230218/MPL/3056202657
      </p>
      <p className={style.ti__amount}>+{toRupiah(50000)}</p>
    </div>
  );
};

export default TransactionItem;
