import React from 'react';
import { Badge, Rate } from '../../../atoms';
import style from './index.module.scss';

const ProductInfo = (): JSX.Element => {
  return (
    <div className={style.product__detail__info}>
      <h3>
        Kaos cowok / baju kaos / kaos cowok / kaos distro pria / kaos pendek -
        Putih
      </h3>

      <Rate value={2} />

      <div className={style.product__detail__info__price}>
        <div className={style.product__detail__info__price__disc}>
          <Badge color="green">20%</Badge>
          <span>Rp 100.000</span>
        </div>
        <div className={style.product__detail__info__price__real}>
          <span>Rp 80.000</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
