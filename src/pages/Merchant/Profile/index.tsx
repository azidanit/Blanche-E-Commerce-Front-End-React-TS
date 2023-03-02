import React from 'react';
import { MerchantProfile } from '../../../components';
import style from './index.module.scss';

const Profile: React.FC = () => {
  return (
    <div className={style.profile}>
      <MerchantProfile />
    </div>
  );
};

export default Profile;
