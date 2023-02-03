import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { ICart } from '../../../../helpers/types';
import CartStoreItem from '../CartStoreItem';
import style from './index.module.scss';

interface ListCartStoreItemProps {
  carts: ICart[] | undefined;
}

const ListCartStoreItem: React.FC<ListCartStoreItemProps> = ({ carts }) => {
  return (
    <div className={style.list__cart__store__item}>
      {carts?.map((cart: ICart) => {
        return <CartStoreItem key={cart.merchant_id} cart={cart} />;
      })}
    </div>
  );
};

export default ListCartStoreItem;
