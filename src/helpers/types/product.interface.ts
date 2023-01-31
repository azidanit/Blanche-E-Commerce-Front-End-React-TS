import { ICategory, ICategoryItem, IProduct, ICity } from './entity.interface';

export interface IGetProductListResponse {
  products: IProduct[];
  total_data: number;
  total_page: number;
  current_page: number;
}

export interface IGetProductListRequest {
  merchant_id?: number;
  category_id?: number;
  seller_city_id?: string;
  q?: string;
  sort_by?: string;
  sort_dir?: string;
  min_price?: number;
  max_price?: number;
  min_rating?: number;
  limit?: number;
  page?: number;
}

export type IGetCategoriesResponse = ICategory[];

export type IGetCategoryAncestorsResponse = ICategoryItem;

export interface IGetCategoriesRequest {
  level?: number;
}

export interface IGetCitiesResponse {
  cities: ICity[];
}
