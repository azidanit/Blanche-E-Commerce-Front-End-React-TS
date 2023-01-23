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
    <div
      className={style.cart__button}
      onMouseEnter={() => {
        setShowDetails(true);
      }}
      onMouseLeave={() => {
        // setShowDetails(false);
      }}
    >
      <div>
        <ShoppingFilled className={style.cart__button__icon} />
        <span className={style.cart__button__total}>{total}</span>
      </div>
      {showDetails && <CartMenu items={items} />}
    </div>
  );
};

export default CartButton;
