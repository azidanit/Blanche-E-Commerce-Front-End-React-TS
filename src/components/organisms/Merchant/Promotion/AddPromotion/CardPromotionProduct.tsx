import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { Button, Card, FormLabel, Input } from '../../../../atoms';
import ModalProduct from '../ModalProduct';
import style from './index.module.scss';
import { rules } from './validation';

const CardPromotionProduct: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <Card className={style.form__promotion__item}>
      <div className={style.form__promotion__item__header}>
        <h3 className={style.form__promotion__item__header__title}>
          Promotion Information
        </h3>

        <Button type="primary" size="large" onClick={showModal}>
          Add Product
        </Button>
      </div>
      <div className={style.form}></div>
      <ModalProduct
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </Card>
  );
};

export default CardPromotionProduct;
