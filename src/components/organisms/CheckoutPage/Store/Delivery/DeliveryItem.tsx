import React from 'react';
import style from './index.module.scss';

const DeliveryItem: React.FC = () => {
  return (
    <div className={style.delivery__item}>
      <div className={style.delivery__item__title}>
        <p>JNE</p>
      </div>
      <div className={style.delivery__item__body}>
        <p>Rp. 50000</p>
        <p>Esimation </p>
      </div>
    </div>
  );
};

export default DeliveryItem;
