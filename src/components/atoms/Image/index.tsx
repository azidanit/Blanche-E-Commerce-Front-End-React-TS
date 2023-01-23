import React from 'react';
import { Image as AImage, ImageProps } from 'antd';
import style from './style.module.scss';
import classNames from 'classnames';

const Image: React.FC<ImageProps> = ({ className, ...props }) => {
  const classProps = classNames(className, style.button);

  return <AImage className={classProps} {...props} />;
};

export default Image;
