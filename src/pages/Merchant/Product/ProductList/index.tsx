import React from 'react';
import { ProductListPage } from '../../../../components';
import style from './index.module.scss';

const ProductList: React.FC = () => {
  return (
    <div className={style.pl}>
      <ProductListPage />
    </div>
  );
};

export default ProductList;
