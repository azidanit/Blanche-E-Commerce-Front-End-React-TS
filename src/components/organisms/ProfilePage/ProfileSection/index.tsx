import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import CardAvatar from './CardAvatar';
import style from './index.module.scss';
import Details from './Details';
import Account from './Account';
import { useGetProfileQuery } from '../../../../app/features/profile/profileApiSlice';
import { IAccount, IDetails } from '../../../../helpers/types';
import { capitalizeFirstLetter } from '../../../../helpers/capitalizeFirstLetter';

const ProfileSection: React.FC = () => {
  const { data, isLoading } = useGetProfileQuery();
  const [details, setDetails] = useState<IDetails>();
  const [account, setAccount] = useState<IAccount>();

  useEffect(() => {
    if (data) {
      const newDetails = {
        name: data.fullname
          .split(' ')
          .map((name) => capitalizeFirstLetter(name))
          .join(' '),
        phone: data.phone,
        birthdate: data.birth_date,
        gender: capitalizeFirstLetter(data.gender),
      };
      setDetails(newDetails);
      const newAccount = {
        email: data.email,
      };
      setAccount(newAccount);
    }
  }, [data]);

  return (
    <Row className={style.profile__section} gutter={[32, 32]}>
      <Col xl={8}>{data && <CardAvatar src={data.profile_picture} />}</Col>
      <Col xl={16}>
        <div className={style.profile__section__item}>
          <div className={style.profile__section__item__left}>
            <h6>Profile</h6>
            <p className={style.profile__section__item__left__info}>
              Edit your profile details and account information here.
            </p>
          </div>
        </div>
        {details && <Details details={details} />}
        {account && <Account account={account} />}
      </Col>
    </Row>
  );
};

export default ProfileSection;
