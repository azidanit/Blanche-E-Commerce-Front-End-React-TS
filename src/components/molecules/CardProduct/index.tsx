import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toRupiah } from '../../../helpers/toRupiah';
import { IProduct } from '../../../helpers/types';
import { Card, Image, StrikethroughText } from '../../atoms';
import style from './index.module.scss';
import { StarFilled } from '@ant-design/icons';

interface CardProductProps {
  product: IProduct;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const [isDiscountPrice, setIsDiscountPrice] = useState(false);
  const [isRangePrice, setIsRangePrice] = useState(false);

  useEffect(() => {
    const isDiscount = !(
      product.min_real_price === product.min_discount_price &&
      product.max_real_price === product.max_discount_price
    );
    const isRange =
      product.min_real_price !== product.max_real_price &&
      product.min_discount_price !== product.max_discount_price;
    setIsDiscountPrice(isDiscount);
    setIsRangePrice(isRange);
  }, [product]);
  return (
    <Card className={style.card__product}>
      <Link to={`${product.slug}`}>
        <Image
          src={product.thumbnail_img}
          alt={product.title}
          className={style.card__product__image}
        />
        <div className={style.card__product__link}>
          <h3 className={style.card__product__title}>{product.title}</h3>
          <div className={style.card__product__price}>
            <div className={style.card__product__price__real}>
              {isRangePrice ? (
                <>
                  <span>{`${toRupiah(product.min_real_price)}`}</span> -{' '}
                  <span>{`${toRupiah(product.max_real_price)}`}</span>
                </>
              ) : (
                <span>{`${toRupiah(Number(product.min_real_price))}`}</span>
              )}
            </div>
            {isDiscountPrice && (
              <div className={style.card__product__price__disc}>
                {isRangePrice ? (
                  <>
                    <StrikethroughText
                      text={`${toRupiah(product.min_discount_price)} ${toRupiah(
                        product.max_discount_price,
                      )}`}
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
          <p className={style.card__product__location}>{product.seller_city}</p>
          <div className={style.card__product__details}>
            <div className={style.card__product__rating}>
              <StarFilled className={style.card__product__rating__star} />
              <span className={style.card__product__rating__avg}>
                {product.avg_rating}
              </span>
            </div>
            |
            <p className={style.card__product__sale}>
              {product.num_of_sale} sold
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default CardProduct;
