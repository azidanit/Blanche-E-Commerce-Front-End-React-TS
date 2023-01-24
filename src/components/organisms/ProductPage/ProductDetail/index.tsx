import React, { useState } from 'react';
import { Row, Col } from 'antd';
import CarouselPhoto from '../CarouselPhoto';
import style from './index.module.scss';
import ProductInfo from './ProductInfo';
import { IProduct } from '../../../../helpers/types';
import ProductVariant from './ProductVariant';

interface ProductDetailProps {
  data: IProduct;
  isRangePrice: boolean;
  isDiscount: boolean;
  isRangePriceDisc: boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  data,
  isDiscount,
  isRangePrice,
  isRangePriceDisc,
}) => {
  const [selectedImage, setSelectedImage] = useState(3);
  return (
    <Row className={style.product__detail} gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={10} xl={10}>
        <CarouselPhoto photos={data?.images} selectedItem={selectedImage} />
      </Col>
      <Col xs={24} sm={24} md={24} lg={14} xl={14}>
        <ProductInfo
          data={data}
          isDiscount={isDiscount}
          isRangePrice={isRangePrice}
          isRangePriceDisc={isRangePriceDisc}
        />
        <ProductVariant />
      </Col>
    </Row>
  );
};

export default ProductDetail;
('1');
