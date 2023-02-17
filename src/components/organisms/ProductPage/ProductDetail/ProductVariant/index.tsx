import React, { useEffect, useState } from 'react';
import ProductVariantItem from './ProductVariantItem';
import style from './index.module.scss';
import useProduct from '../../../../../hooks/useProduct';
import { useAppDispatch } from '../../../../../app/hooks';
import { setProductInfo } from '../../../../../app/features/product/productSlice';
import { useGetProductVariantBySlugQuery } from '../../../../../app/features/product/productApiSlice';
import { useParams } from 'react-router-dom';

const ProductVariant: React.FC = () => {
  const { store, slug } = useParams();

  const { activeImage: img, isDiscount } = useProduct();

  const {
    data: variants,
    error,
    isLoading,
  } = useGetProductVariantBySlugQuery({
    store: store as string,
    slug: slug as string,
  });

  const [optionValue, setOptionValues] = useState<number[]>([]);
  // const length = variants?.variant_options?.[0]?.type.length || 0;
  const length = variants?.variant_options?.[1]?.type.length || 0;
  // const id = optionValue[0] + (optionValue[1] ? optionValue[1] : 0) * length;
  const id = (optionValue[1] ? optionValue[1] : 0) + optionValue[0] * length;
  const dispatch = useAppDispatch();

  const handleChange = (index: number, value: number) => {
    const newOptionValue = [...optionValue];
    newOptionValue[index] = value;
    setOptionValues(newOptionValue);
  };

  useEffect(() => {
    if (variants && variants.variant_options.length > 0) {
      dispatch(
        setProductInfo({
          isHaveVariant: true,
        }),
      );
    } else {
      dispatch(
        setProductInfo({
          isHaveVariant: false,
        }),
      );
    }
  }, [variants]);

  useEffect(() => {
    if (
      optionValue.length === variants?.variant_options.length &&
      optionValue[0] !== undefined
    ) {
      dispatch(
        setProductInfo({
          isRangePrice: false,
          variant: variants?.variant_items[id],
          price: variants?.variant_items[id].price,
          discountPrice: variants?.variant_items[id].discount_price,
          activeImage: variants?.variant_items[id].image
            ? variants?.variant_items[id].image
            : img,
          stock: variants?.variant_items[id].stock,
        }),
      );
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
