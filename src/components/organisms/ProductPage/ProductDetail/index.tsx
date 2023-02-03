import React from 'react';
import { Row, Col, Divider } from 'antd';
import style from './index.module.scss';
import ProductDescription from './ProductDescription';
import MerchantInfo from './MerchantInfo';
import ProductGallery from '../ProductGallery.tsx';
import ProductInfo from './ProductInfo';
import ProductVariant from './ProductVariant';
import { SEO } from '../../../atoms';
import useProduct from '../../../../hooks/useProduct';

const ProductDetail: React.FC = () => {
  const { product } = useProduct();
  return (
    <>
      <SEO
        title={`Sell ${product ? product.title : 'Product'}`}
        description={`Sell ${product ? product.title : 'Product'}`}
      />
      <Row className={style.product__detail} gutter={[32, 16]}>
        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
          <ProductGallery />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={14}
          xl={14}
          className={style.product__detail__item}
        >
          <ProductInfo />
          <ProductVariant />
          <ProductDescription />
          <Divider style={{ margin: 0 }} />
          <MerchantInfo />
          <Divider style={{ margin: 0 }} />
        </Col>
      </Row>
    </>
  );
};

export default ProductDetail;
