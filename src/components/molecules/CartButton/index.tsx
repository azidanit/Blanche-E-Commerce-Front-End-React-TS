import React, { useState } from 'react';
import { ShoppingFilled } from '@ant-design/icons';
import { ICartItem } from '../interface';
import style from './index.module.scss';
import CartMenu from './CartMenu';

interface CartButtonProps {
  total: number;
  items: ICartItem[];
}

const CartButton: React.FC<CartButtonProps> = ({ total, items }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <div className={style.cart__button}>
        <div
          className={style.cart__button__container}
          onMouseEnter={() => {
            setShowDetails(true);
          }}
          onMouseLeave={() => {
            setShowDetails(false);
          }}
        >
          <ShoppingFilled className={style.cart__button__icon} />
          <span className={style.cart__button__total}>{total}</span>
        </div>
      </div>
      {showDetails && (
        <CartMenu
          items={items}
          total={total}
          onMouseEnter={() => {
            setShowDetails(true);
          }}
          onMouseLeave={() => {
            setShowDetails(false);
          }}
        />
      )}
    </>
  );
};

export default CartButton;
