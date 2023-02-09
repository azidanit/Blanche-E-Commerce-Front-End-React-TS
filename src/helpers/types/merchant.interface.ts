export interface IMerchantInfo {
  id: number;
  domain: string;
  name: string;
  address: {
    province: string;
    city: string;
  };
  avg_rating: number;
  join_date: string;
  num_of_product: number;
  num_of_sale: number;
  num_of_review: number;
  image: string;
}

export type IMerchantInfoResponse = IMerchantInfo;

export interface ICreateMerchantRequest {
  domain: string;
  name: string;
  address_id: number | undefined;
}

export interface ICheckStoreNameResponse {
  is_available: boolean;
  name: string;
}

export interface ICheckDomainResponse {
  is_available: boolean;
  domain: string;
}

export interface ICheckStoreNameRequest {
  name: string;
}

export interface ICheckDomainRequest {
  domain: string;
}
