import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../atoms';
import style from './index.module.scss';
import ProductTable from './ProductTable';

const ProductList: React.FC = () => {
  const navigate = useNavigate();

  const redirectToProduct = () => {
    navigate('create');
  };

  return (
    <div className={style.plp}>
      <div className={style.plp__header}>
        <h1 className={style.plp__header__title}>Product List</h1>
        <Button
          className={style.plp__header__button}
          type="primary"
          onClick={redirectToProduct}
          icon={<PlusOutlined />}
        >
          Add Product
        </Button>
      </div>
      <ProductTable />
    </div>
  );
};

export default ProductList;
