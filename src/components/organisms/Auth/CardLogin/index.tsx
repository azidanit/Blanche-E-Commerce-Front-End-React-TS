import React from 'react';
import { Card } from '../../../atoms';
import style from './index.module.scss';

const CardLogin = (): JSX.Element => {
  return (
    <Card className={style.card__login}>
      <>
        <h6>Hey Hello👋</h6>
        <p>Lorem ipsum dolor sit amet.</p>
      </>
    </Card>
  );
};

export default CardLogin;
