import React, { useState } from 'react';
import { Button } from '../../../atoms';
import EditEmail from '../EditEmail';
import style from './index.module.scss';

const Profile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={style.profile__section__tab}>
      <ul className={style.profile__section__tab__attr}>
        <li className={style.profile__section__tab__attr__item}>Name</li>
        <li className={style.profile__section__tab__attr__item}>Email</li>
        <li className={style.profile__section__tab__attr__item}>Phone</li>
        <li className={style.profile__section__tab__attr__item}>Birthdate</li>
        <li className={style.profile__section__tab__attr__item}>Gender</li>
      </ul>
      <ul className={style.profile__section__tab__value}>
        <li className={style.profile__section__tab__value__item}>John Doe</li>
        <li className={style.profile__section__tab__value__item}>
          gidwikintan@gmail.com{' '}
          <Button size="small" onClick={showModal}>
            Edit Email
          </Button>
        </li>
        <li className={style.profile__section__tab__value__item}>
          08655364526345
        </li>
        <li className={style.profile__section__tab__value__item}>1998-01-01</li>
        <li className={style.profile__section__tab__value_item}>Female</li>
      </ul>
      <EditEmail
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default Profile;
