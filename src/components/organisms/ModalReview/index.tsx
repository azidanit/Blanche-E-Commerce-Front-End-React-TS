import React from 'react';
import { Modal, ModalHeader } from '../../molecules';
import CardReviewProduct from './CardReviewProduct';
import style from './index.module.scss';

interface ModalReviewProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  handleOk: () => void;
}

const ModalReview: React.FC<ModalReviewProps> = ({
  isModalOpen,
  handleCancel,
  handleOk,
}) => {
  return (
    <Modal
      open={isModalOpen}
      centered
      onOk={handleOk}
      bodyStyle={{
        height: '70vh',
        overflowY: 'scroll',
      }}
      onCancel={handleCancel}
      className={style.review__modal}
      width={600}
    >
      <ModalHeader
        title="Review Product"
        info="Your review will be used to improve the quality of our products . Thank you for your cooperation."
      />
      <div className={style.review__modal__body}>
        <CardReviewProduct />
        <CardReviewProduct />
      </div>
    </Modal>
  );
};

export default ModalReview;
