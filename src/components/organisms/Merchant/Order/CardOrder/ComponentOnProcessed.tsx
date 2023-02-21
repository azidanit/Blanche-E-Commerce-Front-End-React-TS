import React, { useState } from 'react';
import { ModalConfirm } from '../../../..';
import { Button } from '../../../../atoms';
import style from './index.module.scss';

const ComponentOnProcessed: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleProcess = () => {
    console.log('process');
  };
  return (
    <>
      <div className={style.card__order__actions__btn}>
        <Button type="primary" size="large" ghost>
          Print Label
        </Button>
        <Button type="primary" size="large" onClick={handleOpenModal}>
          Deliver Order
        </Button>
      </div>
      <ModalConfirm
        isModalOpen={isModalOpen}
        handleCancel={handleCloseModal}
        handleOk={handleProcess}
        title="Deliver Order"
        info="Are you sure to deliver this order?"
        confirmButtonText="Deliver"
        cancelButton={true}
      />
    </>
  );
};

export default ComponentOnProcessed;
