import React from 'react';
<<<<<<< HEAD
import { textTruncate } from '../../../../helpers/textTruncate';
import { toRupiah } from '../../../../helpers/toRupiah';
=======
>>>>>>> 919109b (feat: layouting auth layout)
import { Image } from '../../../atoms';
import { ICartItem } from '../../interface';
import style from './index.module.scss';

interface CartItemProps {
  item: ICartItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div className={style.cart__item}>
<<<<<<< HEAD
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
=======
      <Image src={item.imgUrl} alt={item.title} />
      <div>
        <p>{item.title}</p>
        <span>{item.quantity} items</span>
      </div>
      <p>{item.price}</p>
>>>>>>> 919109b (feat: layouting auth layout)
    </div>
  );
};

export default CartItem;
