import React from 'react';
import { Badge as ABadge, BadgeProps } from 'antd';
import classNames from 'classnames';
import style from './index.module.scss';

type BadgeColor = 'success' | 'primary' | 'danger' | 'secondary';

type props = BadgeProps & {
  type?: BadgeColor;
};
const getColor = (type: any) => {
  if (type === 'success') {
    return {
      color: '#81d687',
    };
  }
};

const Badge: React.FC<props> = ({ className, color, children, ...props }) => {
  const classProps = classNames(className);

  const colorProps = getColor(color)?.color;

  return (
    <ABadge {...props} color={colorProps} className={classProps}>
      {children}
    </ABadge>
  );
};

export default Badge;
