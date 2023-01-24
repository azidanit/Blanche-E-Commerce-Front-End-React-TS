import { Divider } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';

const CardLoginBottom: React.FC = () => {
  return (
    <div className={style.card__login__bottom}>
      <Divider className={style.divider}>atau masuk dengan</Divider>
      {/* TODO --> LOGIN GOOGLE BUTTON */}
      <Link to="/">Daftar</Link>
    </div>
  );
};

export default CardLoginBottom;
