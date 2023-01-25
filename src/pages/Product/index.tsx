import React, { useEffect, useState } from 'react';
import {
  setIsDiscount,
  setIsRangePriceDiscount,
  setIsRangePrice,
  setProduct,
  setPrice,
} from '../../app/features/product/productSlice';
import { useAppDispatch } from '../../app/hooks';
import { CardSummary, Container, ProductDetail } from '../../components';
import useProduct from '../../hooks/useProduct';
import style from './index.module.scss';

const data = {
  id: 1,
  title: 'laptop geming',
  min_real_price: 2150000,
  max_real_price: 2450000,
  min_discount_price: 2150000,
  max_discount_price: 2550000,
  category: {
    name: 'Elektronika Instrumentasi',
    url: 'test-url',
  },
  images: [
    'https://res.cloudinary.com/dqkivnsov/image/upload/v1672368688/toyota-fortuner-bekas-2020-harga-drop-77-juta-meski-baru-berjalan-8.000-km-123_polgvo.jpg',
    'https://res.cloudinary.com/dqkivnsov/image/upload/v1672368877/toyota-fortuner-bekas-2020-sub2_xkccvr.jpg',
    'https://res.cloudinary.com/dqkivnsov/image/upload/v1672368843/toyota_fortuner_bekas_2020_harga_drop_77_juta_meski_baru_berjalan_8.000_km_2_hnrlz2.jpg',
  ],
  description: 'ini deksripsi adalahhh',
  is_used: false,
  SKU: 'SKU101212',
  favorite_count: 2500,
  is_favorited: false,
  unit_sold: 2400,
  total_stock: 4000,
  is_archived: false,
  avg_rating: 4.8,
  weight: 900,
  dimension: {
    width: 30,
    length: 20,
    height: 10,
  },
  variants: {
    variant_options: [
      {
        name: 'color',
        type: ['red', 'black'],
      },
      {
        name: 'size',
        type: ['S', 'M'],
      },
    ],
    variant_items: [
      {
        id: 11,
        is_archived: false,
        image: 'http://dummyimage.com/173x122.png/ff4444/ffffff',
        price: 10000,
        stock: 1010,
      },
      {
        id: 22,
        is_archived: false,
        image: 'http://dummyimage.com/173x122.png/ff4444/ffffff',
        price: 20000,
        stock: 1020,
      },
      {
        id: 33,
        is_archived: false,
        image: 'http://dummyimage.com/173x122.png/ff4444/ffffff',
        price: 21000,
        stock: 1020,
      },
      {
        id: 44,
        is_archived: false,
        image: 'http://dummyimage.com/173x122.png/ff4444/ffffff',
        price: 23000,
        stock: 1020,
      },
    ],
  },
  merchant: {
    name: 'Penak Jaya',
    domain: 'penakjaya',
    image: 'http://dummyimage.com/173x122.png/ff4444/ffffff',
    avg_rating: 4.5,
    seller_city: 'Jakarta',
  },
};
const Product = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { isDiscount, isRangePrice } = useProduct();

  useEffect(() => {
    dispatch(setProduct(data));
    dispatch(
      setIsDiscount(
        data.min_discount_price !== null && data.max_discount_price !== null,
      ),
    );
    dispatch(setIsRangePrice(data.min_real_price !== data.max_real_price));
    dispatch(
      setIsRangePriceDiscount(
        data.min_discount_price !== data.max_discount_price && isDiscount,
      ),
    );
    dispatch(setPrice(!isRangePrice ? data.min_real_price : 0));
  }, []);

  return (
    <Container className={style.product__page}>
      <ProductDetail />
      <CardSummary />
    </Container>
  );
};

export default Product;
