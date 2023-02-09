import React from 'react';
import { useGetWalletDetailsQuery } from '../../../../app/features/wallet/walletApiSlice';
import { Card } from '../../../atoms';
import style from './index.module.scss';
import ActiveWallet from '../ActivateWallet';
import WalletInfo from '../WalletInfo';

const CardWallet: React.FC = () => {
  const { data, isError, isLoading } = useGetWalletDetailsQuery();

  return (
    <Card className={style.card__wallet}>
      {isError && <ActiveWallet />}
      {data && <WalletInfo data={data} />}
    </Card>
  );
};

export default CardWallet;
