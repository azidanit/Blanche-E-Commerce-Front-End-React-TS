import React from 'react';
import { IProduct } from '../../../../../helpers/types';
import { Badge } from '../../../../atoms';
import StrikethroughText from '../../../../StrikethroughText';
import style from './index.module.scss';

interface ProductPriceProps {
  data: IProduct;
  isDiscount: boolean;
  isRangePrice: boolean;
  isRangePriceDisc: boolean;
}

const ProductPrice: React.FC<ProductPriceProps> = ({
  data,
  isDiscount,
  isRangePrice,
  isRangePriceDisc,
}) => {
  return (
    <div className={style.product__info__price}>
      {isDiscount && (
        <div className={style.product__info__price__disc}>
          {isRangePriceDisc ? (
            <>
              <StrikethroughText text="Rp 80.000" /> -
              <StrikethroughText text="Rp 80.000" />
            </>
          ) : (
            <StrikethroughText text="Rp 80.000" />
          )}
        </div>
      )}
      <div className={style.product__info__price__real}>
        {isRangePrice ? (
          <>
            <span>{data?.max_real_price}</span> - <span>R</span>
          </>
        ) : (
          <span>Rp 80.000</span>
        )}
      </div>
    </div>
  );
};

export default ProductPrice;
