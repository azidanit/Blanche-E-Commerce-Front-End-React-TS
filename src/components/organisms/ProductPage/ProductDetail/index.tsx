import React from 'react';
import { Row, Col } from 'antd';
import CarouselPhoto from '../CarouselPhoto';
import style from './index.module.scss';
import { Container } from '../../../molecules';
import ProductInfo from './ProductInfo';

const ProductDetail = (): JSX.Element => {
  return (
    <Container>
      <Row className={style.product_detail}>
        <Col flex="1">
          <CarouselPhoto />
        </Col>
        <Col flex="1">
          <ProductInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
