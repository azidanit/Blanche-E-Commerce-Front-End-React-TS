import { Col, Row } from 'antd';
import React from 'react';
import { IGetProductListResponse } from '../../../helpers/types';
import CardProduct from '../CardProduct';

interface ListCardProductProps {
  data: IGetProductListResponse;
  grid?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

const ListCardProduct: React.FC<ListCardProductProps> = ({
  data,
  grid = { xs: 24, sm: 8, md: 6, lg: 6, xl: 4 },
}) => {
  return (
    <Row gutter={[16, 32]}>
      {data.products.map((product) => (
        <Col
          xs={grid.xs}
          sm={grid.sm}
          md={grid.md}
          lg={grid.lg}
          xl={grid.xl}
          key={`product-${product.id}`}
        >
          <CardProduct product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ListCardProduct;
