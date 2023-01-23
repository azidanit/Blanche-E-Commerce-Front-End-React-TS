import React from 'react';
import { Image } from '../../../atoms';
import { ICartItem } from '../../interface';
import style from './index.module.scss';

interface CartItemProps {
  item: ICartItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div className={style.cart__item}>
      <Image src={item.imgUrl} alt={item.title} />
      <div>
        <p>{item.title}</p>
        <span>{item.quantity} items</span>
      </div>
      <p>{item.price}</p>
    </div>
  );
};

export default CartItem;
