import React, { useState } from 'react';
import { ShoppingFilled } from '@ant-design/icons';
import style from './index.module.scss';
import CartMenu from './CartMenu';
import { Badge } from '../../atoms';
import { ICartItem } from '../../../helpers/types';

interface CartButtonProps {
  total: number;
  items: ICartItem[];
}

const CartButton: React.FC<CartButtonProps> = ({ total, items }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setShowDetails(true);
      }}
      onMouseLeave={() => {
        setShowDetails(false);
      }}
    >
      <div className={style.cart__button}>
        <div className={style.cart__button__container}>
          {' '}
          <Badge className={style.cart__button__total} count={total}>
            <ShoppingFilled className={style.cart__button__icon} />
          </Badge>
        </div>
      </div>
      {showDetails && <CartMenu items={items} total={total} />}
    </div>
  );
};

export default CartButton;
