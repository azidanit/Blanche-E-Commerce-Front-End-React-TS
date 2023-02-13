import classNames from 'classnames';
import React from 'react';
import { Button, Card } from '../../../atoms';
import style from './index.module.scss';

const CardVoucher: React.FC = () => {
  const classProps = classNames(
    style.card__voucher,
    style.card__voucher__active,
  );

  return (
    <Card className={style.card__voucher}>
      <div className={style.card__voucher__title}>
        <p>Gratis Ongkir hingga Rp.20000</p>
      </div>
      <ul className={style.card__voucher__content}>
        <li>Promo ini hanya berlaku di aplikasi Android dan aplikasi iOS</li>
        <li>Berakhir 9 hari lagi!</li>
      </ul>
    </Card>
  );
};

export default CardVoucher;
