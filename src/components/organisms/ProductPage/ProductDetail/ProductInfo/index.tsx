import React from 'react';
import { IProductDetail } from '../../../../../helpers/types';
import useProduct from '../../../../../hooks/useProduct';
import { Rate } from '../../../../atoms';
import style from './index.module.scss';
import ProductPrice from './ProductPrice';

const ProductInfo: React.FC = () => {
  const { product } = useProduct();

  return (
    <div className={style.product__info}>
      <h3>{product?.title}</h3>
      <div className={style.product__info__rating}>
        <span>Sold : {product?.unit_sold}</span>
        <Rate value={product?.avg_rating} disabled />
      </div>
      <ProductPrice />
    </div>
  );
};

export default ProductInfo;
