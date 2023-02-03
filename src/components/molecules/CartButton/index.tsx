/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { BuildTwoTone, ShoppingFilled } from '@ant-design/icons';
import style from './index.module.scss';
import CartMenu from './CartMenu';
import { Badge } from '../../atoms';
import { ICartItemEx } from '../../../helpers/types';

interface CartButtonProps {
  total: number;
  items: ICartItemEx[];
  onClick: () => void;
}



const CartButton: React.FC<CartButtonProps> = ({ total, items, onClick }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setShowDetails(true);
      }}
      onMouseLeave={() => {
        setShowDetails(false);
      }}
      onClick={onClick}
      className={style.cart}
    >
      <div className={style.cart__button}>
        <div className={style.cart__button__container}>
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
