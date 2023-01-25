import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetMerchantInfoQuery } from '../../app/features/merchant/merchantApiSlice';
import { useGetProductBySlugQuery } from '../../app/features/product/productApiSlice';
import {
  setIsDiscount,
  setIsRangePrice,
  setProduct,
  setPrice,
  setStock,
  setImages,
  setActiveImage,
  setIsLoading,
} from '../../app/features/product/productSlice';
import { useAppDispatch } from '../../app/hooks';
import { CardSummary, Container, ProductDetail } from '../../components';
import useProduct from '../../hooks/useProduct';
import style from './index.module.scss';

const Product = (): JSX.Element => {
  const { store, slug } = useParams();
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetProductBySlugQuery({
    store: store as string,
    slug: slug as string,
  });

  const { isRangePrice, variant } = useProduct();

  useEffect(() => {
    dispatch(setProduct(data));
    dispatch(setIsDiscount(data?.min_real_price !== data?.max_real_price));
    dispatch(
      setImages(
        data?.images.concat(
          data?.variants?.variant_items.map((item) => item.image),
        ),
      ),
    );
    dispatch(setIsRangePrice(data?.min_real_price !== data?.max_real_price));
    dispatch(setPrice(!isRangePrice ? data?.min_real_price : 0));
    dispatch(setStock(variant === null ? data?.total_stock : variant.stock));
    dispatch(setActiveImage(data?.images?.[0]));
    dispatch(setIsLoading(isLoading));
  }, [data]);

  return (
    <Container className={style.product__page}>
      <ProductDetail />
      <CardSummary />
    </Container>
  );
};

export default Product;
