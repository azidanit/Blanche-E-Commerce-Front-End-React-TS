import React, { useState } from 'react';
import { CardSummary, Container, ProductDetail } from '../../components';
import style from './index.module.scss';

const Product = (): JSX.Element => {
  const data = {
    id: 1,
    merchant_id: 1,
    merchant: {
      name: 'ZogoZ Shop',
      domain: 'zogojogo',
      image_url: 'http://dummyimage.com/173x122.png/ff4444/ffffff',
      avg_rating: 4.8,
    },
    category_id: 1,
    category: {
      name: 'Elektronika Instrumentasi',
      url: 'test-url',
    },
    title: 'laptop geming',
    description: 'ini laptop khusus gamer ygy',
    min_real_price: 2450000,
    max_real_price: 2450000,
    min_discount_price: 2450000,
    max_discount_price: 2450000,
    unit_sold: 2400,
    images: [
      {
        image_url:
          'https://cf.shopee.co.id/file/10efc6e8321e9a1f06c5af02dbf6f7e6',
      },
      {
        image_url:
          'https://cf.shopee.co.id/file/10efc6e8321e9a1f06c5af02dbf6f7e6',
      },
      {
        image_url:
          'https://cf.shopee.co.id/file/10efc6e8321e9a1f06c5af02dbf6f7e6',
      },
      {
        image_url:
          'https://cf.shopee.co.id/file/10efc6e8321e9a1f06c5af02dbf6f7e6',
      },
      {
        image_url:
          'https://cf.shopee.co.id/file/10efc6e8321e9a1f06c5af02dbf6f7e6',
      },
    ],
    weight: 2,
    SKU: 'ABC1230XYZ',
    favorite_count: 10,
    total_stock: 77,
    status: 'ACTIVE',
    dimension: '15,20,25',
    rating: {
      avg_rating: 4.5,
      count: 21,
    },
  };

  const [isRangePrice, setIsRangePrice] = useState(
    data.min_real_price !== data.max_real_price,
  );

  const [isDiscount, setIsDiscount] = useState(
    data.min_discount_price !== null && data.max_discount_price !== null,
  );

  const [isRangePriceDisc, setIsRangePriceDisc] = useState(
    data.min_discount_price !== data.max_discount_price && isDiscount,
  );

  return (
    <Container className={style.product__page}>
      <ProductDetail
        data={data}
        isDiscount={isDiscount}
        isRangePrice={isRangePrice}
        isRangePriceDisc={isRangePriceDisc}
      />
      <CardSummary />
    </Container>
  );
};

export default Product;
