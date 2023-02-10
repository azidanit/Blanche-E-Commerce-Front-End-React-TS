import { StepProps, Steps } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { dateToMinuteHourMonthStringDayYear } from '../../../../helpers/parseDate';
import style from './index.module.scss';
import './override.scss';

const items: StepProps[] = [
  {
    title: 'Package Shipped',
    description: dateToMinuteHourMonthStringDayYear(new Date(), ' '),
  },
  {
    title: 'Package Delivered',
    description: dateToMinuteHourMonthStringDayYear(new Date(), ' '),
  },
];

const ShippingDetails: React.FC = () => {
  return (
    <div className={style.sd}>
      <h3 className={style.sd__title}>Shipping Details</h3>
      <div className={style.sd__address}>
        <h4 className={style.sd__sub}>Address</h4>
        <div className={style.sd__address__contact}>
          <p className={style.sd__address__contact__name}>Ryan Daniel</p>
          <p className={style.sd__address__contact__phone}>+6281234567890</p>
        </div>
        <div className={style.sd__address__details}>
          <p className={style.sd__address__details__street}>
            Jalan Tebet Barat Dalam IG no 70
          </p>
          <p className={style.sd__address__details__city}>
            Tebet, DKI Jakarta 12810
          </p>
        </div>
      </div>
      <div className={style.sd__tracking}>
        <div className={style.sd__tracking__sub}>
          <h4 className={style.sd__tracking__title}>Tracking</h4>
          <p className={style.sd__tracking__code}>JNE - JNE1234567890</p>
        </div>
        <div className={classNames(style.sd__tracking__status, 'delivery')}>
          <Steps
            current={2}
            items={items}
            labelPlacement="vertical"
            progressDot
            className={style.sd__tracking__steps}
            responsive
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
