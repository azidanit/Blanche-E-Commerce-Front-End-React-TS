import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { Button, Logo, Search } from '../../atoms';
import style from './index.module.scss';
import CartButton from '../CartButton';
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useLogoutMutation } from '../../../app/features/auth/authApiSlice';
import { logout, setUser } from '../../../app/features/auth/authSlice';

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
  const navigate = useNavigate();
  const params = useAppSelector((state) => state.params);
  const [search, setSearch] = useState('');
  const [searchParams] = useSearchParams();

  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [logOut, { isError, isLoading }] = useLogoutMutation();

  useEffect(() => {
    const search = params.search.q;
    setSearch(search || '');
  }, [params.search.q, searchParams]);

  const onSearch = (value: string) => {
    navigate({
      pathname: '/search',
      search: createSearchParams({ q: value }).toString(),
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleLogout = async () => {
    await logOut().unwrap();
    dispatch(logout());
  };

  return (
    <Header className={style.header}>
      <nav className={style.nav}>
        <Logo className={style.nav__logo} size="small" />
        <Search
          onSearch={onSearch}
          placeholder="Search on blanche"
          defaultValue={params.search.q}
          onChange={onChange}
          value={search}
        />{' '}
        <CartButton
          total={total}
          items={items}
          onClick={() => navigate('/cart')}
        />
        <div
          className={style.header__button}
          style={{ display: 'flex', gap: 10 }}
        >
          {!user ? (
            <>
              <Button
                type="primary"
                size="small"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
              <Button
                type="primary"
                size="small"
                ghost
                onClick={() => navigate('/register')}
              >
                Register
              </Button>
            </>
          ) : (
            <Button onClick={handleLogout} loading={isLoading}>
              Logout
            </Button>
          )}
        </div>
      </nav>
    </Header>
  );
};

export default Nav;
