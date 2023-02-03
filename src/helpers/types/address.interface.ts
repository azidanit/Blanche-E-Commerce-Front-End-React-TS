import { DefaultOptionType } from 'antd/es/select';

export interface IProvinces {
  id: number;
  name: string;
}

export interface IDistrict {
  id: number;
  ro_id: number;
  name: string;
}

export interface ISubDistrict {
  id: number;
  name: string;
  zip_code: string;
}
export type IGetProvincesResponse = {
  provinces: IProvinces[];
};

export type IGetCitiesByProvinceIdResponse = {
  cities: IProvinces[];
  provinces: IProvinces[];
};

export type IGetDistrictsByCityIdResponse = {
  cities: IProvinces[];
  districts: IDistrict[];
};
export type IGetSubdistrictsByDistrictIdResponse = {
  districts: IDistrict[];
  sub_districts: ISubDistrict[];
};

export interface SelectedInput {
  province: string | null;
  city: string | null;
  district: string | null;
  subDistrict: string | null;
}

export interface OptionType {
  provinces: DefaultOptionType[] | undefined;
  cities: DefaultOptionType[] | undefined;
  districts: DefaultOptionType[] | undefined;
  subDistrict: DefaultOptionType[] | undefined;
}

export interface AddAddressProps {
  province?: string;
  city?: string;
  district?: string;
  subDistrict?: string;
  address?: string;
  zipCode?: string;
  label?: string;
  name?: string;
  contact?: string;
}

export interface FormReturnAddress<T> {
  handleSubmit: (values: T) => void;
  isLoading?: boolean;
  isError?: boolean;
  error?: Error;
  values?: T;
  selectedInput: SelectedInput;
  option: OptionType;
  setOption: (value: OptionType) => void;
  handleChangeSelect: (value: string, name: string) => void;
}
