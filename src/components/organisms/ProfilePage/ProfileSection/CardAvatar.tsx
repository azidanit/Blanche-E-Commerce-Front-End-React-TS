import React from 'react';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import { Avatar, Button, Card } from '../../../atoms';
import style from './index.module.scss';

interface CardAvatarProps {
  src: string;
}

const CardAvatar: React.FC<CardAvatarProps> = ({ src }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Card className={style.profile__section__avatar}>
      <Avatar
        shape="square"
        className={style.profile__section__avatar__photo}
        src={src}
        alt="profile"
      />
      <Button className={style.profile__section__avatar__button} block>
        Edit photo
      </Button>
    </Card>
  );
};

export default CardAvatar;
