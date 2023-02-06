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
  province: string | undefined;
  city: string | undefined;
  district: string | undefined;
  subDistrict: string | undefined;
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
  setOption: React.Dispatch<React.SetStateAction<OptionType>>;
  handleChangeProvince: (province: string) => void;
  handleChangeCity: (city: string) => void;
  handleChangeDistrict: (district: string) => void;
  handleChangeSubDistrict: (subDistrict: string) => void;
}
