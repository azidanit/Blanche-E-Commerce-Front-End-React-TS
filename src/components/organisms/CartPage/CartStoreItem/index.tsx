import { Button, Divider } from 'antd';
import React from 'react';
import { Card } from '../../../atoms';
import CartItem from '../CartItem';
import style from './index.module.scss';

const CartStoreItem: React.FC = () => {
  return (
    <Card className={style.cart__store__item}>
      <div className={style.cart__store__item__header}>
        {/* <Checkbo /> */}
        <h6>Tokokotoku</h6>
      </div>
      <Divider />
      <div className={style.cart__store__item__body}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className={style.cart__store__item__bottom}></div>
    </Card>
  );
};

export default CartStoreItem;
