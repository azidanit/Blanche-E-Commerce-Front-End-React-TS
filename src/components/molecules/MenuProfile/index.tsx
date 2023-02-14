import { Divider, Dropdown, MenuProps, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button } from '../../atoms';
import CardProfile from './CardProfile';
import CardWallet from './CardWallet';
import style from './index.module.scss';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <CardProfile />,
  },
  {
    key: '2',
    label: (
      <>
        <CardWallet />
        <Divider style={{ marginBottom: 0 }} />
      </>
    ),
  },
  {
    key: '3',
    label: (
      <Link to="transactions" className={style.menu__profile__item}>
        <p>My Transaction</p>
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link to="transactions" className={style.menu__profile__item}>
        <p>Favorite Product</p>
      </Link>
    ),
  },
];
const MenuProfile: React.FC = () => {
  return (
    <Dropdown menu={{ items }} className={style.menu__profile}>
      <Button className={style.menu__profile__btn} type="text">
        <Avatar />
        Giwang
      </Button>
    </Dropdown>
  );
};

export default MenuProfile;
