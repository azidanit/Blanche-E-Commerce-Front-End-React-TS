import React from 'react';
import ProductVariantItem from './ProductVariantItem';
import style from './index.module.scss';
import useProduct from '../../../../../hooks/useProduct';

const ProductVariant: React.FC = () => {
  const { product } = useProduct();
  return (
    <div className={style.product__variant}>
      {product?.variants?.variant_options.map((item) => (
        <ProductVariantItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default ProductVariant;
