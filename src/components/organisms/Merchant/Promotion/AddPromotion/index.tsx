import React from 'react';
import { Form, Button } from '../../../..';
import CardPromotionInfo from './CardPromotionInfo';
import CardPromotionProduct from './CardPromotionProduct';
import CardPromotionSettings from './CardPromotionSettings';
import CardPromotionType from './CardPromotionType';
import style from './index.module.scss';

const AddPromotion: React.FC = () => {
  return (
    <Form className={style.form__promotion}>
      <CardPromotionType />
      <CardPromotionInfo />
      <CardPromotionSettings />
      <CardPromotionProduct />

      <div className={style.form__promotion__actions}>
        <Button type="primary" htmlType="submit" size="large">
          Create Promotion{' '}
        </Button>
      </div>
    </Form>
  );
};

export default AddPromotion;
