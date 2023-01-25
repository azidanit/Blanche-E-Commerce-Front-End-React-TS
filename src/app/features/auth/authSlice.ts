import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  accessToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setUser, setAccessToken } = authSlice.actions;

export default authSlice.reducer;
