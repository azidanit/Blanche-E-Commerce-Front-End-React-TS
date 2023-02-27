import { createSlice } from '@reduxjs/toolkit';
import {
  IGetProfileResponse,
  IMerchantInfoResponse,
} from '../../../helpers/types';

interface StateProps {
  user: IGetProfileResponse | null;
  merchant: IMerchantInfoResponse | null;
  isLoggedIn: boolean;
}

const initialState: StateProps = {
  user: null,
  merchant: null,
  isLoggedIn: localStorage.getItem('token') ? true : false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setMerchant: (state, action) => {
      state.merchant = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logout, setIsLoggedIn, setMerchant } =
  authSlice.actions;

export default authSlice.reducer;
