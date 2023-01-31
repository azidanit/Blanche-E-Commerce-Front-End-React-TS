import React from 'react';
import CardAddress from './CardAddress';
import style from './index.module.scss';

const UserAddress: React.FC = () => {
  return (
    <div className={style.user__address}>
      <CardAddress />
      <CardAddress />
    </div>
  );
};

export default UserAddress;
