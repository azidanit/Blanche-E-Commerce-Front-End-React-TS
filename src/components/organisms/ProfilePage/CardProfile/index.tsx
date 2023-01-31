import React from 'react';
import { Avatar, Card } from '../../../atoms';
import style from './index.module.scss';

const CardProfile: React.FC = () => {
  return (
    <Card className={style.card__profile}>
      <div className={style.card__profile__header}>
        <Avatar />
        <div className={style.card__profile__header__name}>
          <h3>John Doe</h3>
          <p>Member since 2020</p>
        </div>
      </div>
    </Card>
  );
};

export default CardProfile;
