import { createSlice } from '@reduxjs/toolkit';
import { IGetProductListRequest } from '../../../helpers/types';

interface SearchState {
  search: IGetProductListRequest;
}

const initialState: SearchState = {
  search: {},
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setParams: (state, action) => {
      state.search = { ...action.payload };
    },
    setSearch: (state, action) => {
      state.search = { q: action.payload };
    },
    clearQ: (state) => {
      state.search = { ...state.search, q: undefined };
    },
  },
});

export const { setSearch, setParams } = searchSlice.actions;

export default searchSlice.reducer;
