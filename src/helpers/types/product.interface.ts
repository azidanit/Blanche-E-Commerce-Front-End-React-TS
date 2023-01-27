import { ICategory, IProduct } from './entity.interface';

export interface IGetProductListResponse {
  products: IProduct[];
  total_data: number;
  total_page: number;
  current_page: number;
}

export interface IGetProductListRequest {
  merchant_id?: number;
  category_id?: number;
  search?: string;
  sort_by?: string;
  sort_dir?: string;
  min_price?: number;
  max_price?: number;
  min_rating?: number;
  limit?: number;
  page?: number;
}

export type IGetCategoriesResponse = ICategory[];

export interface IGetCategoriesRequest {
  level?: number;
}
