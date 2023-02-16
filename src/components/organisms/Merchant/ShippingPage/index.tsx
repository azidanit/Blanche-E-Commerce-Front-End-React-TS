import React from 'react';
import { Card } from '../../../atoms';
import style from './index.module.scss';
import ShippingList from './ShippingList';

const ShippingPage: React.FC = () => {
  return (
    <Card className={style.sp}>
      <h2 className={style.sp__title}>Shipping Options</h2>
      <p className={style.sp__info}>
        Decide which shipping courier is available for the buyer.
      </p>
      <ShippingList />
    </Card>
  );
};

export default ShippingPage;
