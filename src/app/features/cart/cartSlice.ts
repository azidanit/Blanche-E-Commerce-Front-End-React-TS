import { createSlice } from '@reduxjs/toolkit';
const initialState: any = {
  carts: [
    {
      merchant_id: 1,
      merchant_name: 'Penak Jaya',
      merchant_image:
        'https://kaspin.sgp1.digitaloceanspaces.com/gambarToko/CcKlS2dAUqyUivRbIRrD.png',
      items: [
        {
          cart_item_id: 8,
          product_id: 100,
          variant_item_id: 100,
          merchant_id: 1,
          merchant_name: 'Penak Jaya',
          merchant_image:
            'https://kaspin.sgp1.digitaloceanspaces.com/gambarToko/CcKlS2dAUqyUivRbIRrD.png',
          image:
            'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/27/91b20769-98f0-4c1d-926e-390ddfd5a261.png.webp?ect=4g',
          name: 'LENOVO YOGA SLIM 7 CARBON TOUCH EVO - I5 1240P 16GB 512SSD IRISXE 2.5k - BUNDLE LARGE',
          price: 15799000,
          quantity: 2,
          stock: 10,
          notes: '',
          is_checked: false,
        },
        {
          cart_item_id: 7,
          product_id: 100,
          variant_item_id: 100,
          merchant_id: 1,
          merchant_name: 'Penak Jaya',
          merchant_image:
            'https://kaspin.sgp1.digitaloceanspaces.com/gambarToko/CcKlS2dAUqyUivRbIRrD.png',
          image:
            'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/27/91b20769-98f0-4c1d-926e-390ddfd5a261.png.webp?ect=4g',
          name: 'LENOVO YOGA SLIM 7 CARBON TOUCH EVO - I5 1240P 16GB 512SSD IRISXE 2.5k - BUNDLE LARGE',
          price: 15799000,
          quantity: 6,
          stock: 10,
          notes: '',
          is_checked: false,
        },
        {
          cart_item_id: 6,
          product_id: 100,
          variant_item_id: 100,
          merchant_id: 1,
          merchant_name: 'Penak Jaya',
          merchant_image:
            'https://kaspin.sgp1.digitaloceanspaces.com/gambarToko/CcKlS2dAUqyUivRbIRrD.png',
          image:
            'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/27/91b20769-98f0-4c1d-926e-390ddfd5a261.png.webp?ect=4g',
          name: 'LENOVO YOGA SLIM 7 CARBON TOUCH EVO - I5 1240P 16GB 512SSD IRISXE 2.5k - BUNDLE LARGE',
          price: 15799000,
          quantity: 3,
          stock: 10,
          notes: '',
          is_checked: false,
        },
        {
          cart_item_id: 4,
          product_id: 2,
          variant_item_id: 3,
          merchant_id: 1,
          merchant_name: 'Penak Jaya',
          merchant_image:
            'https://kaspin.sgp1.digitaloceanspaces.com/gambarToko/CcKlS2dAUqyUivRbIRrD.png',
          image:
            'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/25/82f58636-8244-4cec-b669-26a4fac77d3c.png.webp?ect=4g',
          name: 'Laptop Gaming',
          price: 34000000,
          quantity: 5,
          stock: 3,
          notes: 'hehe',
          is_checked: true,
        },
      ],
    },
    {
      merchant_id: 7,
      merchant_name: 'Zogo Jogo 2',
      merchant_image:
        'https://kaspin.sgp1.digitaloceanspaces.com/gambarToko/CcKlS2dAUqyUivRbIRrD.png',
      items: [
        {
          cart_item_id: 5,
          product_id: 11,
          variant_item_id: null,
          merchant_id: 7,
          merchant_name: 'Zogo Jogo 2',
          merchant_image:
            'https://kaspin.sgp1.digitaloceanspaces.com/gambarToko/CcKlS2dAUqyUivRbIRrD.png',
          image: '',
          name: 'Laptop Jungler',
          price: 0,
          quantity: 1,
          stock: 0,
          notes: '',
          is_checked: false,
        },
      ],
    },
  ],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCarts: (state, action) => {
      state.carts = action.payload;
    },
  },
});

export const { setCarts } = cartSlice.actions;

export default cartSlice.reducer;
