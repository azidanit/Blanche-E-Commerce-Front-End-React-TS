import React from 'react';
import ProductVariantItem from './ProductVariantItem';
import style from './index.module.scss';
const variant_options = [
  {
    name: 'color',
    type: ['red', 'black'],
  },
  {
    name: 'size',
    type: ['S', 'M'],
  },
];
const ProductVariant: React.FC = () => {
  return (
    <div className={style.product__variant}>
      <ProductVariantItem />
    </div>
  );
};

export default ProductVariant;
