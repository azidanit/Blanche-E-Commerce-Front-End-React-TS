import React from 'react';
import {
  IMerchantDetailTransactionResponse,
  IMerchantTransaction,
} from '../../../../helpers/types/merchant/merchant-order.interface';
import style from './index.module.scss';

interface ShippingLabelProps {
  transaction: IMerchantTransaction | IMerchantDetailTransactionResponse;
}

const ShippingLabel: React.FC<ShippingLabelProps> = ({ transaction }) => {
  return (
    <div className={style.shipping__label}>
      <div className={style.shipping__label__title}>
        <span>Shipping Label</span>
      </div>
      <div className={style.shipping__label__content}>
        <div className={style.shipping__label__content__item}>
          <div className={style.shipping__label__content__item__title}>
            <span>Address</span>
          </div>
          <div className={style.shipping__label__content__item__content}>
            <span>{transaction.shipping_details.address.details}</span>
          </div>
        </div>
        <div className={style.shipping__label__content__item}>
          <div className={style.shipping__label__content__item__title}>
            <span>City</span>
          </div>
          <div className={style.shipping__label__content__item__content}>
            <span>{transaction.shipping_details.address.city_name}</span>
          </div>
        </div>
        <div className={style.shipping__label__content__item}>
          <div className={style.shipping__label__content__item__title}>
            <span>Province</span>
          </div>
          <div className={style.shipping__label__content__item__content}>
            <span>{transaction.shipping_details.address.province_name}</span>
          </div>
        </div>
        <div className={style.shipping__label__content__item}>
          <div className={style.shipping__label__content__item__title}>
            <span>Postal Code</span>
          </div>
          <div className={style.shipping__label__content__item__content}>
            <span>{transaction.shipping_details.address.zip_code}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingLabel;
