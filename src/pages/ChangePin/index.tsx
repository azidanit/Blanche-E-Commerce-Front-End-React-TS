import React from 'react';
import { ChangePinPage } from '../../components';
import style from './index.module.scss';

const ChangePin: React.FC = () => {
  return (
    <div className={style.cp}>
      <ChangePinPage />
    </div>
  );
};

export default ChangePin;
