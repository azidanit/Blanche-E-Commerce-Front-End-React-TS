import React from 'react';
import style from './index.module.scss';

const Summary: React.FC = () => {
  return (
    <ul className={style.order__summary__content}>
      <li className={style.order__summary__content__item}>
        <span>Subtotal</span>
        <span>$ 100</span>
      </li>
      <li className={style.order__summary__content__item}>
        <span>Delivery Fee</span>
        <span>$ 100</span>
      </li>
      <li className={style.order__summary__content__item}>
        <span>Voucher Discount Store</span>
        <span>$ 100</span>
      </li>
      <li className={style.order__summary__content__item}>
        <span>Voucher Discount Makertplace</span>
        <span>$ 100</span>
      </li>
    </ul>
  );
};

export default Summary;
