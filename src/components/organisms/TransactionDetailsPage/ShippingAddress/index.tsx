import { Divider } from 'antd';
import React from 'react';
import style from './index.module.scss';

const ShippingAddress: React.FC = () => {
  return (
    <div className={style.sa}>
      <h3 className={style.sa__title}>Shipping Address</h3>
      <div className={style.sa__flex}>
        <div className={style.sa__address}>
          <div className={style.sa__address__contact}>
            <p className={style.sa__address__contact__name}>Ryan Daniel</p>
            <p className={style.sa__address__contact__phone}>+6281234567890</p>
          </div>
          <div className={style.sa__address__details}>
            <p className={style.sa__address__details__street}>
              Jalan Tebet Barat Dalam IG no 70
            </p>
            <p className={style.sa__address__details__city}>
              Tebet, DKI Jakarta 12810
            </p>
          </div>
        </div>
        <div>
          <Divider type="vertical" className={style.sa__divider} />
        </div>
        <p>saasd</p>
      </div>
    </div>
  );
};

export default ShippingAddress;
