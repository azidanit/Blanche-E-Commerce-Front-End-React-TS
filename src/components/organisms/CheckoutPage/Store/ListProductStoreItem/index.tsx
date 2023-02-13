import React from 'react';

import ProductStoreItem from '../ProductStoreItem';
import style from './index.module.scss';

const ListProductStore: React.FC = () => {
  return (
    <div className={style.list__product__store__item}>
      <ProductStoreItem />
      <ProductStoreItem />
    </div>
  );
};

export default ListProductStore;
