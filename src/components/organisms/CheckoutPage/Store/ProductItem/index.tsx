import { valueType } from 'antd/es/statistic/utils';
import React from 'react';
import style from './index.module.scss';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Image, StrikethroughText } from '../../../../atoms';
import { textTruncate } from '../../../../../helpers/textTruncate';
import { toRupiah } from '../../../../../helpers/toRupiah';
import { IOrderItem } from '../../../../../helpers/types';

interface ProductItemProps {
  item: IOrderItem;
}

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  return (
    <div className={style.product__item}>
      <div className={style.product__item__details__item}>
        <div className={style.product__item__details__item__desc}>
          <Image
            src={item.image}
            alt="cart-img"
            className={style.product__item__img}
          />
          <div className={style.desc}>
            <p>{textTruncate(item.name, 60)}</p>
            <p>
              Variant : <span>{item.variant_name}</span>
            </p>
            <div className={style.product__item__details__item__qty}>
              <p>{item.quantity}pcs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.product__item__details__info}>
        <div className={style.product__item__details__info__price}>
          <p className={style.product__item__price}>
            {toRupiah(Number(item.real_price))}
          </p>
          {item.discount_price !== 0 &&
            item.discount_price !== item.real_price && (
              <StrikethroughText
                className={style.product__item__disc__price}
                text={toRupiah(Number(item.discount_price))}
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
