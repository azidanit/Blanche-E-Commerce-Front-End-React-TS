import { DollarOutlined } from '@ant-design/icons';
import { Divider, Skeleton, Space } from 'antd';
import { valueType } from 'antd/es/statistic/utils';
import React, { useEffect, useState } from 'react';
import { toRupiah } from '../../../../helpers/toRupiah';
import { Button, Card } from '../../../atoms';
import { CartSummaryProps } from '../CartSummary';
import style from './index.module.scss';

const CartSummaryMobile: React.FC<CartSummaryProps> = ({ total, quantity }) => {
  const isLoading = false;
  return (
    <div className={style.cart__summary}>
      <Skeleton loading={false}>
        <div className={style.cart__summary__description}>
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
            <Button type="primary" size="middle" block>
              Checkout
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSummaryMobile;
