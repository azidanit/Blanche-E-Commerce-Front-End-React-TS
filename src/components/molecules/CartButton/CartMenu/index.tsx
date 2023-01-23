import React from 'react';
import { Card } from '../../../atoms';
import { ICartItem } from '../../interface';
import CartItem from '../CartItem';
import style from './index.module.scss';

interface CardMenuProps {
  items: ICartItem[];
}

const CardMenu: React.FC<CardMenuProps> = ({ items }) => {
  return (
    <Card className={style.cart__menu}>
      <div className={style.cart__menu__list}>
        {items.map((item, index) => (
          <CartItem item={item} key={`product-${index}`} />
        ))}
      </div>
    </Card>
  );
};

export default CardMenu;
