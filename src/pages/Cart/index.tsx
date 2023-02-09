import { Col, Row, Skeleton } from 'antd';
import React from 'react';
import { useGetCartsQuery } from '../../app/features/cart/cartApiSlice';
import {
  CartSummary,
  CartSummaryMobile,
  ListCartStoreItem,
} from '../../components';
import { ICart } from '../../helpers/types';
import useMediaQuery from '../../hooks/useMediaQuery';
import style from './index.module.scss';

const Cart: React.FC = () => {
  const { data: carts, isLoading } = useGetCartsQuery();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Skeleton loading={isLoading} active>
      <div className={style.cart__page}>
        <h5>Cart</h5>
        <Row gutter={[16, 16]}>
          <Col lg={16} xl={17}>
            <ListCartStoreItem carts={carts?.carts} />
          </Col>
          {!isMobile ? (
            <Col lg={8} xl={7}>
              <CartSummary quantity={carts?.quantity} total={carts?.total} />
            </Col>
          ) : (
            <CartSummaryMobile
              quantity={carts?.quantity}
              total={carts?.total}
            />
          )}
        </Row>
      </div>
    </Skeleton>
  );
};

export default Cart;
