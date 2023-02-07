import React from 'react';
import { dateToYearMonth } from '../../../helpers/parseDate';
import { Button } from '../../atoms';
import style from './index.module.scss';

interface UserSealabsPayProps {
  cardNumber: string;
  nameOnCard: string;
  activeDate: string;
  onDelete: () => void;
}

const UserSealabsPay: React.FC<UserSealabsPayProps> = ({
  cardNumber,
  nameOnCard,
  activeDate,
  onDelete,
}) => {
  return (
    <div className={style.usp}>
      <div className={style.usp__info}>
        <div>
          <p className={style.usp__info__number}>
            Card Number - {cardNumber.match(/[0-9]{1,4}/g)?.join(' ')}
          </p>
          <p className={style.usp__info__name}>{nameOnCard}</p>
        </div>
        <p className={style.usp__info__active}>
          Active until <span>{dateToYearMonth(new Date(activeDate))}</span>
        </p>
      </div>
      <Button onClick={onDelete} className={style.usp__info__delete} danger>
        Delete
      </Button>
    </div>
  );
};

export default UserSealabsPay;
