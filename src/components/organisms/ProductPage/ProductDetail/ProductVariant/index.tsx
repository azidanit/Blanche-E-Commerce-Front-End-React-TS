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
  const { images, activeImage } = useProduct();

  const [variantImages, setVariantImages] = useState<string[]>([]);
  const {
    data: variants,
    error,
    isLoading,
  } = useGetProductVariantBySlugQuery({
    store: store as string,
    slug: slug as string,
  });

  const [optionValue, setOptionValues] = useState<number[]>([]);
  const length = variants?.variant_options?.[0]?.type.length || 0;
  const id = optionValue[1] + optionValue[0] * length;
  const dispatch = useAppDispatch();

  const handleChange = (index: number, value: number) => {
    const newOptionValue = [...optionValue];
    newOptionValue[index] = value;
    setOptionValues(newOptionValue);
  };

  useEffect(() => {
    setVariantImages(variants?.variant_items.map((item) => item.image) || []);
    dispatch(setImages(images?.concat(variantImages)));
  }, [variants]);

  useEffect(() => {
    if (
      optionValue.length === variants?.variant_options.length &&
      optionValue[0] !== undefined &&
      optionValue[1] !== undefined
    ) {
      dispatch(setVariant(variants?.variant_items[id]));
      dispatch(setPrice(variants?.variant_items[id].price));

      dispatch(
        setActiveImage(
          variants?.variant_items[id].image
            ? variants?.variant_items[id].image
            : activeImage,
        ),
      );
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
