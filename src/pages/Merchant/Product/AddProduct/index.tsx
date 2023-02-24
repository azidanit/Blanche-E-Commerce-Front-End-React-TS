import React from 'react';
import { useParams } from 'react-router';
import { ProductPage } from '../../../../components';
import style from './index.module.scss';

const AddProduct: React.FC = () => {
  const params = useParams();

  return (
    <div className={style.product}>
      <h1 className={style.product__title}>
        {params.id ? 'Edit' : 'Add'} Product
      </h1>
      <ProductPage />
    </div>
  );
};

export default AddProduct;
