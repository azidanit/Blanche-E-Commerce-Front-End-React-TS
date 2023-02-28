import React, { useEffect } from 'react';
import Barcode from 'react-barcode';
import { useGetMerchantOrderDetailsQuery } from '../../../../app/features/merchant/merchantOrderApiSlice';
import { IMerchantProductOverview } from '../../../../helpers/types';
import {
  IMerchantDetailTransactionResponse,
  IMerchantTransaction,
  IMerchantProduct,
} from '../../../../helpers/types/merchant/merchant-order.interface';
import { Logo } from '../../../atoms';
import style from './index.module.scss';

interface ShippingLabelProps {
  transaction: IMerchantTransaction | IMerchantDetailTransactionResponse;
}

const ShippingLabel: React.FC<ShippingLabelProps> = ({ transaction }) => {
  const { data, isLoading } = useGetMerchantOrderDetailsQuery(
    transaction.invoice_code || '',
    {
      skip: !transaction.invoice_code,
    },
  );

  if (!data) {
    return <></>;
  }
  return (
    <div className={style.shipping__label}>
      <div className={style.shipping__label__title}>
        <Logo size="extrasmall" />
        <span>Shipping Label</span>
      </div>
      <div className={style.shipping__label__barcode}>
        <Barcode value={data.invoice_code} />
      </div>
      <div className={style.shipping__label__delivery}>
        <p>{data.shipping_details.delivery_option.courier_name}</p>
      </div>
      <div className={style.shipping__label__content}>
        <div className={style.shipping__label__content__item}>
          <div className={style.shipping__label__content__item__title}>
            <span>From</span>
          </div>

          <div className={style.shipping__label__content__item__content}>
            <div
              className={style.shipping__label__content__item__content__user}
            >
              <span>{data.shipping_details.address.name} </span>
              <span>({data.shipping_details.address.phone})</span>
            </div>
            <div
              className={style.shipping__label__content__item__content__address}
            >
              <span>{data.shipping_details.address.details} </span>{' '}
              <span>{data.shipping_details.address.city_name}</span>
              {', '}
              <span>{data.shipping_details.address.province_name}</span>{' '}
              <span>{data.shipping_details.address.district_name}</span>
              {', '}
              <span>{data.shipping_details.address.subdistrict_name}</span>
              {', '}
              <span>{data.shipping_details.address.zip_code}</span>{' '}
            </div>
          </div>
        </div>
        <div className={style.shipping__label__content__item}>
          <div className={style.shipping__label__content__item__title}>
            <span>To</span>
          </div>

          <div className={style.shipping__label__content__item__content}>
            <div
              className={style.shipping__label__content__item__content__user}
            >
              <span>{data.shipping_details.address.name} </span>
              <span>({data.shipping_details.address.phone})</span>
            </div>
            <div
              className={style.shipping__label__content__item__content__address}
            >
              <span>{data.shipping_details.address.details} </span>{' '}
              <span>{data.shipping_details.address.city_name}</span>
              {', '}
              <span>{data.shipping_details.address.province_name}</span>{' '}
              <span>{data.shipping_details.address.district_name}</span>
              {', '}
              <span>{data.shipping_details.address.subdistrict_name}</span>
              {', '}
              <span>{data.shipping_details.address.zip_code}</span>{' '}
            </div>
          </div>
        </div>
      </div>
      <div className={style.shipping__label__product}>
        <h6>Product</h6>
        <ul className={style.shipping__label__product__content}>
          {data.product_details.products.map(
            (product: IMerchantProduct, index) => (
              <li
                className={style.shipping__label__product__content__item}
                key={product.name}
              >
                <div
                  className={
                    style.shipping__label__product__content__item__name
                  }
                >
                  <span>{product.quantity}</span>pcs <span>{product.name}</span>
                </div>
                <p>{product.variant_name}</p>
                <p>{product.notes}</p>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

export default ShippingLabel;
