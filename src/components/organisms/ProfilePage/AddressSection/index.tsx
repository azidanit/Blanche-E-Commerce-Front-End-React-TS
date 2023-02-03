import { PlusCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Button } from '../../../atoms';
import UserAddress from '../../UserAddress';
import AddAddress from '../../UserAddress/AddAddress';
import style from './index.module.scss';

const AddressSection: React.FC = () => {
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

  return (
    <div className={style.address__section}>
      <Button
        size="large"
        type="primary"
        ghost
        style={{ marginBottom: 12 }}
        onClick={showModal}
      >
        <PlusCircleOutlined />
        Add New Address
      </Button>
      <UserAddress />
      <AddAddress
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default AddressSection;
