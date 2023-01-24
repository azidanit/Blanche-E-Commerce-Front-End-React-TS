import React from 'react';
import { textTruncate } from '../../../../helpers/textTruncate';
import { toRupiah } from '../../../../helpers/toRupiah';
import { Image } from '../../../atoms';
import { ICartItem } from '../../interface';
import style from './index.module.scss';

interface CartItemProps {
  item: ICartItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div className={style.cart__item}>
      <Image
        src={item.imgUrl}
        alt={item.title}
        className={style.cart__item__image}
      />
      <div className={style.cart__item__details}>
        <p className={style.cart__item__title}>
          {textTruncate(item.title, 31)}
        </p>
        <span className={style.cart__item__quantity}>
          {item.quantity} items
        </span>
      </div>
      <p className={style.cart__item__price}>{toRupiah(item.price)}</p>
    </div>
  );
};

export default CartItem;
