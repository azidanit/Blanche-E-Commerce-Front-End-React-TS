import React from 'react';
import { Badge } from '../../../../atoms';
import style from './index.module.scss';

const ProductPrice: React.FC = () => {
  return (
    <div className={style.product__info__price}>
      <div className={style.product__info__price__disc}>
        <Badge color="#81d687" text="20%" />
        <span>Rp 100.000</span>
      </div>
      <div className={style.product__info__price__real}>
        <span>Rp 80.000</span>
      </div>
    </div>
  );
};

export default ProductPrice;
