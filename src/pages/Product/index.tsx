import React from 'react';
import { ProductDetail, ProductImage } from '../../components';

const Product = (): JSX.Element => {
  return (
    <div>
      <ProductDetail />
      <ProductImage />
    </div>
  );
};

export default Product;
