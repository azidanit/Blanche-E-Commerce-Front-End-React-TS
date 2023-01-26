import React from 'react';
import { Avatar as AAvatar, AvatarProps } from 'antd';

const Avatar: React.FC<AvatarProps> = ({ ...props }) => {
  return <AAvatar {...props} />;
};

export default Avatar;
