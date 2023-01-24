import React from 'react';
import { setSearch } from '../../app/features/home/searchSlice';
import { useAppDispatch } from '../../app/hooks';
import { Logo, Search } from '../../components';
import CartButton from '../../components/molecules/CartButton';

const Home = (): JSX.Element => {
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
  const dispatch = useAppDispatch();
  const onSearch = (value: string) => {
    dispatch(setSearch(value));
  };

  return (
    <>
      <Logo />
      <div>
        <CartButton items={items} total={11} />
      </div>
      <Search onSearch={onSearch} />
    </>
  );
};

export default Home;
