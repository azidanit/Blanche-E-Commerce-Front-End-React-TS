import React from 'react';
import { IProduct } from '../../../../../helpers/types';
import { Rate } from '../../../../atoms';
import style from './index.module.scss';
import ProductPrice from './ProductPrice';

interface ProductInfoProps {
  data: IProduct;
  isDiscount: boolean;
  isRangePrice: boolean;
  isRangePriceDisc: boolean;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  data,
  isDiscount,
  isRangePrice,
  isRangePriceDisc,
}) => {
  return (
    <div className={style.product__info}>
      <h3>{data?.title}</h3>
      <div className={style.product__info__rating}>
        <span>Sold : {data?.unit_sold}</span>
        <Rate value={data?.avg_rating} disabled />
      </div>
      <ProductPrice
        data={data}
        isDiscount={isDiscount}
        isRangePrice={isRangePrice}
        isRangePriceDisc={isRangePriceDisc}
      />
    </div>
  );
};

export default ProductInfo;
