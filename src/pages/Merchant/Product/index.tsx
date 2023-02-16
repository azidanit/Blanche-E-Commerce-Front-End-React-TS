import React from 'react';
import { ProductPage } from '../../../components';
import style from './index.module.scss';

const Product: React.FC = () => {
  return (
    <div className={style.product}>
      <h1 className={style.product__title}>Add Product</h1>
      <ProductPage />
    </div>
  );
};

export default Product;
