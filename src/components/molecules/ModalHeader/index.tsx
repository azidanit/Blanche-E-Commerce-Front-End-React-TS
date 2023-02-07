import React from 'react';
import style from './index.module.scss';

interface ModalHeaderProps {
  title: string;
  info?: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, info }) => {
  return (
    <div className={style.modal__header}>
      <h5 className={style.modal__header__title}>{title}</h5>
      <p className={style.modal__header__info}>{info}</p>
    </div>
  );
};

export default ModalHeader;
