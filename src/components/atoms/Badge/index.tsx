import React from 'react';
import { Badge as ABadge, BadgeProps } from 'antd';
import classNames from 'classnames';
import style from './index.module.scss';

type BadgeColor = 'success' | 'primary' | 'danger' | 'secondary';

type props = BadgeProps & {
  type: BadgeColor;
};

const Badge: React.FC<props> = ({ type, className, ...props }) => {
  const classProps = classNames(className, style[type]);

  return <ABadge {...props} className={classProps} />;
};

export default Badge;
