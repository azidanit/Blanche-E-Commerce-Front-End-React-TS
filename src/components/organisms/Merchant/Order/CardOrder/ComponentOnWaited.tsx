import React, { useState } from 'react';
import { ModalConfirm } from '../../../..';
import { Button } from '../../../../atoms';
import style from './index.module.scss';

const ComponentOnWaited: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeclineOpen, setIsModalDeclineOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenModalDecline = () => {
    setIsModalDeclineOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseModalDecline = () => {
    setIsModalDeclineOpen(false);
  };

  const handleProcess = () => {
    console.log('process');
  };
  return (
    <>
      <div className={style.card__order__actions__btn}>
        <Button
          type="primary"
          size="large"
          danger
          onClick={handleOpenModalDecline}
        >
          Decline Order
        </Button>
        <Button type="primary" size="large" onClick={handleOpenModal}>
          Process Order
        </Button>
      </div>
      <ModalConfirm
        isModalOpen={isModalOpen}
        handleCancel={handleCloseModal}
        handleOk={handleProcess}
        title="Process Order"
        info="Are you sure to process this order?"
        confirmButtonText="Process"
        cancelButton={true}
      />
      <ModalConfirm
        isModalOpen={isModalDeclineOpen}
        handleCancel={handleCloseModalDecline}
        handleOk={handleProcess}
        title="Decline Order"
        info="Are you sure to decline this order? This action cannot be undone."
        confirmButtonText="Decline Order"
        confirmButtonProps={{ danger: true }}
        cancelButton={true}
      />
    </>
  );
};

export default ComponentOnWaited;
