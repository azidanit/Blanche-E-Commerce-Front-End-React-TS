import React from 'react';
import style from './index.module.scss';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { Badge, Button, Tag } from '../../../atoms';
import {
  IGetWalletDetailsResponse,
  ISealabsPayAccounts,
} from '../../../../helpers/types';
import { toRupiah } from '../../../../helpers/toRupiah';
import classNames from 'classnames';

interface CardWalletProps {
  wallet: IGetWalletDetailsResponse | undefined;
  defaultPayment?: IGetWalletDetailsResponse | ISealabsPayAccounts;
}

const CardWallet: React.FC<CardWalletProps> = ({ wallet, defaultPayment }) => {
  const classProps = classNames(
    style.card__payment,
    defaultPayment === wallet ? style.card__payment__active : '',
  );
  return (
    <div className={classProps}>
      <div className={style.card__payment__icon}>
        <MdAccountBalanceWallet />
      </div>
      <div className={style.card__payment__content}>
        <h6>Wallet</h6>
        <p>
          {wallet
            ? toRupiah(wallet.balance)
            : 'You havent activate your wallet!'}
        </p>
      </div>
      <div className={style.card__payment__wallet}>
        {wallet && wallet.balance === 0 && (
          <Button type="primary">Topup</Button>
        )}

        {!wallet && <Button type="primary">Activate Wallet</Button>}
      </div>
    </div>
  );
};

export default CardWallet;
