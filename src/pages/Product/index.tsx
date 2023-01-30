import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetMerchantInfoQuery } from '../../app/features/merchant/merchantApiSlice';
import { useGetProductBySlugQuery } from '../../app/features/product/productApiSlice';
import { setProductInfo } from '../../app/features/product/productSlice';
import { useAppDispatch } from '../../app/hooks';
import {
  BreadcrumbProduct,
  CardSummary,
  ProductDetail,
} from '../../components';
import MoreProducts from '../../components/organisms/ProductPage/MoreProducts';
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
    dispatch(
      setProductInfo({
        product: data,
        isDiscount: data?.min_real_price !== data?.max_real_price,
        isRangePrice: data?.min_real_price !== data?.max_real_price,
        price: !isRangePrice ? data?.min_real_price : 0,
        stock: variant === null ? data?.total_stock : variant.stock,
        activeImage: data?.images?.[0],
        isLoading: isLoading,
      }),
    );
  }, [data]);

  return (
    <div className={style.product}>
      <BreadcrumbProduct />
      <div className={style.product__page}>
        <ProductDetail />
        <CardSummary />
      </div>

      <div className={style.product__page__lists}>
        <MoreProducts
          title="More from this store"
          merchant_id={data?.merchant_id}
        />
        <MoreProducts
          title="Similar Products"
          category_id={data?.category_id}
        />
      </div>
    </div>
  );
};

export default Product;
