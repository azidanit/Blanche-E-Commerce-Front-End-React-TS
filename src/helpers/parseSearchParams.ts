import { mappedSortOptions } from '../components/organisms/SortProduct/options';
import { IParams } from './types';

const searchParamsKeys = [
  'merchant_id',
  'cat',
  'seller_city_id',
  'q',
  'min_price',
  'max_price',
  'min_rating',
  'limit',
  'page',
  'status',
];

export const parseSearchParams = (searchParams: URLSearchParams): IParams => {
  const params: { [key: string]: string } = {};
  const ob = searchParams.get('ob');
  if (ob) {
    params.sort_dir = mappedSortOptions[ob].sort_dir;
    params.sort_by = mappedSortOptions[ob].sort_by;
  }
  searchParamsKeys.forEach((key) => {
    const value = searchParams.get(key);
    if (value) {
      params[key] = value;
    }
  });
  return params;
};

export const deleteAllSearchParams = (
  searchParams: URLSearchParams,
): URLSearchParams => {
  for (const key of searchParams.keys()) {
    if (key !== 'q') searchParams.delete(key);
  }
  return searchParams;
};
