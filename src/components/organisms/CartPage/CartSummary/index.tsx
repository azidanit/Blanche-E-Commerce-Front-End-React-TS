import { Divider, Skeleton, Space } from 'antd';
import React from 'react';
import { toRupiah } from '../../../../helpers/toRupiah';
import { Button, Card } from '../../../atoms';
import style from './index.module.scss';

export interface CartSummaryProps {
  quantity: number | undefined;
  total: number | undefined;
}

const CartSummary: React.FC<CartSummaryProps> = ({ quantity, total }) => {
  const isLoading = false;
  return (
    <Card className={style.cart__summary}>
      <Skeleton loading={false}>
        <div className={style.cart__summary__description}>
          <p>Ringkasan Belanja</p>
          <div className={style.cart__summary__description__total}>
            <p>Total Harga ({quantity} barang)</p>
            <p>{toRupiah(total)}</p>
          </div>
          <Divider />
          <div className={style.cart__summary__description__total}>
            <p>Total Harga</p>
            <p>{toRupiah(total)}</p>
          </div>
        </div>
      </Skeleton>
      <div className={style.cart__summary__button}>
        {isLoading ? (
          <>
            <Skeleton.Button block />
          </>
        ) : (
          <>
            <Button type="primary" size="large" block>
              Checkout
            </Button>
          </>
        )}
      </div>
    </Card>
  );
};

export default CartSummary;
