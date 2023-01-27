import React from 'react';
import { Layout } from 'antd';
import { Logo, Search } from '../../atoms';
import style from './index.module.scss';
import CartButton from '../CartButton';
import { useAppDispatch } from '../../../app/hooks';
import { setSearch } from '../../../app/features/home/searchSlice';
import Container from '../Container';

const { Header } = Layout;

const total = 11;
const items = [
  {
    slug: 'product-1',
    title: 'Product 1',
    imgUrl: 'https://via.placeholder.com/150',
    price: 100000,
    quantity: 1,
  },
  {
    slug: 'product-2',
    title: 'fresh care 1box 12 pcs - hijoasd',
    imgUrl: 'https://via.placeholder.com/150',
    price: 50000,
    quantity: 10,
  },
];

const Nav: React.FC = () => {
  const dispatch = useAppDispatch();
  const onSearch = (value: string) => {
    dispatch(setSearch(value));
  };
  return (
    <Header className={style.header}>
      <nav className={style.nav}>
        <Logo className={style.nav__logo} size="small" />
        <Search onSearch={onSearch} />
        <CartButton total={total} items={items} />
      </nav>
    </Header>
  );
};

export default Nav;
