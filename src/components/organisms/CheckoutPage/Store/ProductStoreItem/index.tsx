import { Divider, notification } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import React, { useState } from 'react';
import { toRupiah } from '../../../../../helpers/toRupiah';
import { ICheckoutResponse, IOrder } from '../../../../../helpers/types';
import { Avatar, Card } from '../../../../atoms';
import Delivery from '../Delivery';
import ProductItem from '../ProductItem';
import VoucherStore from '../VoucherStore';
import style from './index.module.scss';

interface ProductStoreProps {
  order: IOrder;
}
const ProductStoreItem: React.FC<ProductStoreProps> = ({ order }) => {
  return (
    <Card className={style.product__store__item}>
      <div className={style.product__store__item__header}>
        <Avatar src={order.merchant.merchant_image} size={40} />
        <h6>{order.merchant.merchant_name} </h6>
      </div>
      <div className={style.product__store__item__body}>
        {order.items.map((item) => (
          <ProductItem item={item} key={item.product_id} />
        ))}
      </div>
      <div className={style.product__store__item__button}>
        <VoucherStore />
        <Delivery />
      </div>
      <div className={style.product__store__item__desc}>
        <ul className={style.product__store__item__desc__list}>
          <li className={style.product__store__item__desc__item}>
            <p>Subtotal</p>
            <p>{toRupiah(order.sub_total)}</p>
          </li>
          <li className={style.product__store__item__desc__item}>
            <p>Shipping</p>
            <p>+{toRupiah(order.delivery_cost)}</p>
          </li>
          <li className={style.product__store__item__desc__item}>
            <p>Discount</p>
            <p>-{toRupiah(order.discount)}</p>
          </li>
        </ul>
      </div>
      <Divider style={{ margin: 0 }} />
      <div className={style.product__store__item__subtotal}>
        <p>Subtotal</p>
        <p>{toRupiah(order.total)}</p>
      </div>
    </Card>
  );
};

export default ProductStoreItem;
