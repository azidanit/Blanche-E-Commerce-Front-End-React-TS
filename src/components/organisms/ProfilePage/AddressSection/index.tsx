import { PlusCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { Button } from '../../../atoms';
import UserAddress from '../../UserAddress';
import style from './index.module.scss';

const AddressSection: React.FC = () => {
  return (
    <div className={style.address__section}>
      <Button size="large" type="primary" ghost style={{ marginBottom: 12 }}>
        <PlusCircleOutlined />
        Add New Address
      </Button>
      <UserAddress />
    </div>
  );
};

export default AddressSection;
