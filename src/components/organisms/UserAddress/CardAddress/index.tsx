import classNames from 'classnames';
import React, { useState } from 'react';
import { Badge, Button, Card } from '../../../atoms';
import style from './index.module.scss';
import EditAddress from '../EditAddress';
import { IUserAddress } from '../../../../helpers/types';

interface CardAddressProps {
  data: IUserAddress;
}

const CardAddress: React.FC<CardAddressProps> = ({ data }) => {
  const isDefault = true;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const classProps = classNames(
    style.card__address,
    data?.is_default && style.card__address__active,
  );

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
        <li>{data?.name}</li>
        <li>{data?.phone}</li>
        <li>
          {data?.province_name}, {data?.city_name}
        </li>
        <li>
          {data?.district_name}, {data?.subdistrict_name} {data?.zip_code}
        </li>
      </ul>
      <div className={style.card__address__button}>
        <Button type="primary" size="middle" onClick={showModal}>
          Change Address
        </Button>
        <Button type="primary" ghost size="middle" disabled={data.is_default}>
          Set Default Address
        </Button>
      </div>
      <EditAddress
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </Card>
  );
};

export default CardAddress;
