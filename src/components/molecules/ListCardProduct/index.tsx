import { Col, Row } from 'antd';
import React from 'react';
import { IGetProductListResponse } from '../../../helpers/types';
import CardProduct from '../CardProduct';

interface ListCardProductProps {
  data: IGetProductListResponse;
}

const ListCardProduct: React.FC<ListCardProductProps> = ({ data }) => {
  return (
    <Row gutter={[16, 32]}>
      {data.products.map((product) => (
        <Col xs={24} sm={8} md={6} lg={6} xl={4} key={`product-${product.id}`}>
          <CardProduct product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ListCardProduct;
