import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: null,
  variant: null,
  isDiscount: false,
  isRangePrice: false,
  isRangePriceDiscount: false,
  price: null,
  stock: null,
  images: null,
  activeImage: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setVariant: (state, action) => {
      state.variant = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setIsDiscount: (state, action) => {
      state.isDiscount = action.payload;
    },
    setIsRangePrice: (state, action) => {
      state.isRangePrice = action.payload;
    },
    setIsRangePriceDiscount: (state, action) => {
      state.isRangePriceDiscount = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setStock: (state, action) => {
      state.stock = action.payload;
    },
    setActiveImage: (state, action) => {
      state.activeImage = action.payload;
    },
  },
});

export const {
  setProduct,
  setImages,
  setVariant,
  setIsDiscount,
  setIsRangePrice,
  setIsRangePriceDiscount,
  setPrice,
  setStock,
  setActiveImage,
} = productSlice.actions;

export default productSlice.reducer;
