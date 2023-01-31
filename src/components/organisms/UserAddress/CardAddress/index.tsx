import classNames from 'classnames';
import React from 'react';
import { Badge, Button, Card } from '../../../atoms';
import style from './index.module.scss';

const CardAddress: React.FC = () => {
  const isDefault = true;

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
      <Button type="primary" size="middle" block>
        Change Address
      </Button>
    </Card>
  );
};

export default CardAddress;
