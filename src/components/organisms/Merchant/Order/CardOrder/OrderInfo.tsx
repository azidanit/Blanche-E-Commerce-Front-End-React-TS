import React from 'react';
import style from './index.module.scss';

const OrderInfo: React.FC = () => {
  return (
    <div className={style.card__order__body__info}>
      <div className={style.card__order__body__info__item}>
        <p className={style.card__order__body__info__item__title}>Kurir</p>
        <p className={style.card__order__body__info__item__text}>JNE</p>
      </div>
      <div className={style.card__order__body__info__item}>
        <p className={style.card__order__body__info__item__title}>No.</p>
        <p className={style.card__order__body__info__item__text}>REG</p>
      </div>
    </div>
  );
};

export default OrderInfo;
