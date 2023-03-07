import { Divider } from 'antd';
import React from 'react';
import { AddPromotionPage, SEO } from '../../../../components';
import style from './index.module.scss';

const EditPromotion: React.FC = () => {
  return (
    <>
      <SEO title="Edit Promotion" description="Edit Promotion page" />
      <div className={style.add__voucher__page}>
        <div className={style.add__voucher__page__header}>
          <h3 className={style.add__voucher__page__header__title}>
            Edit Promotion
          </h3>
          <p className={style.add__voucher__page__header__subtitle}>
            Edit a promotion for your products
          </p>
        </div>
        <Divider />
        <AddPromotionPage isEdit={true} />
      </div>
    </>
  );
};

export default EditPromotion;
