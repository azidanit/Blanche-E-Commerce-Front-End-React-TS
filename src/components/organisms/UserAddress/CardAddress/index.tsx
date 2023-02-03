import classNames from 'classnames';
import React, { useState } from 'react';
import { Badge, Button, Card } from '../../../atoms';
import style from './index.module.scss';
import EditAddress from '../EditAddress';

const CardAddress: React.FC = () => {
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
    isDefault && style.card__address__active,
  );

  return (
    <Card className={classProps}>
      <div className={style.card__address__title}>
        <p>Rumah</p>
        <Badge
          className={style.card__address__badge}
          count="Default"
          color={'gray'}
        />
      </div>
      <ul className={style.card__address__content}>
        <li>John Doe</li>
        <li>08923214</li>
        <li>1234 Main St</li>
        <li>Anytown, CA 12345</li>
      </ul>
      <div className={style.card__address__button}>
        <Button type="primary" size="middle" onClick={showModal}>
          Change Address
        </Button>
        <Button type="primary" ghost size="middle" disabled>
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
