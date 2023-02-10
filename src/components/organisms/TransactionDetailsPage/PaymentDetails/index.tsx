import { Divider } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { toRupiah } from '../../../../helpers/toRupiah';
import style from './index.module.scss';

const PaymentDetails: React.FC = () => {
  return (
    <div className={style.pd}>
      <h3 className={style.pd__title}>Payment Details</h3>
      <div>
        <div className={style.pd__flex}>
          <p className={style.pd__flex__label}>Payment Method</p>
          <p>Mandiri Virtual Account</p>
        </div>
      </div>
      <Divider className={style.pd__divider} dashed />
      <div className={style.pd__details}>
        <div className={style.pd__flex}>
          <p className={style.pd__flex__label}>Subtotal</p>
          <p>{toRupiah(1200000)}</p>
        </div>
        <div className={style.pd__flex}>
          <p className={style.pd__flex__label}>Delivery Fee</p>
          <p>{toRupiah(19000)}</p>
        </div>
        <div className={style.pd__flex}>
          <p className={style.pd__flex__label}>Merchant Voucher</p>
          <p>-</p>
        </div>
        <div className={style.pd__flex}>
          <p className={style.pd__flex__label}>Marketplace Voucher</p>
          <p>-{toRupiah(50000)}</p>
        </div>
      </div>
      <Divider className={style.pd__divider} dashed />
      <div>
        <div className={classNames(style.pd__flex, style.pd__total)}>
          <p className={style.pd__flex__label}>Total Payment</p>
          <p>{toRupiah(500000)}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
