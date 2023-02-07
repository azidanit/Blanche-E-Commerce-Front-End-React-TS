import { Skeleton } from 'antd';
import React from 'react';
import { useGetProfileQuery } from '../../../../app/features/profile/profileApiSlice';
import { Avatar, Card } from '../../../atoms';
import style from './index.module.scss';

const CardProfile: React.FC = () => {
  const { data, isLoading } = useGetProfileQuery();
  return (
    <Skeleton loading={isLoading}>
      <Card className={style.card__profile}>
        <div className={style.card__profile__header}>
          <Avatar size="large" src={data?.profile_picture} />
          <div className={style.card__profile__header__details}>
            <h3 className={style.card__profile__header__details__name}>
              {data?.fullname}
            </h3>
            <p className={style.card__profile__header__details__member}>
              Member
            </p>
          </div>
        </div>
      </Card>
    </Skeleton>
  );
};

export default CardProfile;
