import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../../atoms';
import { ComponentBasedOnStatusProps } from './ComponentOnCanceled';
import style from '../index.module.scss';

const ComponentOnDelivery: React.FC<ComponentBasedOnStatusProps> = ({
  transaction,
}) => {
  return (
    <div className={style.card__order__actions}>
      <Link className={style.card__order__actions__link} to="/transactions">
        Detail Order
      </Link>
      <div className={style.card__order__actions__btn}>
        <Button type="primary" size="large" ghost disabled>
          Order on Delivery
        </Button>
      </div>
    </div>
  );
};

export default ComponentOnDelivery;
