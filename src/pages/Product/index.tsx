import React, { useEffect, useState } from 'react';
import { useGetProductBySlugQuery } from '../../app/features/product/productApiSlice';
import {
  setIsDiscount,
  setIsRangePriceDiscount,
  setIsRangePrice,
  setProduct,
  setPrice,
  setStock,
  setImages,
  setActiveImage,
} from '../../app/features/product/productSlice';
import { useAppDispatch } from '../../app/hooks';
import { CardSummary, Container, ProductDetail } from '../../components';
import useProduct from '../../hooks/useProduct';
import style from './index.module.scss';

const Product = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetProductBySlugQuery({
    slug: 'laptop-gaming',
    store: 'jaya',
  });

  const { isDiscount, isRangePrice, variant, images } = useProduct();

  const allImage = [
    ...(data?.images as string[]),
    ...(data?.variants.variant_items.map((item) => item.image) as string[]),
  ];

  useEffect(() => {
    console.log(data);

    dispatch(setProduct(data));
    dispatch(
      setIsDiscount(
        data?.min_discount_price !== null && data?.max_discount_price !== null,
      ),
    );
    dispatch(setImages(allImage));
    dispatch(setIsRangePrice(data?.min_real_price !== data?.max_real_price));
    dispatch(
      setIsRangePriceDiscount(
        data?.min_discount_price !== data?.max_discount_price && isDiscount,
      ),
    );
    dispatch(setPrice(!isRangePrice ? data?.min_real_price : 0));
    dispatch(setStock(variant === null ? data?.total_stock : variant.stock));
    dispatch(setActiveImage(images?.[0]));
  }, [data]);

  return (
    <Container className={style.product__page}>
      <ProductDetail />
      <CardSummary />
    </Container>
  );
};

export default Product;
