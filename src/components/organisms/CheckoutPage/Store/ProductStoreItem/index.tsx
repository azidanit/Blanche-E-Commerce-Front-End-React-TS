import { Divider, notification } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import React, { useState } from 'react';
import { Avatar, Card } from '../../../../atoms';
import Delivery from '../Delivery';
import ProductItem from '../ProductItem';
import VoucherStore from '../VoucherStore';
import style from './index.module.scss';

const ProductStoreItem: React.FC = () => {
  return (
    <Card className={style.product__store__item}>
      <div className={style.product__store__item__header}>
        <Avatar
          src="https://www.soco.id/cdn-cgi/image/w=96,format=auto,dpr=1.45/https://images.soco.id/8c965d4d-c284-4269-bd61-24865dfe5664-18407960361-1629981551709.png"
          size={40}
        />
        <h6>Zogojogo</h6>
      </div>
      <div className={style.product__store__item__body}>
        <ProductItem />
      </div>
      <div className={style.product__store__item__button}>
        <VoucherStore />
        <Delivery />
      </div>
      <div className={style.product__store__item__desc}>
        <ul className={style.product__store__item__desc__list}>
          <li className={style.product__store__item__desc__item}>
            <p>Subtotal</p>
            <p>Rp. 50000</p>
          </li>
          <li className={style.product__store__item__desc__item}>
            <p>Shipping</p>
            <p>+ Rp. 50000</p>
          </li>
          <li className={style.product__store__item__desc__item}>
            <p>Discount</p>
            <p>- Rp. 50000</p>
          </li>
        </ul>
      </div>
      <Divider style={{ margin: 0 }} />
      <div className={style.product__store__item__subtotal}>
        <p>Subtotal</p>
        <p>Rp. 50000</p>
      </div>
    </Card>
  );
};

export default ProductStoreItem;
