import classNames from 'classnames';
import React, { useState } from 'react';
import { Badge, Button, Card } from '../../../atoms';
import style from './index.module.scss';
import { IUserAddress } from '../../../../helpers/types';
import { notification } from 'antd';
import ModalAddress from './ModalAddress';

interface CardAddressProps {
  data: IUserAddress;
}

const CardAddress: React.FC<CardAddressProps> = ({ data }) => {
  const classProps = classNames(style.card__address);

  return (
    <Card className={classProps}>
      <div className={style.card__address__title}>
        <p>{data.label}</p>
        {data?.is_default && (
          <Badge
            className={style.card__address__badge}
            count="Default"
            color={'gray'}
          />
        )}
      </div>
      <ul className={style.card__address__content}>
        <li>
          {data?.name} ({data?.phone})
        </li>
        <li>{data?.details}</li>
        <li>
          {data?.subdistrict_name}, {data?.district_name} {data?.zip_code}
        </li>
        <li>
          {data?.city_name}, {data?.province_name}
        </li>
      </ul>
    </Card>
  );
};

export default CardAddress;
