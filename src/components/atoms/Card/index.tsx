import classNames from 'classnames';
import React from 'react';
import style from './index.module.scss';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  const classProps = classNames(style.card, className);
  return <div className={classProps}>{children}</div>;
};

export default Card;
