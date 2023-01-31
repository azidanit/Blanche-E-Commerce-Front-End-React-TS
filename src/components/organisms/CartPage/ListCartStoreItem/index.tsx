import React from 'react';
import CartStoreItem from '../CartStoreItem';
import style from './index.module.scss';

const ListCartStoreItem: React.FC = () => {
  return (
    <div className={style.list__cart__store__item}>
      <CartStoreItem />
      <CartStoreItem />
    </div>
  );
};

export default ListCartStoreItem;
