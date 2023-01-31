import React from 'react';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import { Avatar, Card } from '../../../atoms';
import style from './index.module.scss';

const CardAvatar: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Card className={style.profile__section__avatar}>
      <Avatar size={!isMobile ? 280 : 180} />
    </Card>
  );
};

export default CardAvatar;
