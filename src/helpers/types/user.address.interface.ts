export interface IAddUserAddressRequest {
  phone: string;
  name: string;
  province_id: number;
  city_id: number;
  district_id: number;
  subdistrict_id: number;
  label: string;
}

export interface IUserAddress {
  id: number;
  phone: string;
  name: string;
  province_name: string;
  province_id: number;
  city_name: string;
  city_id: number;
  district_name: string;
  district_id: number;
  subdistrict_name: string;
  subdistrict_id: number;
  zip_code: string;
  label: string;
  is_default: boolean;
}

export type IGetUserAddressResponse = IUserAddress[];
