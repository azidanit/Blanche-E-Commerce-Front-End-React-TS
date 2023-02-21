import React from 'react';
import { IMerchantTransaction } from '../../../../../../helpers/types/merchant/merchant-order.interface';
import { Button } from '../../../../../atoms';
import style from '../index.module.scss';

export interface ComponentBasedOnStatusProps {
  transaction: IMerchantTransaction;
}

const ComponentOnCanceled: React.FC<ComponentBasedOnStatusProps> = ({
  transaction,
}) => {
  return (
    <div className={style.card__order__actions__btn}>
      <Button type="primary" size="large" danger disabled>
        Canceled by seller
      </Button>
    </div>
  );
};

export default ComponentOnCanceled;
