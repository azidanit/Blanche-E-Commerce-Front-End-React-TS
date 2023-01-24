import React from 'react';
import { Rate } from '../../../../atoms';
import style from './index.module.scss';
import ProductPrice from './ProductPrice';

const ProductInfo: React.FC = () => {
  return (
    <div className={style.product__info}>
      <h3>
        Kaos cowok / baju kaos / kaos cowok / kaos distro pria / kaos pendek -
        Putih
      </h3>
      <div className={style.product__info__rating}>
        <span>Sold : 100</span>
        <Rate value={2} disabled />
        <span>2 Review</span>
      </div>
      <ProductPrice />
    </div>
  );
};

export default ProductInfo;
