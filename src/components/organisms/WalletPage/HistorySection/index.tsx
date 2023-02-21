import { Divider } from 'antd';
import React from 'react';
import { useGetWalletHistoryQuery } from '../../../../app/features/wallet/walletApiSlice';
import style from './index.module.scss';
import TransactionItem from './TransactionItem';

const HistorySection: React.FC = () => {
  const { data } = useGetWalletHistoryQuery();
  console.log(data);
  return (
    <div className={style.hs}>
      <TransactionItem />
      <Divider />
      <TransactionItem />
    </div>
  );
};

export default HistorySection;
