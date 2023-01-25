import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: null,
  variant: null,
  isDiscount: false,
  isRangePrice: false,
  price: null,
  stock: null,
  images: null,
  activeImage: null,
  merchant: null,
  isLoading: false,
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
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setStock: (state, action) => {
      state.stock = action.payload;
    },
    setActiveImage: (state, action) => {
      state.activeImage = action.payload;
    },
    setMerchant: (state, action) => {
      state.merchant = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setProduct,
  setImages,
  setVariant,
  setIsDiscount,
  setIsRangePrice,
  setPrice,
  setStock,
  setActiveImage,
  setMerchant,
  setIsLoading,
} = productSlice.actions;

export default productSlice.reducer;
