import React from 'react';
import { Logo } from '../../components';
import CartButton from '../../components/molecules/CartButton';

const Home = (): JSX.Element => {
  const items = [
    {
      slug: 'product-1',
      title: 'Product 1',
      imgUrl: 'https://via.placeholder.com/150',
<<<<<<< HEAD
      price: 100000,
=======
      price: 100,
>>>>>>> 919109b (feat: layouting auth layout)
      quantity: 1,
    },
    {
      slug: 'product-2',
<<<<<<< HEAD
      title: 'fresh care 1box 12 pcs - hijoasd',
      imgUrl: 'https://via.placeholder.com/150',
      price: 50000,
=======
      title: 'Product 2',
      imgUrl: 'https://via.placeholder.com/150',
      price: 500,
>>>>>>> 919109b (feat: layouting auth layout)
      quantity: 10,
    },
  ];
  return (
    <>
      <Logo />
<<<<<<< HEAD
      <div>
        <CartButton items={items} total={11} />
      </div>
=======
      <CartButton items={items} total={1} />
>>>>>>> 919109b (feat: layouting auth layout)
    </>
  );
};

export default Home;
