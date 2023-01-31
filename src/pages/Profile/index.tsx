import React from 'react';
import { ProfilePage } from '../../components';
import style from './index.module.scss';

const Profile: React.FC = () => {
  return (
    <div className={style.profile__page}>
      <ProfilePage />
    </div>
  );
};

export default Profile;
