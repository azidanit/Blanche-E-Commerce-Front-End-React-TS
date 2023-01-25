import React from 'react';
import { toRupiah } from '../../../../../helpers/toRupiah';
import useProduct from '../../../../../hooks/useProduct';
import StrikethroughText from '../../../../StrikethroughText';
import style from './index.module.scss';

const ProductPrice: React.FC = () => {
  const { product, isDiscount, isRangePrice, isRangePriceDiscount, price } =
    useProduct();

  return (
    <div className={style.product__info__price}>
      <div className={style.product__info__price__real}>
        {isRangePrice ? (
          <>
            <span>{`${toRupiah(product?.min_real_price)}`}</span> -{' '}
            <span>{`${toRupiah(product?.max_real_price)}`}</span>
          </>
        ) : (
          <span>{`${toRupiah(price as number)}`}</span>
        )}
      </div>
      {isDiscount && (
        <div className={style.product__info__price__disc}>
          {isRangePriceDiscount ? (
            <>
              <StrikethroughText
                text={`${toRupiah(product?.min_discount_price)}`}
              />
              -
              <StrikethroughText
                text={`${toRupiah(product?.max_discount_price)}`}
              />
            </>
          ) : (
            <StrikethroughText
              text={`${toRupiah(product?.max_discount_price)}`}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProductPrice;
