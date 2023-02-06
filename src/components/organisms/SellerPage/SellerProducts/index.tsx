import { Divider, Skeleton } from 'antd';
import React from 'react';
import ListProducts from '../ListProducts';
import MostPurchased from '../MostPurchased';
import style from './index.module.scss';

const SellerProducts: React.FC = () => {
  return (
    <Skeleton loading={false}>
      <MostPurchased />
      <ListProducts />
    </Skeleton>
  );
};

export default SellerProducts;
