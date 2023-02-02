import { createSlice } from '@reduxjs/toolkit';
import { IGetProductListRequest } from '../../../helpers/types';
import { parseSearchParams } from '../../../helpers/parseSearchParams';

interface SearchState {
  search: IGetProductListRequest;
}

const initialState: SearchState = {
  search: parseSearchParams(new URLSearchParams(location.search)),
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
  },
});

export const { setSearch, setParams } = searchSlice.actions;

export default searchSlice.reducer;
