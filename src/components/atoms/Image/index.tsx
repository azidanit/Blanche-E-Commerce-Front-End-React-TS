/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Image: React.FC<ImageProps> = ({ className, onClick, src, alt }) => {
  const classProps = classNames(className, style.image);

  return (
    <div className={classProps} onClick={onClick}>
      <img className={style.image__img} src={src} alt={alt} />
    </div>
  );
};

export default Image;
