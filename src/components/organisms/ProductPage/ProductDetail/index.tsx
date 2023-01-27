import React, { useState } from 'react';
import { Row, Col, Divider } from 'antd';
import style from './index.module.scss';
import ProductDescription from './ProductDescription';
import MerchantInfo from './MerchantInfo';
import ProductGallery from '../ProductGallery.tsx';
import { Container } from '../../../molecules';
import ProductInfo from './ProductInfo';
import ProductVariant from './ProductVariant';

const ProductDetail: React.FC = () => {
  return (
    <Row className={style.product__detail} gutter={[32, 16]}>
      <Col xs={24} sm={24} md={24} lg={10} xl={11}>
        <ProductGallery />
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={14}
        xl={13}
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
  );
};

export default ProductDetail;
