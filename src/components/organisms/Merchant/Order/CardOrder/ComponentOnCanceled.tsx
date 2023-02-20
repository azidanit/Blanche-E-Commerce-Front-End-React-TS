import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalConfirm } from '../../../..';
import { Button } from '../../../../atoms';
import style from './index.module.scss';

const ComponentOnCanceled: React.FC = () => {
  return (
    <>
      <div className={style.card__order__actions}>
        <Link className={style.card__order__actions__link} to="/transactions">
          Detail Order
        </Link>
        <div className={style.card__order__actions__btn}>
          <Button type="primary" size="large" danger disabled>
            Canceled by seller
          </Button>
        </div>
      </div>
    </>
  );
};

export default ComponentOnCanceled;
