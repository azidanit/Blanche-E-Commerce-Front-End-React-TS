import { DollarOutlined } from '@ant-design/icons';
import { Divider, Skeleton, Space } from 'antd';
import { valueType } from 'antd/es/statistic/utils';
import React, { useEffect, useState } from 'react';
import { toRupiah } from '../../../../helpers/toRupiah';
import { ICartItem } from '../../../../helpers/types';
import useProduct from '../../../../hooks/useProduct';
import { Button, Card } from '../../../atoms';
import { CartItem, InputQuantity } from '../../../molecules';
import style from './index.module.scss';

const CartSummary: React.FC = () => {
  const isLoading = false;
  return (
    <Card className={style.cart__summary}>
      <Skeleton loading={false}>
        <div className={style.cart__summary__header}>
          <Button type="primary" size="large" icon block ghost>
            <DollarOutlined /> Voucher
          </Button>
        </div>
        <Divider />
        <div className={style.cart__summary__description}>
          <p>Ringkasan Belanja</p>
          <div className={style.cart__summary__description__total}>
            <p>Total Harga (26 barang)</p>
            <p>{toRupiah(106200)}</p>
          </div>
          <Divider />
          <div className={style.cart__summary__description__total}>
            <p>Total Harga</p>
            <p>{toRupiah(106200)}</p>
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
