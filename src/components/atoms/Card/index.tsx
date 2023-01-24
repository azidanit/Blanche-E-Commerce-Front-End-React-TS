import classNames from 'classnames';
import React from 'react';
import style from './index.module.scss';

<<<<<<< HEAD
type CardProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  const classProps = classNames(style.card, className);
  return (
    <div className={classProps} {...props}>
      {children}
    </div>
  );
=======
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  const classProps = classNames(style.card, className);
  return <div className={classProps}>{children}</div>;
>>>>>>> 919109b (feat: layouting auth layout)
};

export default Card;
