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

const CartSummaryMobile: React.FC = () => {
  const isLoading = false;
  return (
    <div className={style.cart__summary}>
      <Skeleton loading={false}>
        <div className={style.cart__summary__description}>
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
