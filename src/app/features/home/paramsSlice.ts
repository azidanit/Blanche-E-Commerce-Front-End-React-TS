import { createSlice } from '@reduxjs/toolkit';
import { IGetProductListRequest } from '../../../helpers/types';
import { mappedSortOptions } from '../../../pages/SearchResult/options';
import queryString from 'query-string';

const getQueryParams = (url: string) => {
  const parsed = queryString.parse(url);
  if (parsed.ob) {
    parsed.sort_by = mappedSortOptions[parsed.ob as string].sort_by;
    parsed.sort_dir = mappedSortOptions[parsed.ob as string].sort_dir;
    delete parsed['ob'];
  }
  return parsed;
};

interface SearchState {
  search: IGetProductListRequest;
}

const initialState: SearchState = {
  search: getQueryParams(location.search),
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setParams: (state, action) => {
      state.search = { ...state.search, ...action.payload };
    },
    setSearch: (state, action) => {
      state.search = { q: action.payload };
    },
  },
});

export const { setSearch, setParams } = searchSlice.actions;

export default searchSlice.reducer;
