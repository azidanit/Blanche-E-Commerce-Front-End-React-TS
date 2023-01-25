import React, { useEffect, useState } from 'react';
import ProductVariantItem from './ProductVariantItem';
import style from './index.module.scss';
import useProduct from '../../../../../hooks/useProduct';
import { useAppDispatch } from '../../../../../app/hooks';
import {
  setActiveImage,
  setPrice,
  setStock,
  setVariant,
} from '../../../../../app/features/product/productSlice';

const ProductVariant: React.FC = () => {
  const { product } = useProduct();

  const [optionValue, setOptionValues] = useState<number[]>([]);
  const length = product?.variants?.variant_options?.[0]?.type.length || 0;
  const id = optionValue[1] + optionValue[0] * length;
  const dispatch = useAppDispatch();

  const handleChange = (index: number, value: number) => {
    const newOptionValue = [...optionValue];
    newOptionValue[index] = value;
    setOptionValues(newOptionValue);
  };

  useEffect(() => {
    if (optionValue.length === product?.variants?.variant_options.length) {
      dispatch(setVariant(product?.variants?.variant_items[id]));
      dispatch(setPrice(product?.variants?.variant_items[id].price));
      dispatch(setActiveImage(product?.variants?.variant_items[id].image));
      dispatch(setStock(product?.variants?.variant_items[id].stock));
    }
  }, [optionValue]);

  return (
    <div className={style.product__variant}>
      {product?.variants?.variant_options.map((item, index) => (
        <ProductVariantItem
          key={item.name}
          item={item}
          index={index}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};

export default ProductVariant;
