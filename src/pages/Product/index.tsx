import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../app/features/home/homeApiSlice';
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
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    dispatch(
      setProductInfo({
        product: data,
        isDiscount: data?.min_real_price !== data?.min_discount_price,
        isRangePrice: data?.min_real_price !== data?.max_real_price,
        price:
          data?.min_real_price !== data?.min_discount_price
            ? data?.min_real_price
            : data?.min_discount_price,
        stock: variant === null ? data?.total_stock : variant.stock,
        activeImage: data?.images?.[0],
        isLoading: isLoading,
        variant: null,
        discountPrice:
          data?.min_real_price !== data?.min_discount_price
            ? data?.min_discount_price
            : null,
      }),
    );
  }, [data]);

  const { data: similarProducts } = useGetProductsQuery({
    limit: 6,
    cat: data?.category?.url,
  });

  const { data: sellerProducts } = useGetProductsQuery({
    limit: 6,
    merchant: store as string,
  });

  return (
    <div className={style.product}>
      <BreadcrumbProduct />
      <div className={style.product__page}>
        <ProductDetail />
        <CardSummary />
      </div>

      <div className={style.product__page__lists}>
        {Boolean(sellerProducts?.products.length) && (
          <MoreProducts title="More from this store" data={sellerProducts} />
        )}
        {Boolean(similarProducts?.products.length) && (
          <MoreProducts title="Similar Products" data={similarProducts} />
        )}
      </div>
    </div>
  );
};

export default Product;
