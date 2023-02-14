import {
  ICategory,
  ICategoryItem,
  IProduct,
  ICity,
  IPaymentDetails,
  IProductDetails,
  IShippingDetails,
  ITransactionStatus,
} from './entity.interface';

export interface IGetProductListResponse {
  products: IProduct[];
  total_data: number;
  total_page: number;
  current_page: number;
}

export interface IGetProductListRequest {
  merchant?: string;
  cat?: string;
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

export interface IGetProductListCategoryRequest {
  merchant_id?: number;
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

export interface IGetRecommendedProductsRequest {
  page?: number;
  limit?: number;
}

export type IGetMerchantCategoriesResponse = ICategory[];

export interface IGetTransactionListRequest {
  status?: string;
  limit?: number;
  page?: number;
}

export interface IGetTransactionDetailsResponse {
  invoice_code: string;
  payment_details: IPaymentDetails;
  product_details: IProductDetails;
  shipping_details: IShippingDetails;
  transaction_status: ITransactionStatus;
}
