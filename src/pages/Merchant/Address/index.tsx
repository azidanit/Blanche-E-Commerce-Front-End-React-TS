import React from 'react';
import { AddressSection, Card } from '../../../components';
import style from './index.module.scss';

const Address: React.FC = () => {
  return (
    <Card className={style.address}>
      <AddressSection />
    </Card>
  );
};

export default Address;
