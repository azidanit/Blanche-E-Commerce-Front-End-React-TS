import { IMerchantInfo, IProductDetail, IVariant } from './entity.interface';

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
export type IMerchantInfoResponse = IMerchantInfo;
export type IProductRequest = {
  slug: string;
  store: string;
};
