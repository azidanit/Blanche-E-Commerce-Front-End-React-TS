import { Divider, Skeleton } from 'antd';
import React from 'react';
import { CardWallet } from '../../..';
import { useGetProfileQuery } from '../../../../app/features/profile/profileApiSlice';
import { Avatar, Card } from '../../../atoms';
import style from './index.module.scss';

const CardProfile: React.FC = () => {
  const { data, isLoading } = useGetProfileQuery();
  return (
    <Card className={style.card__profile}>
      <Skeleton loading={isLoading}>
        <div className={style.card__profile__header}>
          <Avatar size={60} src={data?.profile_picture} />
          <div className={style.card__profile__header__details}>
            <h3 className={style.card__profile__header__details__name}>
              {data?.fullname}
            </h3>
            <p className={style.card__profile__header__details__member}>
              Member
            </p>
          </div>
        </div>
        <Divider />
        <CardWallet />
      </Skeleton>
    </Card>
  );
};

export default CardProfile;
