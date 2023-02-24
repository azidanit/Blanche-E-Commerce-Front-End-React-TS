import { Divider } from 'antd';
import React from 'react';
import style from './index.module.scss';
import ListReviews from './ListReviews';
import Rating from '../../FilterRating';

const ProductReviews: React.FC = () => {
  return (
    <div className={style.product__reviews}>
      <h5>Product Reviews</h5>
      <Divider />
      <div className={style.product__reviews__body}>
        <Rating />
        <ListReviews />
      </div>
    </div>
  );
};

export default ProductReviews;
