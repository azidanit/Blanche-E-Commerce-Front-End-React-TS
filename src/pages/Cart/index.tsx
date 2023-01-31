import { Col, Row } from 'antd';
import React from 'react';
import { CartSummary, ListCartStoreItem } from '../../components';
import useMediaQuery from '../../hooks/useMediaQuery';
import style from './index.module.scss';

const Cart: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className={style.cart__page}>
      <h5>Cart</h5>
      <Row gutter={[16, 16]}>
        <Col lg={16} xl={17}>
          <ListCartStoreItem />
        </Col>
        {!isMobile && (
          <Col lg={8} xl={7}>
            <CartSummary />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Cart;
