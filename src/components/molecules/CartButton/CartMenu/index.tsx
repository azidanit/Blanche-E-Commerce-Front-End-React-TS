import React from 'react';
import { Card } from '../../../atoms';
import { ICartItem } from '../../interface';
import CartItem from '../CartItem';
import style from './index.module.scss';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

type CardMenuProps = {
  items: ICartItem[];
  total: number;
} & React.HTMLAttributes<HTMLDivElement>;

const CardMenu: React.FC<CardMenuProps> = ({ items, total, ...props }) => {
  return (
    <Card className={style.cart__menu} {...props}>
=======

interface CardMenuProps {
  items: ICartItem[];
}

const CardMenu: React.FC<CardMenuProps> = ({ items }) => {
  return (
    <Card className={style.cart__menu}>
>>>>>>> 919109b (feat: layouting auth layout)
      <div className={style.cart__menu__list}>
        {items.map((item, index) => (
          <CartItem item={item} key={`product-${index}`} />
        ))}
      </div>
<<<<<<< HEAD
      <div className={style.cart__menu__action}>
        <p className={style.cart__menu__action__total}>
          Total:{' '}
          <span className={style.cart__menu__action__number}>
            {total} items
          </span>
        </p>
        <Link to="/cart" className={style.cart__menu__action__button}>
          Go to cart page
        </Link>
      </div>
=======
>>>>>>> 919109b (feat: layouting auth layout)
    </Card>
  );
};

export default CardMenu;
