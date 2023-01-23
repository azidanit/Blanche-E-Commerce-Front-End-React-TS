import React from 'react';
import { Row, Col } from 'antd';
import CarouselPhoto from '../CarouselPhoto';
import style from './index.module.scss';
import { Container } from '../../../molecules';

const ProductDetail = (): JSX.Element => {
  return (
    <Container>
      <Row className={style.auth__layout}>
        <Col flex="1">
          <CarouselPhoto />
        </Col>
        <Col flex="1"></Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
