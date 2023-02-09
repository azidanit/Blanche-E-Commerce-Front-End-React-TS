import { IProductDetail, IVariant } from './entity.interface';

export interface IUser {
  id?: number;
  fullname?: string;
  email?: string;
  password: string;
  address?: string;
  photo?: string;
  role?: string;
}

export type IProductResponse = IProductDetail;
export type IVariantProductResponse = IVariant;
export type IProductRequest = {
  slug: string;
  store: string;
};

export interface IErrorResponse {
  message: string;
  status: number;
  code: number;
}
