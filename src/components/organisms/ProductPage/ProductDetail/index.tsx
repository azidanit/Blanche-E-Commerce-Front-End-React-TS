import React from 'react';
import { Row, Col } from 'antd';
import CarouselPhoto from '../CarouselPhoto';
import style from './index.module.scss';

const ProductDetail = (): JSX.Element => {
  return (
    <Row className={style.auth__layout}>
      <Col flex="none">
        <CarouselPhoto />
      </Col>
      <Col flex="auto"></Col>
    </Row>
  );
};

export default ProductDetail;
