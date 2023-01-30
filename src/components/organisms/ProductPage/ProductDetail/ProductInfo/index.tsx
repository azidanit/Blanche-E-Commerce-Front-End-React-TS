import { Skeleton } from 'antd';
import React from 'react';
import { IProductDetail } from '../../../../../helpers/types';
import useProduct from '../../../../../hooks/useProduct';
import { Rate } from '../../../../atoms';
import style from './index.module.scss';
import ProductPrice from './ProductPrice';

const ProductInfo: React.FC = () => {
  const { product, variant, isLoading } = useProduct();

  return (
    <div className={style.product__info}>
      <Skeleton loading={isLoading}>
        <h3>{product?.title}</h3>
        <div className={style.product__info__rating}>
          <span>Sold : {product?.unit_sold}</span>
          <Rate value={product?.rating?.avg_rating} disabled /> (
          {product?.rating?.count})
        </div>
        <ProductPrice />
      </Skeleton>
    </div>
  );
};

export default ProductInfo;
