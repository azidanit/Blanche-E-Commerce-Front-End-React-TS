import { Col, Row } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { IGetProductListResponse } from '../../../helpers/types';
import CardProduct from '../CardProduct';

interface ListCardProductProps {
  data: IGetProductListResponse;
  isLoading: boolean;
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
  isLoading,
  grid = { xs: 24, sm: 8, md: 6, lg: 6, xl: 4 },
}) => {
  const { slug } = useParams();
  return (
    <Row gutter={[16, 32]}>
      {data.products
        .filter((product) => product.slug !== slug)
        .map((product, index) => (
          <Col
            xs={grid.xs}
            sm={grid.sm}
            md={grid.md}
            lg={grid.lg}
            xl={grid.xl}
            key={`product-${product.id + index}`}
          >
            <CardProduct isLoading={isLoading} product={product} />
          </Col>
        ))}
    </Row>
  );
};

export default ListCardProduct;
