/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
<<<<<<< HEAD
} & React.HTMLAttributes<HTMLDivElement>;

const Image: React.FC<ImageProps> = ({ className, src, alt, ...props }) => {
  const classProps = classNames(className, style.image);

  return (
    <div className={classProps} {...props}>
=======
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Image: React.FC<ImageProps> = ({ className, onClick, src, alt }) => {
  const classProps = classNames(className, style.image);

  return (
    <div className={classProps} onClick={onClick}>
>>>>>>> 4e7814c (feat: styling product gallery)
      <img className={style.image__img} src={src} alt={alt} />
    </div>
  );
};

export default Image;
