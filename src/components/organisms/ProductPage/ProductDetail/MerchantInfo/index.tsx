import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Rate } from '../../../../atoms';
import style from './index.module.scss';

const MerchantInfo: React.FC = () => {
  return (
    <div className={style.merchant__info}>
      <Link to="/">
        <Avatar size={50} />
      </Link>
      <div className={style.merchant__info__desc}>
        <Link to="/" className={style.merchant__info__desc__link}>
          Store Name
        </Link>
        <p>Jakarta</p>
        <p>
          <Rate disabled count={4.9} /> 4.9
        </p>
      </div>
    </div>
  );
};

export default MerchantInfo;
