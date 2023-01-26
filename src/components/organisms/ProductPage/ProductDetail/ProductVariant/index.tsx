import React, { useEffect, useState } from 'react';
import ProductVariantItem from './ProductVariantItem';
import style from './index.module.scss';
import useProduct from '../../../../../hooks/useProduct';
import { useAppDispatch } from '../../../../../app/hooks';
import {
  setActiveImage,
  setImages,
  setPrice,
  setStock,
  setVariant,
} from '../../../../../app/features/product/productSlice';
import { useGetProductVariantBySlugQuery } from '../../../../../app/features/product/productApiSlice';
import { useParams } from 'react-router-dom';

const ProductVariant: React.FC = () => {
  const { store, slug } = useParams();
  const { images } = useProduct();

  const {
    data: variants,
    error,
    isLoading,
  } = useGetProductVariantBySlugQuery({
    store: store as string,
    slug: slug as string,
  });

  const [optionValue, setOptionValues] = useState<number[]>([0, 0]);
  const length = variants?.variant_options?.[0]?.type.length || 0;
  const id = optionValue[1] + optionValue[0] * length;
  const dispatch = useAppDispatch();

  const handleChange = (index: number, value: number) => {
    const newOptionValue = [...optionValue];
    newOptionValue[index] = value;
    setOptionValues(newOptionValue);
  };

  useEffect(() => {
    const imgs = variants?.variant_items.map((item) => item.image);

    dispatch(setImages(imgs));
  }, []);

  useEffect(() => {
    if (optionValue.length === variants?.variant_options.length) {
      dispatch(setVariant(variants?.variant_items[id]));
      dispatch(setPrice(variants?.variant_items[id].price));
      console.log(variants?.variant_items[id].image);

      dispatch(setActiveImage(variants?.variant_items[id].image));
      dispatch(setStock(variants?.variant_items[id].stock));
    }
  }, [optionValue]);

  return (
    <div className={style.product__variant}>
      {variants?.variant_options.map((item, index) => (
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
